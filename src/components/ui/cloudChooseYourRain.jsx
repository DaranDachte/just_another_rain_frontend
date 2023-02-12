import React from "react";
import "./cloudChooseYourRain.css";
import { Link } from "react-router-dom";
export default function CloudChooseYourRain() {
  return (
    <div>
      <div className="choose">
        <Link to="/Choose_Your_Rain">Choose Your Rain</Link>
      </div>
      <div className="cloudC" id="cloud-baseC"></div>
      <div className="cloudC" id="cloud-backC"></div>
      <div className="cloudC" id="cloud-midC"></div>
      <div className="cloudC" id="cloud-frontC"></div>
      <svg width="0" height="0">
        <filter id="filter-baseC">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="5"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-backC">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-midC">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-frontC">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009"
            numOctaves="4"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="50" />
        </filter>
      </svg>
    </div>
  );
}
