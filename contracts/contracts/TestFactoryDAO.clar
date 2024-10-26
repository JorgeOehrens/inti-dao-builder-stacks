;; title: TESTFactoryDAO
;; version:
;; summary:
;; description:

(define-constant contract-owner tx-sender)


(define-map listings-daos uint
{
    name-dao : (string-ascii 32),
    token-symbol : (string-ascii 32),
})

(define-data-var listing-nonce uint u0)


;;#[allow(unchecked_data)]
(define-public (create-listing
  (name-dao (string-ascii 32))
  (token-symbol (string-ascii 32))  
)
  (let ((listing-id (var-get listing-nonce)))
    (begin
      (map-set listings-daos listing-id
        (tuple (name-dao name-dao)
               (token-symbol token-symbol)))  
      (var-set listing-nonce (+ listing-id u1))
      (ok listing-id)
    )
  )
)

(define-read-only (get-listing (listing-id uint))
  (map-get? listings-daos listing-id)
)
