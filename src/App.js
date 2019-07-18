import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleMap from './Components/SimpleMap'
import LatandLong from './Components/LatandLong';

function App() {
  return (
    <div className="App">
      <SimpleMap />
      <LatandLong />
    </div>
  );
}

export default App;
