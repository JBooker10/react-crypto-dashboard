import React from "react";

export default function CryptoTimeSeriesActions({
  getDailyOHLCV,
  symbol
}: any) {
  return (
    <div className="crypto-actions">
      <div>
        <button onClick={() => getDailyOHLCV("60", symbol, "histominute")}>
          Hour
        </button>
        <button onClick={() => getDailyOHLCV("24", symbol, "histohour")}>
          Day
        </button>
        <button onClick={() => getDailyOHLCV("168", symbol, "histohour")}>
          Week
        </button>
        <button onClick={() => getDailyOHLCV("30", symbol)}>Month</button>
        <button className="active" onClick={() => getDailyOHLCV("180", symbol)}>
          6 Month
        </button>
        <button onClick={() => getDailyOHLCV("365", symbol)}>Year</button>
      </div>

      <div>
        <button>Original</button>
        <button>Trading View</button>
        <button>Depth</button>
      </div>
    </div>
  );
}
