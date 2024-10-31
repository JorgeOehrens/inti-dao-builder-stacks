// Tokens.tsx
import React from "react";
import styles from "./../Tokens.module.css"; // Cambia la importación a "styles"

const tokens = [
  { name: "Token A", symbol: "TKA", address: "SP2C2S6RX3..." },
  { name: "Token B", symbol: "TKB", address: "SP1ABCDEF..." },
  { name: "Token C", symbol: "TKC", address: "SP3XYZ123..." },
];

const Tokens: React.FC = () => {
  const explorerBaseUrl = "https://explorer.stacks.co/address/";

  return (
    <div className={styles.tokensPage}>
      {" "}
      <h1>Available Tokens</h1>
      <div className={styles.tokensFeed}>
        {" "}
        {tokens.map((token, index) => (
          <a
            key={index}
            href={`${explorerBaseUrl}${token.address}?chain=mainnet`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.tokenTile}
          >
            <div className={styles.tokenInfo}>
              {" "}
              <h2>{token.name}</h2>
              <p>Symbol: {token.symbol}</p>
              <p>Address: {token.address}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tokens;
