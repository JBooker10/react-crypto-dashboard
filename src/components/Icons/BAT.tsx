import React from "react";
import { SVGIconProps } from "../type";

export default function BasicAttentionToken({
  className,
  style
}: SVGIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      viewBox="0 0 2000 1719"
    >
      <path
        fill="#fff"
        d="M2000 1716.64l-995.21-569.86L0 1719l2000-2.36z"
      ></path>
      <path
        fill="#fff"
        d="M1005.11 0l-.32 1146.78L2000 1716.64 1005.11 0z"
      ></path>
      <path fill="#fff" d="M0 1719l1004.79-572.22L1005.11 0 0 1719z"></path>
      <path
        fill="#1c2128"
        d="M1002.75 695.67L591.9 1381.92h823.54l-412.69-686.25z"
      ></path>
    </svg>
  );
}
