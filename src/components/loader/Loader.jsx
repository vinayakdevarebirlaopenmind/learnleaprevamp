import React from "react";
import "./Loader.css";

export default function Loader() {
  return (
    <div className="loader">
      <svg height="0" width="0" viewBox="0 0 100 100" className="absolute">
        <defs>
          <linearGradient id="textGradient" x1="0" y1="0" x2="100" y2="100">
            <stop stopColor="#0369a1" offset="0%"></stop>
            <stop stopColor="#67e8f9" offset="100%"></stop>
          </linearGradient>
        </defs>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 100"
        width="200"
        height="400"
        className="inline-block"
      >
        <text
          x="50%"
          y="50%"
          fontSize="100"
          fontWeight="bold"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill="none"
          stroke="url(#textGradient)"
          strokeWidth="4"
          className="dash"
          pathLength="360"
        >
          LearnLeap
        </text>
      </svg>
    </div>
  );
}
