











(define-private (payout-balance)
  (unwrap-panic (as-contract (stx-transfer? (var-get balance) escrow seller)))
)
