import React from 'react';
import { Link } from 'react-router-dom';
import './Algemeen.css';
import logo from './images/logospotgroup.png';

const Start = () => {
    return (
        <div className="container">
          <div className="start-screen">
            <div className="intro">
              <h1>Waarheid<br/>Durven<br/>Doen</h1>
              <h3>Klik op de knop om te beginnen!</h3>
              <div className="container-start-button">
                  {/* Link naar de vragen */}
                  <Link to="/WaarheidDurvenDoen">
                      <button className="start-button">Start Spel</button>
                  </Link>
              </div>
              <div className="logo">
                      <a href="https://spotgroup.be/"><img src={logo} alt="logo SpotGroup"/></a>  
              </div> 
            </div>
          </div>
        </div>
    );
}

export default Start;
