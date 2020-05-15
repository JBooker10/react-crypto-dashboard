import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Primary, Light } from "./../../styles/colors";

export default function CryptoRadarChart({ tradingSignals, primary }: any) {
  const {
    largetxsVar,
    addressesNetGrowth,
    concentrationVar,
    inOutVar,
  } = tradingSignals;

  largetxsVar.name = "Largest Transaction Var";
  addressesNetGrowth.name = "Addresses Net Growth";
  concentrationVar.name = "Concentration Var";
  inOutVar.name = "In/Out Var";

  const [chartData] = useState([
    largetxsVar,
    addressesNetGrowth,
    concentrationVar,
    inOutVar,
  ]);

  const size = 1.3;
  return (
    <div className="crypto-radar-chart">
      <RadarChart
        cx={300 * size}
        cy={225 * size}
        outerRadius={150 * size}
        width={575 * size}
        height={400 * size}
        data={chartData}
      >
        <PolarGrid stroke={Light} />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis domain={[0, 1]} />
        <Radar
          dataKey="score"
          stroke={Primary}
          fill={Primary}
          fillOpacity={0.6}
        />
      </RadarChart>
    </div>
  );
}
