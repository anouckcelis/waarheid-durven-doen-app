import React from 'react';  // Importeer de React module vanuit 'react'
import { Link } from 'react-router-dom';  // Importeer de Link component vanuit 'react-router-dom'
import './Algemeen.css';  // Importeer een CSS-bestand genaamd 'Algemeen.css'
import logo from './images/logospotgroup.png';  // Importeer een afbeelding genaamd 'logospotgroup.png' uit de 'images' map

// Definieer een functionele component genaamd Start
const Start = () => {
    return (  // Retourneer een JSX-element
        <div className="container">  {/* Een div met de class naam 'container' */}
          <div className="start-screen">  {/* Een div met de class naam 'start-screen' */}
            <div className="intro">  {/* Een div met de class naam 'intro' */}
              <h1>Waarheid<br/>Durven<br/>Doen</h1>  {/* Een kop (h1) met de tekst 'Waarheid Durven Doen' */}
              <div className="container-start-button">  {/* Een div met de class naam 'container-start-button' */}
                  {/* Een Link component die linkt naar '/WaarheidDurvenDoen' */}
                  <Link to="/WaarheidDurvenDoen">
                      <button className="start-button">Start Spel</button>  {/* Een knop met de class naam 'start-button' en de tekst 'Start Spel' */}
                  </Link>
              </div>
              <div className="logo">  {/* Een div met de class naam 'logo' */}
                      {/* Een link naar 'https://spotgroup.be/' met daarin een afbeelding 'logo' */}
                      <a href="https://spotgroup.be/"><img src={logo} alt="logo SpotGroup"/></a>  
              </div> 
            </div>
          </div>
        </div>
    );
}

export default Start;  // Exporteer de Start component als de standaard export