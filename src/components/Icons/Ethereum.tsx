import React from "react";
import { SVGIconProps } from "./../type";

function Ethereum({ style, className }: SVGIconProps) {
  return (
    <svg
      x="0"
      y="0"
      className={className}
      version="1.1"
      viewBox="0 0 400 300"
      xmlSpace="preserve"
      style={style}
    >
      <path
        d="M200 8.3L198.1 14.7 198.1 202.1 200 204 286.9 152.6z"
        className="st0"
      ></path>
      <path d="M200 8.3L113 152.6 200 204 200 113z" className="st1"></path>
      <path
        d="M200 220.5L198.9 221.8 198.9 288.5 200 291.6 287 169.1z"
        className="st2"
      ></path>
      <path d="M200 291.6L200 220.5 113 169.1z" className="st1"></path>
      <path d="M200 204L286.9 152.6 200 113z" className="st3"></path>
      <path d="M113 152.6L200 204 200 113z" className="st4"></path>
    </svg>
  );
}

export default Ethereum;
