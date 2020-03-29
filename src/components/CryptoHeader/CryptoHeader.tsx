import React from "react";

export default function CryptoHeader() {
  return (
    <div className="crypto-header">
      <div className="crypto-head">
        <div className="crypto-type"></div>
        <h1>
          Ethereum <span className="symbol">ETC</span>
        </h1>
      </div>
      <div className="crypto-price">
        <h1>2,896.65</h1>
        <p>^3.25%</p>
        <div></div>
      </div>
    </div>
  );
}