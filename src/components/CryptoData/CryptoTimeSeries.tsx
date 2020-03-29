import React from "react";
import CryptoTimeSeriesActions from "./CryptoTimeSeriesActions";
import { Primary, Lighter, Light, White, Navy } from "./../../styles/colors";
import {
  Area,
  AreaChart,
  YAxis,
  XAxis,
  CartesianGrid,
  BarChart,
  Tooltip,
  Bar
} from "recharts";

const data2 = [
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
    name: "Page B",
    uv: 3500,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page G",
    uv: 4900,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Page E",
    uv: 1390,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page A",
    uv: 3500,
    pv: 6700,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 7100,
    pv: 5698,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2701,
    pv: 9800,
    amt: 2290
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
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
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
    name: "Page B",
    uv: 3500,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page G",
    uv: 4900,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Page E",
    uv: 1390,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page A",
    uv: 3500,
    pv: 6700,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 7100,
    pv: 5698,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2701,
    pv: 9800,
    amt: 2290
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
    name: "Page B",
    uv: 3500,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page G",
    uv: 4900,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Page E",
    uv: 1390,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page A",
    uv: 3500,
    pv: 6700,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 7100,
    pv: 5698,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2701,
    pv: 9800,
    amt: 2290
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
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
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
    name: "Page B",
    uv: 3500,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page G",
    uv: 4900,
    pv: 4300,
    amt: 2100
  },
  {
    name: "Page E",
    uv: 1390,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page A",
    uv: 3500,
    pv: 6700,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 7100,
    pv: 5698,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2701,
    pv: 9800,
    amt: 2290
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

export default function CryptoTimeSeries() {
  const width =
    window.innerWidth >= 900
      ? window.innerWidth / 1.68
      : window.innerWidth - 20;
  const contentStyle = {
    background: "rgba(24, 27, 33, .95)",
    border: `1px solid ${Light}`,
    borderRadius: "3px"
  };

  return (
    <>
      <CryptoTimeSeriesActions />
      <div className="line-chart">
        <h5>
          CryptoCompare Index: ETH <span className="chart-price">$270.10</span>
        </h5>
        <AreaChart width={width} height={325} data={data}>
          <XAxis dataKey="name" hide={true} />
          <YAxis
            tick={true}
            tickLine={false}
            orientation="right"
            axisLine={false}
            tickCount={5}
            stroke={White}
          />
          <CartesianGrid vertical={false} stroke={Light} strokeDasharray="8" />
          <Area
            type="linear"
            dataKey="uv"
            stroke={Primary}
            fillOpacity={0}
            fill={Primary}
            strokeWidth="2"
          />
          <Tooltip
            cursor={{
              stroke: Lighter,
              strokeDasharray: 8
            }}
            contentStyle={contentStyle}
          />
        </AreaChart>
      </div>
      <div>
        <h5>
          Volume: ETH <span className="chart-price"> $1270.11</span>
        </h5>
        <BarChart width={width} height={100} data={data2}>
          <YAxis
            tick={true}
            tickLine={false}
            orientation="right"
            axisLine={false}
            tickCount={1}
            stroke={White}
          />
          <Tooltip
            cursor={{
              fill: Navy
            }}
            contentStyle={contentStyle}
          />
          <Bar dataKey="uv" fill={Primary} />
        </BarChart>
      </div>
    </>
  );
}
