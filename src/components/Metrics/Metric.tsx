import React from "react";

export default function Metric({ name, value, percentage }: any) {
  return (
    <div className="metrics-card">
      <p>{name}</p>
      <div className="card">
        <h6>
          $ {value} <span className="percentage">{percentage}</span>
        </h6>
      </div>
    </div>
  );
}
