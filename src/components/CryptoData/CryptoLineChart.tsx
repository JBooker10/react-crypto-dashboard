import React from "react";
import {
  Line,
  LineChart,
  Area,
  AreaChart,
  YAxis,
  XAxis,
  CartesianGrid
} from "recharts";

const data = [
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 4600,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 4600,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function CryptoLineChart() {
  const navy = "rgba(56, 62, 70, 0.4)";
  const primary = "#1f90ff";
  return (
    <div className="line-chart">
      <h5>
        CryptoCompare Index: <span> $270.10</span>
      </h5>
      <AreaChart width={window.innerWidth / 1.7} height={460} data={data}>
        <XAxis dataKey="name" hide={true} />
        <YAxis
          tick={true}
          tickLine={false}
          orientation="right"
          axisLine={false}
          tickCount={10}
          stroke="#fff"
        />
        <CartesianGrid vertical={false} stroke={navy} strokeDasharray="5" />
        {/* <Line
        dot={false}
        type="linear"
        dataKey="pv"
        stroke={primary}
      
      /> */}
        <Area
          type="linear"
          dataKey="uv"
          stroke={primary}
          fillOpacity={0}
          fill={primary}
          strokeWidth="2"
        />
      </AreaChart>
    </div>
  );
}
