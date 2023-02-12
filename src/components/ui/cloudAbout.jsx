import React from "react";
import "./cloudAbout.css";
import { Link } from "react-router-dom";
export default function CloudAbout() {
  return (
    <div>
      <div className="about">
        <Link to="/about">About</Link>
      </div>
      <div className="cloud" id="cloud-base"></div>
      <div className="cloud" id="cloud-back"></div>
      <div className="cloud" id="cloud-mid"></div>
      <div className="cloud" id="cloud-front"></div>
      <svg width="0" height="0">
        <filter id="filter-base">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="5"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-back">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-mid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-front">
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
