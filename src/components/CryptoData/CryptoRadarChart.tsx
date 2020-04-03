import React, { useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from "recharts";
import { Primary, Lighter, Light } from "./../../styles/colors";

export default function CryptoRadarChart({ tradingSignals }: any) {
  const {
    largetxsVar,
    addressesNetGrowth,
    concentrationVar,
    inOutVar
  } = tradingSignals;

  largetxsVar.name = "Largest Transaction Var";
  addressesNetGrowth.name = "Addresses Net Growth";
  concentrationVar.name = "Concentration Var";
  inOutVar.name = "In/Out Var";

  const [chartData] = useState([
    largetxsVar,
    addressesNetGrowth,
    concentrationVar,
    inOutVar
  ]);

  const size = 1.4;
  return (
    <div className="crypto-radar-chart">
      <RadarChart
        cx={300 * size}
        cy={225 * size}
        outerRadius={150 * size}
        width={500 * size}
        height={400 * size}
        data={chartData}
      >
        <PolarGrid stroke={Light} />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis />
        <Radar
          name="Mike"
          dataKey="score"
          stroke={Primary}
          fill={Primary}
          fillOpacity={0.6}
          color={Lighter}
        />
      </RadarChart>
    </div>
  );
}
