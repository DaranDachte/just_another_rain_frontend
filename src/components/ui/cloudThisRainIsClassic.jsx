import React from "react";
import "./cloudThisRainIsClassic.css";
import { Link } from "react-router-dom";
export default function CloudThisRainisClassic() {
  return (
    <div>
      <div className="this">
        <Link to="/Gallery">Gallery</Link>
      </div>
      <div className="cloudT" id="cloud-baseT"></div>
      <div className="cloudT" id="cloud-backT"></div>
      <div className="cloudT" id="cloud-midT"></div>
      <div className="cloudT" id="cloud-frontT"></div>
      <svg width="0" height="0">
        <filter id="filter-baseT">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="5"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-backT">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-midT">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-frontT">
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
