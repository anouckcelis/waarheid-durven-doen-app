import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Start from './Start.js';
import WaarheidDurvenDoen from './WaarheidDurvenDoen.js';
import firebase from './firebase.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/WaarheidDurvenDoen" element={<WaarheidDurvenDoen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

