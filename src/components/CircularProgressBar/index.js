import React, { useEffect } from "react";
import "./style.css";
export default function CircularProgressBar({
  percentage,
  circleWidth,
  color,
}) {
  const options = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px",
  };
  useEffect(() => {
    const loaders = document.querySelectorAll(".circle-progress");
    const loaderObservers = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-animation");
        }
      });
    }, options);
    loaders.forEach((loader) => {
      loaderObservers.observe(loader);
    });
    return () => {
      loaders.forEach((loader) => {
        loaderObservers.unobserve(loader);
      });
    };
  });
  const radius = 65;
  const dashArray = Math.PI * 2 * radius;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <svg
      width={circleWidth}
      height={circleWidth}
      viewBox={`0 0 ${circleWidth} ${circleWidth}`}
    >
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        className="circle-background"
      />
      <circle
        cx={circleWidth / 2}
        cy={circleWidth / 2}
        r={radius}
        className="circle-progress"
        style={{
          strokeDasharray: dashArray,
          stroke: color,
          "--offset": dashOffset,
          "--array": dashArray,
        }}
        transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
      />
      <text
        x="50%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        className="circle-text"
        fill="#fff"
      >
        {percentage} %
      </text>
    </svg>
  );
}
