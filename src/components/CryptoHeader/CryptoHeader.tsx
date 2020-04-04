import React, { useState } from "react";
import Asset from "./Asset";
import "./CryptoHeader.scss";

export default function CryptoHeader({
  name,
  symbol,
  price,
  changePercent,
  priceUsd
}: any) {
  const [isRealTime, setRealTime] = useState(true);
  const isPositive = Math.sign(changePercent);
  return (
    <div className="crypto-header">
      <div className="crypto-head">
        <Asset symbol={symbol} name={name} />
      </div>
      <div
        className="crypto-price"
        onClick={() => {
          setRealTime(!isRealTime);
        }}
      >
        <h1>${isRealTime ? price : parseFloat(priceUsd).toFixed(2)}</h1>

        <strong className={isPositive === 1 ? "up" : "down"}>
          {isPositive === 1 ? "+" : ""}
          {changePercent && changePercent.substring(0, 5) + "%"}
        </strong>

        <div></div>
      </div>
    </div>
  );
}
