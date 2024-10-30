// Tokens.tsx
import React from 'react';
import './../Tokens.module.css'; // Import CSS for styling

// Sample data for tokens; in a real scenario, you would fetch this from an API
const tokens = [
  { name: 'Token A', symbol: 'TKA', address: 'SP2C2S6RX3...' },
  { name: 'Token B', symbol: 'TKB', address: 'SP1ABCDEF...' },
  { name: 'Token C', symbol: 'TKC', address: 'SP3XYZ123...' },
  // Add more tokens as needed
];

const Tokens: React.FC = () => {
  const explorerBaseUrl = 'https://explorer.stacks.co/address/';

  return (
    <div className="tokens-page">
      <h1>Available Tokens</h1>
      <div className="tokens-feed">
        {tokens.map((token, index) => (
          <a
            key={index}
            href={`${explorerBaseUrl}${token.address}?chain=mainnet`}
            target="_blank"
            rel="noopener noreferrer"
            className="token-tile"
          >
            <div className="token-info">
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