import React from "react";
import Asset from "./Asset";
import CryptoPrice from "./CryptoPrice";
import "./CryptoHeader.scss";

export default function CryptoHeader({
  name,
  symbol,
  price,
  changePercent,
  priceUsd
}: any) {
  return (
    <div className="crypto-header">
      <div className="crypto-head">
        <Asset symbol={symbol} name={name} />
      </div>
      <CryptoPrice
        changePercent={changePercent.toFixed(3)}
        price={price}
        priceUsd={priceUsd}
      />
    </div>
  );
}
