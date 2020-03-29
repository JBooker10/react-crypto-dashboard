import React from "react";
import Metric from "./Metric";

export default function Metrics() {
  return (
    <div className="metrics">
      <div className="metric-actions">
        <button className="btn-primary">open orders</button>
        {/* <button className="btn-secondary">add to favorite</button> */}
      </div>
      <Metric name="Change 24h" value="15.11" percentage="+6.16%" />
      <Metric name="Volume 24" value="20,340,521,251" />
      <Metric name="High 24" value="271.63" />
      <Metric name="Close 24" value="249.22" />
    </div>
  );
}
