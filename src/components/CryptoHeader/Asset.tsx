import React from "react";
import { Asset } from "./../type";
import {
  Ethereum,
  Bitcoin,
  Ripple,
  Monero,
  Litecoin,
  BasicAttentionToken,
  Nem,
  Stellar,
  Dash
} from "../Icons";

export default function CryptoAsset({ symbol, name }: Asset) {
  const getAssetIcon = (symbol: string) => {
    switch (symbol) {
      case "ETC":
      case "ETH":
        return <Ethereum className="crypto-icon" />;
      case "BTC":
        return <Bitcoin className="bitcoin-icon" />;
      case "XRP":
        return <Ripple className="bitcoin-icon" />;
      case "XMR":
        return <Monero className="bitcoin-icon" />;
      case "LTC":
        return <Litecoin className="bitcoin-icon" />;
      case "BAT":
        return <BasicAttentionToken className="bitcoin-icon" />;
      case "XEM":
        return <Nem className="bitcoin-icon" />;
      case "XLM":
        return <Stellar className="bitcoin-icon" />;
      case "DASH":
        return <Dash className="bitcoin-icon" />;
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
