import React from "react";
import "./cloudDiary.css";
import { Link } from "react-router-dom";
export default function CloudDiary() {
  return (
    <div>
      <div className="diary">
        <Link to="/diary">Diary</Link>
      </div>
      <div className="cloudD" id="cloud-baseD"></div>
      <div className="cloudD" id="cloud-backD"></div>
      <div className="cloudD" id="cloud-midD"></div>
      <div className="cloudD" id="cloud-frontD"></div>
      <svg width="0" height="0">
        <filter id="filter-baseD">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="5"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-backD">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-midD">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.011"
            numOctaves="3"
            seed="8517"
          />
          <feDisplacementMap in="SourceGraphic" scale="120" />
        </filter>
        <filter id="filter-frontD">
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
