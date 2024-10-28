
;; title: v2DAOToken
;; version:
;; summary:
;; description:

;; traits
;;
(define-trait sip-010-trait
  (
    (transfer (uint principal principal (optional (buff 34))) (response bool uint))
    (get-name () (response (string-ascii 32) uint))
    (get-symbol () (response (string-ascii 32) uint))
    (get-decimals () (response uint uint))
    (get-balance (principal) (response uint uint))
    (get-total-supply () (response uint uint))
    (get-token-uri () (response (optional (string-utf8 256)) uint))
  )
)
;; token definitions
;;
(define-fungible-token DaoToken u5000000000000) 

;; constants
;;

(define-constant TOKEN_DECIMALS u6)
(define-constant contract-owner tx-sender)
(define-constant err-owner-only (err u100))
(define-constant err-not-token-owner (err u101))
(define-constant err-amount-less-than-zero (err u102))
(define-data-var counter uint u0)
(define-data-var token-name (string-ascii 32) "DAOBuilder") 
(define-data-var token-symbol (string-ascii 32) "DAO")

;; data vars
;;

;; data maps
;;

;; public functions
;;

;;#[allow(unchecked_data)]
(define-public (mint (amount uint) (recipient principal))
    (begin
        (asserts! (> amount u0) err-amount-less-than-zero)
        (ft-mint? DaoToken amount recipient)
    )
)


;;#[allow(unchecked_data)]
(define-public (transfer (amount uint) (sender principal) (recipient principal) (memo (optional (buff 34))))
    (begin
        (asserts! (> amount u0) err-amount-less-than-zero)
        (asserts! (is-eq tx-sender sender) err-not-token-owner)
        (try! (ft-transfer? DaoToken amount sender recipient))
        (match memo to-print (print to-print) 0x)
        (ok true)
    )
)

;;#[allow(unchecked_data)]
(define-public (set-token-name (name (string-ascii 32)))
    (begin
        (asserts! (is-eq tx-sender contract-owner) err-owner-only)
        (var-set token-name name)
        (ok true)
    )
)
;; read only functions
;;

(define-read-only (get-balance (owner principal))
    (ok (ft-get-balance DaoToken owner))
)

(define-read-only (get-total-supply)
    (ok (ft-get-supply DaoToken))
)

(define-read-only (get-token-uri)
    (ok (var-get token-name))
)

(define-read-only (get-name)
    (ok (var-get token-name))
)

(define-read-only (get-symbol)
    (ok (var-get token-symbol))
)

(define-read-only (get-decimals)
    (ok u6)
)

;; private functions
;;

