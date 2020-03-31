import React, { useEffect, useContext } from "react";

import Navbar from "./../Navbar/Navbar";
import Metrics from "./../Metrics/Metrics";
import CryptoHeader from "./../CryptoHeader/CryptoHeader";
import CryptoData from "./../CryptoData/CryptoData";

import cryptoCurrencyCTX from "./../../context/cryptocurrency/cryptoCurrencyContext";
import "./Dashboard.scss";

export default function Dashboard() {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const { getAsset, asset, getRealTimePrice, price, loading } = cryptoCTX;

  useEffect(() => {
    getRealTimePrice("ethereum");
    getAsset("ethereum");
  }, [loading]);

  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="columns">
          <div className="column col-9 col-sm-auto col-mx-auto">
            <CryptoHeader
              price={parseFloat(price).toFixed(3)}
              name={asset.name}
              symbol={asset.symbol}
              changePercent={asset.changePercent24Hr}
            />
            <div className="columns">
              <CryptoData />
            </div>
          </div>
          <Metrics />
        </div>
      </div>
    </div>
  );
}
