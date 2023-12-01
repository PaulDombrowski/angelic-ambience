// SnowEffect.js
import React from 'react';
import Snowfall from 'react-snowfall';

import '../App.css'; // Stelle sicher, dass du deine CSS-Datei importierst

const SnowEffect = () => {
  return (
    <div className="snow-container">
    <Snowfall/>
      {/* Weitere Inhalte */}
    </div>
  );
};

export default SnowEffect;
