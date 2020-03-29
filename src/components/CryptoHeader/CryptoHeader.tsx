import React from "react";
import Ethereum from "../Icons/Ethereum";
import "./CryptoHeader.scss";

export default function CryptoHeader() {
  return (
    <div className="crypto-header">
      <div className="crypto-head">
        <div className="crypto-type">
          <Ethereum className="crypto-icon" />
        </div>
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
