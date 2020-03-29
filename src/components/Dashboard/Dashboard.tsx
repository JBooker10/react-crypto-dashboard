import React from "react";
import Navbar from "./../Navbar/Navbar";
import Metrics from "./../Metrics/Metrics";
import CryptoHeader from "./../CryptoHeader/CryptoHeader";
import CryptoData from "./../CryptoData/CryptoData";
import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="columns">
          <div className="column col-9 col-mx-auto">
            <CryptoHeader />
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
