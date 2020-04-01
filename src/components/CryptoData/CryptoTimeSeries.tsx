import React, { useEffect, useContext } from "react";

import { Primary, Lighter, Light, White, Navy } from "./../../styles/colors";
import { chartWidth, chartToolTipStyle } from "./../../styles";
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

import CryptoTimeSeriesActions from "./CryptoTimeSeriesActions";
import cryptoCurrencyCTX from "./../../context/cryptocurrency/cryptoCurrencyContext";

export default function CryptoTimeSeries({ symbol }: any) {
  const cryptoCTX = useContext(cryptoCurrencyCTX);
  const { getDailyOHLCV, dailyOHLCV, loading } = cryptoCTX;

  // eslint-disable-next-line
  useEffect(() => getDailyOHLCV("60", "BTC"), [loading]);

  return (
    <>
      <CryptoTimeSeriesActions getDailyOHLCV={getDailyOHLCV} />
      <div className="line-chart">
        <h5>
          CryptoCompare Index:{symbol}{" "}
          <span className="chart-price">$270.10</span>
        </h5>
        <AreaChart width={chartWidth} height={330} data={dailyOHLCV}>
          <XAxis dataKey="time" hide={true} />
          <YAxis
            domain={["auto", "auto"]}
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
              stroke: White,
              strokeDasharray: 8
            }}
            labelFormatter={label =>
              moment.unix(label as any).format("MM/DD/YYYY hh:mm a")
            }
            contentStyle={chartToolTipStyle}
          />
        </AreaChart>
      </div>
      <div>
        <h5>
          Volume: {symbol} <span className="chart-price">$1270.11</span>
        </h5>
        <BarChart width={chartWidth} height={100} data={dailyOHLCV}>
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
            contentStyle={chartToolTipStyle}
            labelFormatter={label =>
              moment.unix(label as any).format("MM/DD/YYYY hh:mm a")
            }
          />
          <Bar dataKey="volumeto" fill={Primary} />
        </BarChart>
      </div>
    </>
  );
}
