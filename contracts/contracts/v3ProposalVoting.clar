;; title: v3ProposalVoting
;; version:
;; summary: Proposal and voting management using SFTs across multiple DAOs.
;; description: This contract allows users to participate in governance across multiple DAOs using SFT tokens.

;; traits
;;

;; error constants
(define-constant err-unauthorised (err u3000))
(define-constant err-proposal-already-executed (err u3002))
(define-constant err-proposal-already-exists (err u3003))
(define-constant err-unknown-proposal (err u3004))
(define-constant err-proposal-already-concluded (err u3005))
(define-constant err-proposal-inactive (err u3006))
(define-constant err-proposal-not-concluded (err u3007))
(define-constant err-no-votes-to-return (err u3008))
(define-constant err-end-block-height-not-reached (err u3009))
(define-constant err-insufficient-balance (err u3011))

;; Map definitions
(define-map proposals
	uint
	{
		votes-for: uint,
		votes-against: uint,
		start-block-height: uint,
		end-block-height: uint,
        dao-id: uint,
		concluded: bool,
		passed: bool,
		proposer: principal
	}
)

(define-map member-total-votes {proposal: uint, voter: principal} uint)

;; Function to add proposals
(define-public (add-proposal (proposal uint) (data {start-block-height: uint, end-block-height: uint, proposer: principal, dao-id: uint}))
	(begin
		(print {event: "propose", proposal: proposal, proposer: tx-sender, dao-id: (get dao-id data)})
		(ok (asserts! 
			(map-insert proposals proposal 
				(merge {votes-for: u0, votes-against: u0, concluded: false, passed: false, dao-id: (get dao-id data)} data)
			) 
			err-proposal-already-exists))
	)
)

;; Function to get a user's SFT balance for a specific DAO
(define-read-only (get-user-balance (dao-id uint) (user principal))
    (ok u50) ;; Returns a simulated balance for illustration purposes
)

;; Voting function that checks SFT balance before allowing a vote
(define-public (vote (amount uint) (for bool) (proposal uint))
	(let
		(
			(proposal-data (unwrap! (map-get? proposals proposal) err-unknown-proposal))
			(dao-id (get dao-id proposal-data))
			(user-balance (unwrap! (get-user-balance dao-id tx-sender) err-insufficient-balance))
		)
		(begin
			(asserts! (>= user-balance amount) err-insufficient-balance) ;; Ensure user has enough SFT tokens
			;; (asserts! (>= block-height (get start-block-height proposal-data)) err-proposal-inactive)
			;; (asserts! (< block-height (get end-block-height proposal-data)) err-proposal-inactive)
			
			(map-set member-total-votes {proposal: proposal, voter: tx-sender}
				(+ (get-current-total-votes proposal tx-sender) amount)
			)
			(map-set proposals proposal
				(if for
					(merge proposal-data {votes-for: (+ (get votes-for proposal-data) amount)})
					(merge proposal-data {votes-against: (+ (get votes-against proposal-data) amount)})
				)
			)
			(print {event: "vote", proposal: proposal, voter: tx-sender, for: for, amount: amount})
			(ok {event: "vote", proposal: proposal, voter: tx-sender, for: for, amount: amount})
		)
	)
)

;; Function to retrieve data of a proposal
(define-read-only (get-proposal-data (proposal uint))
	(map-get? proposals proposal)
)

;; Function to get the current total votes of a member on a specific proposal
(define-read-only (get-current-total-votes (proposal uint) (voter principal))
	(default-to u0 (map-get? member-total-votes {proposal: proposal, voter: voter}))
)
