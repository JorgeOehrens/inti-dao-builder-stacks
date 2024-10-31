;; title: v3ProposalVoting
;; version:
;; summary: Proposal and voting management using SFTs across multiple DAOs.
;; description: This contract allows users to participate in governance across multiple DAOs using SFT tokens.


(define-constant err-unauthorised (err u3000))
(define-constant err-proposal-already-executed (err u3002))
(define-constant err-proposal-already-exists (err u3003))
(define-constant err-unknown-proposal (err u3004))
(define-constant err-proposal-already-concluded (err u3005))
(define-constant err-proposal-inactive (err u3006))
(define-constant err-proposal-not-concluded (err u3007))
(define-constant err-no-votes-to-return (err u3008))
(define-constant err-end-block-height-not-reached (err u3009))
(define-constant err-insufficient-balance (err u3010))
(define-constant err-invalid-dao (err u3011))

(define-data-var proposals-nonce uint u0)

;; Map definitions
(define-map proposals
    uint
    {
        votes-for: uint,
        question: (string-ascii 32),
        votes-against: uint,
        dao-id: uint,
        concluded: bool,
        passed: bool,
        proposer: principal
    }
)

(define-map member-total-votes {proposal: uint, voter: principal} uint)


;; Public function to create a new proposal}

;;#[allow(unchecked_data)]
(define-public (create-proposal
  (votes-for uint)
  (question (string-ascii 32))
  (votes-against uint)
  (dao-id uint)
  (concluded bool)
  (passed bool)
  (proposer principal))
  
  (let ((proposal-id (var-get proposals-nonce)))
    (begin
      (map-set proposals proposal-id
        {
          votes-for: votes-for,
          question: question,
          votes-against: votes-against,
          dao-id: dao-id,
          concluded: concluded,
          passed: passed,
          proposer: proposer
        })
      
      (var-set proposals-nonce (+ proposal-id u1))
      
      (ok proposal-id)
    )
  )
)


;; Function to get a user's SFT balance for a specific DAO *example*
(define-read-only (get-user-balance (dao-id uint) (user principal))
    (ok u50) 
)

(define-read-only (get-current-total-votes (proposal uint) (voter principal))
    (default-to u0 (map-get? member-total-votes {proposal: proposal, voter: voter}))
)

;;#[allow(unchecked_data)]
(define-public (vote (for bool) (proposal uint))
    (let
        (
            (proposal-data (unwrap! (map-get? proposals proposal) err-unknown-proposal))
            (dao-id (get dao-id proposal-data))
            (current-votes (get-current-total-votes proposal tx-sender)) 
            (current-tokens-response (as-contract (contract-call? .v3DAOToken get-balance dao-id tx-sender)))
            (current-tokens (unwrap! current-tokens-response err-insufficient-balance))
        )
        (begin
            (asserts! (>= current-tokens u1) err-insufficient-balance)
            (asserts! (is-eq current-votes u0) err-no-votes-to-return)


            (map-set member-total-votes {proposal: proposal, voter: tx-sender} u1)
            (map-set proposals proposal
                (if for
                    (merge proposal-data {votes-for: (+ (get votes-for proposal-data) u1)})
                    (merge proposal-data {votes-against: (+ (get votes-against proposal-data) u1)})
                )
            )
            (print {event: "vote", proposal: proposal, voter: tx-sender, for: for, amount: u1})
            (ok {event: "vote", proposal: proposal, voter: tx-sender, for: for, amount: u1})
        )
    )
)


(define-read-only (get-proposal-data (proposal uint))
    (map-get? proposals proposal)
)
