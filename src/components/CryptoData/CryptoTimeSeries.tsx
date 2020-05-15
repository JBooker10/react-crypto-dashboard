import React, { useState } from "react";

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
  Bar,
} from "recharts";

import CryptoTimeSeriesActions from "./CryptoTimeSeriesActions";

interface CryptoTimeSeries {
  getDailyOHLCV: Function;
  dailyOHLCV: [];
  symbol: string;
}

export default function CryptoTimeSeries({
  getDailyOHLCV,
  dailyOHLCV,
  symbol,
}: CryptoTimeSeries) {
  const [hoverData, setHoverData] = useState({} as any);

  const showTooltipData = (data: any) => {
    if (data.payload && data.payload[0]) {
      setHoverData(data.payload[0].payload);
    }

    return <div></div>;
  };

  return (
    <>
      <CryptoTimeSeriesActions getDailyOHLCV={getDailyOHLCV} symbol={symbol} />

      <div className="line-chart">
        <div className="header">
          <h5>
            CryptoCompare Index:{symbol}{" "}
            <span className="chart-price">${hoverData.open}</span>
          </h5>
          <h5>{moment.unix(hoverData.time).format("MM/DD/YYYY hh:mm a")}</h5>
        </div>
        <AreaChart
          width={chartWidth}
          height={330}
          data={dailyOHLCV}
          style={{ zIndex: "1 !important" }}
        >
          <defs>
            <linearGradient id="lgrad" x1="50%" y1="95%" x2="50%" y2="5%">
              <stop
                offset="0%"
                style={{ stopColor: Primary, stopOpacity: 0 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: Primary, stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" hide={true} />
          <YAxis
            domain={["auto", "auto"]}
            tick={true}
            tickLine={false}
            allowDecimals={true}
            dataKey="open"
            axisLine={false}
            tickCount={5}
            stroke={White}
          />
          <CartesianGrid vertical={false} stroke={Light} strokeDasharray="8" />
          <Area
            type="linear"
            dataKey="open"
            dot={false}
            stroke={Primary}
            fillOpacity={0.2}
            fill="url(#lgrad)"
            strokeWidth="2"
          />
          <Tooltip
            cursor={{
              stroke: Lighter,
              strokeDasharray: "8",
            }}
            content={showTooltipData}
            labelFormatter={(label) =>
              moment.unix(label as any).format("MM/DD/YYYY hh:mm a")
            }
            contentStyle={chartToolTipStyle}
          />
        </AreaChart>
      </div>
      <div>
        <h5>
          Volume: {symbol}{" "}
          <span className="chart-price">
            {numeral(hoverData.volumeto).format("0.0a")}
          </span>
        </h5>
        <BarChart width={chartWidth} height={100} data={dailyOHLCV}>
          <YAxis
            tick={true}
            tickFormatter={(tick) => numeral(tick).format("0.00a")}
            tickLine={false}
            axisLine={false}
            tickCount={1}
            stroke={White}
          />
          <XAxis dataKey="time" hide={true} />
          <Tooltip
            cursor={{
              fill: Navy,
            }}
            contentStyle={chartToolTipStyle}
            labelFormatter={(label) =>
              moment.unix(label as any).format("MM/DD/YYYY hh:mm a")
            }
          />
          <Bar dataKey="volumeto" fill={Primary} />
        </BarChart>
      </div>
    </>
  );
}
