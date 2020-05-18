import React from "react";
import AnalysisCard from "./AnalysisCard";
import CryptoRadarChart from "./CryptoRadarChart";
import { TradingSignals } from "../type";

export default function Analysis({ tradingSignals }: any) {
  const {
    largetxsVar,
    addressesNetGrowth,
    concentrationVar,
    inOutVar,
  }: TradingSignals = tradingSignals;
  return (
    <div className="analysis">
      <div className="columns">
        <div className="column col-3">
          <AnalysisCard
            name="Largest Transaction Vars"
            analysis={largetxsVar && largetxsVar}
          />
          <AnalysisCard
            name="Addresses Net Growth"
            analysis={addressesNetGrowth && addressesNetGrowth}
          />
          <AnalysisCard
            name="Concentration Var"
            analysis={concentrationVar && concentrationVar}
          />
          <AnalysisCard name="In/Out Var" analysis={inOutVar && inOutVar} />
        </div>
        <div className="column col-9">
          <CryptoRadarChart tradingSignals={tradingSignals} />
        </div>
      </div>
    </div>
  );
}
