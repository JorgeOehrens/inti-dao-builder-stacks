
;; title: v3DAO
;; version:
;; summary:
;; description:

;; traits
;;
;; token definitions
;;

;; constants
;;


(define-constant contract-owner tx-sender)

;; data vars
;;

(define-data-var listing-nonce uint u0)

;; data maps
;;


(define-map listings-daos uint
{
    name-dao : (string-ascii 32),
    type-dao: (string-ascii 32),
    privacy-dao: (string-ascii 32),
    initial-tokens: uint,

    ens-subdomain : (string-ascii 32),
    description : (string-ascii 32),
    token-name: (string-ascii 32),
    token-symbol: (string-ascii 32),
})

;; public functions
;;

;;#[allow(unchecked_data)]
(define-public (create-listing
  (name-dao (string-ascii 32))
  (type-dao (string-ascii 32))
  (privacy-dao (string-ascii 32))
  (initial-tokens uint)

  (ens-subdomain (string-ascii 32))
  (description (string-ascii 32))
  (token-name (string-ascii 32))
  (token-symbol (string-ascii 32)))
  (let ((listing-id (var-get listing-nonce)))
    (begin
      (map-set listings-daos listing-id
        (tuple (name-dao name-dao)
               (type-dao type-dao)
                (initial-tokens initial-tokens)

                (privacy-dao privacy-dao )
               (ens-subdomain ens-subdomain)
               (description description)
               (token-name token-name)
               (token-symbol token-symbol)))

      (var-set listing-nonce (+ listing-id u1))
      
      (try! (contract-call? .v3DAOToken create-dao listing-id initial-tokens tx-sender))


      (ok listing-id)
    )
  )
)


;; read only functions
;;

(define-read-only (get-listing (listing-id uint))
  (map-get? listings-daos listing-id)
)

;; private functions
;;

