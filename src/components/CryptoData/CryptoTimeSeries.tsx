import React, { useState, useEffect } from "react";
import CryptoTimeSeriesActions from "./CryptoTimeSeriesActions";
import { Primary, Lighter, Light, White, Navy } from "./../../styles/colors";
import axios from "axios";
import moment from "moment";
import numeral from "numeral";

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

export default function CryptoTimeSeries() {
  const [historicalPrices, setHistoricalPrices] = useState([] as any);
  const width =
    window.innerWidth >= 900
      ? window.innerWidth / 1.68
      : window.innerWidth - 20;
  const contentStyle = {
    background: "rgba(24, 27, 33, .95)",
    border: `1px solid ${Light}`,
    borderRadius: "3px"
  };

  useEffect(() => getHistoricalPrice("60"), historicalPrices);

  const getHistoricalPrice = (period: string) => {
    axios
      .get(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=ETH&tsym=USD&limit=${period}`
      )
      .then(res => {
        setHistoricalPrices(res.data.Data.Data);
      })
      .then(err => console.log(err));
  };

  console.log(moment(1585627113).format("MMMM DD YYYY"));

  return (
    <>
      <CryptoTimeSeriesActions />
      <div className="line-chart">
        <h5>
          CryptoCompare Index: ETH <span className="chart-price">$270.10</span>
        </h5>
        <AreaChart width={width} height={330} data={historicalPrices}>
          <XAxis dataKey="time" hide={true} />
          <YAxis
            domain={["dataMin", "dataMax"]}
            tick={true}
            tickLine={false}
            allowDecimals={false}
            orientation="right"
            dataKey="open"
            axisLine={false}
            tickCount={5}
            stroke={White}
          />
          <CartesianGrid vertical={false} stroke={Light} strokeDasharray="8" />
          <Area
            type="linear"
            dataKey="open"
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
            labelFormatter={label =>
              moment.unix(label as any).format("MM/DD/YYYY")
            }
            contentStyle={contentStyle}
          />
        </AreaChart>
      </div>
      <div>
        <h5>
          Volume: ETH <span className="chart-price">$1270.11</span>
        </h5>
        <BarChart width={width} height={100} data={historicalPrices}>
          <YAxis
            tick={true}
            tickFormatter={tick => numeral(tick).format("0.0a")}
            tickLine={false}
            orientation="right"
            axisLine={false}
            tickCount={1}
            stroke={White}
          />
          <XAxis dataKey="time" hide={true} />
          <Tooltip
            cursor={{
              fill: Navy
            }}
            contentStyle={contentStyle}
            labelFormatter={label =>
              moment.unix(label as any).format("MM/DD/YYYY")
            }
          />
          <Bar dataKey="volumeto" fill={Primary} />
        </BarChart>
      </div>
    </>
  );
}
