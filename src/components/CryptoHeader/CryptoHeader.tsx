import React from "react";
import Ethereum from "../Icons/Ethereum";
import "./CryptoHeader.scss";

export default function CryptoHeader({
  name,
  symbol,
  price,
  changePercent
}: any) {
  return (
    <div className="crypto-header">
      <div className="crypto-head">
        <div className="crypto-type">
          <Ethereum className="crypto-icon" />
        </div>
        <h1>
          {name} <span className="symbol">{symbol}</span>
        </h1>
      </div>
      <div className="crypto-price">
        <h1>{price}</h1>
        <p>{changePercent && changePercent.substring(0, 5)}</p>
        <div></div>
      </div>
    </div>
  );
}

CryptoHeader.defaultProps = {
  name: "Ethereum",
  symbol: "ETC",
  price: 216.65,
  changePercent: "3.29941"
};
