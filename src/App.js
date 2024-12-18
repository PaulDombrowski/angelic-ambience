import './App.css';
import Content from './components/content';
import Snowfall from 'react-snowfall';

function App() {
  const marqueeText = "Angelic Ambience ".repeat(40); // Wiederholt den Text, um genügend Länge zu erreichen
  return (
    <div>
      {/* Fixierter, glitzernder Schneeeffekt */}
      <div className="snowfall">
        <Snowfall />
      </div>

      {/* Hintergrund mit schwebenden Balenciaga-Engeln */}
      <div className="angel-background"></div>

      {/* Marquee-Effekte */}
      <div className="marquee-container">
        <div className="marquee horizontal top"><span>{marqueeText}</span></div>
        <div className="marquee horizontal bottom"><span>{marqueeText}</span></div>
        <div className="marquee vertical left"><span>{marqueeText}</span></div>
        <div className="marquee vertical right"><span>{marqueeText}</span></div>
      </div>

      {/* Hauptinhalt */}
      <div className="flex-container">
        <Content />
      </div>
    </div>
  );
}

export default App;
