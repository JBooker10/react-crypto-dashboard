import React from "react";
import { Signal } from "./../type";

interface Props {
  name: string;
  analysis: Signal;
}

export default function AnalysisCard({ name, analysis }: Props) {
  return (
    <div className="column">
      <div className="analysis-card">
        <p>{name}</p>
        <h2>{analysis && analysis.score.toFixed(4)}</h2>
        <p className="sentiment">
          sentiment:{" "}
          <span
            style={
              analysis.sentiment !== "bearish"
                ? { color: "#72e8a1" }
                : { color: "#e97373" }
            }
          >
            {analysis && analysis.sentiment}
          </span>
        </p>
        {analysis.sentiment !== "bearish" ? (
          <i className="icon icon-upward"></i>
        ) : (
          <i className="icon icon-downward"></i>
        )}
      </div>
    </div>
  );
}
