import React from "react";

export default function Loader({ width, height }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        margin: "auto",
      }}
      width={width}
      height={height}
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
    >
      <g transform="translate(50 42) scale(.8) translate(-50 -50)">
        <path fill="#fff" d="M72.5 50L50 11 27.5 50 50 50z">
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 38.5;360 50 38.5"
          ></animateTransform>
        </path>
        <path fill="#fff" d="M5 89L50 89 27.5 50z">
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 27.5 77.5;360 27.5 77.5"
          ></animateTransform>
        </path>
        <path fill="#fff" d="M72.5 50L50 89 95 89z">
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 72.5 77.5;360 72 77.5"
          ></animateTransform>
        </path>
      </g>
    </svg>
  );
}
