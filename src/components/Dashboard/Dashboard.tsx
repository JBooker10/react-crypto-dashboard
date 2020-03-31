import React, { useEffect, useState } from "react";
import Navbar from "./../Navbar/Navbar";
import Metrics from "./../Metrics/Metrics";
import CryptoHeader from "./../CryptoHeader/CryptoHeader";
import CryptoData from "./../CryptoData/CryptoData";
import axios from "axios";
import "./Dashboard.scss";

export default function Dashboard() {
  const [cryptoData, setCryptoData] = useState({} as any);
  const [price, setPrice] = useState();

  const getCrypto = (symbol: string) => {
    axios(`https://api.coincap.io/v2/assets/${symbol}`)
      .then(res => setCryptoData(res.data.data))
      .catch(err => console.log(err));
  };

  const getPrice = (symbol: string): void => {
    const pricesWs = new WebSocket(
      `wss://ws.coincap.io/prices?assets=${symbol}`
    );
    pricesWs.onmessage = (msg: any) => {
      const data = JSON.parse(msg.data);
      setPrice(data[symbol]);
    };
  };

  useEffect(() => getPrice("ethereum"), price);
  useEffect(() => getCrypto("ethereum"), cryptoData);

  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="columns">
          <div className="column col-9 col-sm-auto col-mx-auto">
            <CryptoHeader
              price={parseFloat(price).toFixed(3)}
              name={cryptoData.name}
              symbol={cryptoData.symbol}
              changePercent={cryptoData.changePercent24Hr}
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
