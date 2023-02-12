import React from "react";
import "./cloudFindYourRain.css";
import { Link } from "react-router-dom";
export default function CloudFindYourRain() {
  return (
    <div>
      <div className="find">
        <Link to="/Find_your_Rain">Find Your Rain</Link>
      </div>
      <div className="cloudF" id="cloud-baseF"></div>
      <div className="cloudF" id="cloud-backF"></div>
      <div className="cloudF" id="cloud-midF"></div>
      <div className="cloudF" id="cloud-frontF"></div>
      <svg width="0" height="0">
        <filter id="filter-baseF">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="5"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-backF">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-midF">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-frontF">
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
