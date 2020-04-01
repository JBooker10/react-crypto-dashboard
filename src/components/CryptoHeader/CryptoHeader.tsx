import React from "react";
import Asset from "./Asset";
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
        <Asset symbol={symbol} name={name} />
      </div>
      <div className="crypto-price">
        <h1>${price}</h1>
        <p>{changePercent && changePercent.substring(0, 5)}</p>
        <div></div>
      </div>
    </div>
  );
}
