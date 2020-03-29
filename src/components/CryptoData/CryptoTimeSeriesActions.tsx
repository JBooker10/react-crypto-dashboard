import React from "react";

export default function CryptoTimeSeriesActions() {
  return (
    <div className="crypto-actions">
      <div>
        <button className="active">Hour</button>
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
        <button>Year</button>
      </div>

      <div>
        <button>Original</button>
        <button>Trading View</button>
        <button>Depth</button>
      </div>
    </div>
  );
}
