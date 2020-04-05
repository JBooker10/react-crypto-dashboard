import React from "react";

export default function CryptoPrice({ price, priceUsd, changePercent }: any) {
  const isPositive = Math.sign(changePercent);
  return (
    <div className="crypto-price">
      <h1>
        $
        {price ? parseFloat(price).toFixed(2) : parseFloat(priceUsd).toFixed(2)}
      </h1>
      <strong className={isPositive === 1 ? "up" : "down"}>
        {isPositive === 1 ? "+" : ""}
        {changePercent}
      </strong>
      <div></div>
    </div>
  );
}
