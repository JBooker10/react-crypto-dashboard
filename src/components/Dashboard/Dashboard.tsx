import React, { useEffect, useContext } from "react";

import Navbar from "./../Navbar/Navbar";
import Metrics from "./../Metrics/Metrics";
import CryptoHeader from "./../CryptoHeader/CryptoHeader";
import CryptoData from "./../CryptoData/CryptoData";

import cryptoCurrencyCTX from "./../../context/cryptocurrency/cryptoCurrencyContext";
import "./Dashboard.scss";

export default function Dashboard() {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const {
    getAsset,
    getStats,
    searchAsset,
    asset,
    getRealTimePrice,
    price,
    loading,
    stats
  } = cryptoCTX;

  useEffect(() => {
    getRealTimePrice(searchAsset.name);
    getAsset(searchAsset.name);
    getStats(searchAsset.symbol);
    // eslint-disable-next-line
  }, [loading, searchAsset]);

  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="columns">
          <div className="column col-9 col-sm-auto col-mx-auto">
            <CryptoHeader
              price={parseFloat(price).toFixed(2)}
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
