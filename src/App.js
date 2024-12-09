
import './App.css';
import MyBackgroundComponent from './components/background';
import Content from './components/content';
import SnowEffect from './components/background';

import Snowfall from 'react-snowfall';

function App() {

  const marqueeText = "Angelic Ambience ".repeat(40); // Wiederholt den Text, um genügend Länge zu erreichen
  return (
    
    
     <div>
      {/* Snowfall-Effekt bleibt fixiert */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Snowfall />
      </div>
   <div className="snow-container">
   <SnowEffect/>
   
      </div>
      
      
      <div className="flex-container">
     
      <div>
      <div className="marquee horizontal top"><span>{marqueeText}</span></div>
      <div className="marquee horizontal bottom"><span>{marqueeText}</span></div>
      <div className="marquee vertical left"><span>{marqueeText}</span></div>
      <div className="marquee vertical right"><span>{marqueeText}</span></div>
      {/* Dein übriger Inhalt */}
    </div>
        {/* Scrollbare Inhalte */}
        <Content />
      </div>
    </div>
  );
}




export default App;
