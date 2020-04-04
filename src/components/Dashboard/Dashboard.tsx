import React, { useEffect, useContext } from "react";

import Navbar from "./../Navbar/Navbar";
import Metrics from "./../Metrics/Metrics";
import CryptoHeader from "./../CryptoHeader/CryptoHeader";
import CryptoData from "./../CryptoData/CryptoData";
import cryptoCurrencyCTX from "./../../context/cryptocurrency/cryptoCurrencyContext";
import pricingContext from "./../../context/pricing/pricingContext";
import "./Dashboard.scss";

export default function Dashboard() {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const pricingCTX = useContext(pricingContext);
  const { streamTopPrices, topPrices } = pricingCTX;
  const { getAsset, getStats, searchAsset, asset, loading, stats } = cryptoCTX;

  useEffect(() => {
    getAsset(searchAsset.name);
    getStats(searchAsset.symbol);
    streamTopPrices(
      "ethereum",
      "bitcoin",
      "monero",
      "litecoin",
      "dash",
      "basic-attention-token",
      "ripple",
      "stellar"
    );
    // eslint-disable-next-line
  }, [loading, searchAsset]);

  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="columns">
          <div className="column col-9 col-sm-auto col-mx-auto">
            <CryptoHeader
              priceUsd={asset.priceUsd}
              price={topPrices[searchAsset.name] && topPrices[searchAsset.name]}
              name={asset.name}
              symbol={asset.symbol}
              changePercent={asset.changePercent24Hr}
            />
            <div className="columns">
              <CryptoData />
            </div>
          </div>
          <Metrics
            high24={stats.HIGHDAY}
            open24={stats.OPENDAY}
            change24={stats.CHANGE24HOUR}
            changePercent={stats.CHANGEPCT24HOUR}
            volume={stats.VOLUME24HOURTO}
          />
        </div>
      </div>
    </div>
  );
}
