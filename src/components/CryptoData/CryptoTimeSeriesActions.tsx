import React from "react";

export default function CryptoTimeSeriesActions({ getDailyOHLCV }: any) {
  return (
    <div className="crypto-actions">
      <div>
        <button onClick={() => getDailyOHLCV("60", "BTC", "histominute")}>
          Hour
        </button>
        <button onClick={() => getDailyOHLCV("24", "BTC", "histohour")}>
          Day
        </button>
        <button onClick={() => getDailyOHLCV("168", "BTC", "histohour")}>
          Week
        </button>
        <button className="active" onClick={() => getDailyOHLCV("30", "BTC")}>
          Month
        </button>
        <button onClick={() => getDailyOHLCV("180", "BTC")}>6 Month</button>
        <button onClick={() => getDailyOHLCV("365", "BTC")}>Year</button>
      </div>

      <div>
        <button>Original</button>
        <button>Trading View</button>
        <button>Depth</button>
      </div>
    </div>
  );
}
