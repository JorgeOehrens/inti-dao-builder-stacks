;; title: FactoryDAO
;; version:
;; summary:
;; description:

(define-constant contract-owner tx-sender)


(define-map listings-daos uint
{
    name-dao : (string-ascii 32),
    type-dao: (string-ascii 32),
    ens-subdomain : (string-ascii 32),
    description : (string-ascii 32),
    token-name: (string-ascii 32),
    token-symbol: (string-ascii 32),
})

(define-data-var listing-nonce uint u0)



;;#[allow(unchecked_data)]
(define-public (create-listing
  (name-dao (string-ascii 32))
  (type-dao (string-ascii 32))
  (ens-subdomain (string-ascii 32))
  (description (string-ascii 32))
  (token-name (string-ascii 32))
  (token-symbol (string-ascii 32)))
  (let ((listing-id (var-get listing-nonce)))
    (begin
      (map-set listings-daos listing-id
        (tuple (name-dao name-dao)
               (type-dao type-dao)
               (ens-subdomain ens-subdomain)
               (description description)
               (token-name token-name)
               (token-symbol token-symbol)))
      (var-set listing-nonce (+ listing-id u1))
      (ok listing-id)
    )
  )
)

(define-read-only (get-listing (listing-id uint))
  (map-get? listings-daos listing-id)
)
