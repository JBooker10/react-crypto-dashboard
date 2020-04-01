import React from "react";
import { Ethereum, Bitcoin } from "../Icons";

export default function CryptoAsset({ symbol, asset, name }: any) {
  const getAssetIcon = (symbol: string) => {
    switch (symbol) {
      case "ETC":
      case "ETH":
        return <Ethereum className="crypto-icon" />;
      case "BTC":
        return <Bitcoin className="bitcoin-icon" />;
      default:
        return;
    }
  };

  return (
    <>
      <div className="crypto-type">{getAssetIcon(symbol)}</div>
      <h1>
        {name} <span className="symbol">{symbol}</span>
      </h1>
    </>
  );
}
