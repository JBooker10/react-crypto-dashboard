import React from "react";
import { BarChart } from "./../Icons";

export default function ErrorNoData() {
  return (
    <div
      className="error-no-data"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "55vh"
      }}
    >
      <BarChart className="bar-chart" />
      <h2>Analysis Unavaliable</h2>
    </div>
  );
}
