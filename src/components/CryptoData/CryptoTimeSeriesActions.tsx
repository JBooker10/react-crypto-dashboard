import React from "react";

interface CryptoTimeSeriesActionProps {
  getDailyOHLCV: Function;
  symbol: string;
}

export default function CryptoTimeSeriesActions({
  getDailyOHLCV,
  symbol
}: CryptoTimeSeriesActionProps) {
  return (
    <div className="crypto-actions">
      <div>
        <button onClick={() => getDailyOHLCV("60", symbol, "histominute")}>
          1H
        </button>
        <button onClick={() => getDailyOHLCV("24", symbol, "histohour")}>
          24H
        </button>
        <button onClick={() => getDailyOHLCV("168", symbol, "histohour")}>
          1W
        </button>
        <button onClick={() => getDailyOHLCV("30", symbol)}>1M</button>
        <button className="active" onClick={() => getDailyOHLCV("180", symbol)}>
          6M
        </button>
        <button onClick={() => getDailyOHLCV("365", symbol)}>1Y</button>
      </div>

      <div>
        <button>Original</button>
        <button>Trading View</button>
        <button>Depth</button>
      </div>
    </div>
  );
}
