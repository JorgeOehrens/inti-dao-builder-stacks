;; title: FactoryDAO
;; version:
;; summary:
;; description:

(define-constant contract-owner tx-sender)

(use-trait ft-trait 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)

(define-map listings-daos uint
{
    name-dao : (string-ascii 32),
    type-dao: principal,
    ens-subdomain : (string-ascii 32),
    description : (string-ascii 32),
    token-name: (string-ascii 32),
    token-address : principal,
    token-symbol: (string-ascii 32),
})

(define-data-var listing-nonce uint u0)

(define-private (transfer-ft
  (token-contract <ft-trait>)
  (amount uint)
  (sender principal)
  (recipient principal))
  (contract-call? token-contract transfer amount sender recipient none)
)

;;#[allow(unchecked_data)]
(define-public (create-listing
  (name-dao (string-ascii 32))
  (type-dao principal)
  (ens-subdomain (string-ascii 32))
  (description (string-ascii 32))
  (token-name (string-ascii 32))
  (token-address principal)
  (token-symbol (string-ascii 32)))
  (let ((listing-id (var-get listing-nonce)))
    (begin
      (map-set listings-daos listing-id
        (tuple (name-dao name-dao)
               (type-dao type-dao)
               (ens-subdomain ens-subdomain)
               (description description)
               (token-name token-name)
               (token-address token-address)
               (token-symbol token-symbol)))
      (var-set listing-nonce (+ listing-id u1))
      (ok listing-id)
    )
  )
)

(define-read-only (get-listing (listing-id uint))
  (map-get? listings-daos listing-id)
)
