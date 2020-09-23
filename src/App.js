import React from 'react';
import Card from './Card.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

        <Card
          name="Lumaki Labs Inc."
          position="Software Engineer Intern"
          description="As a software engineer at Lumaki Labs Inc, you will work with a creative team and a senior engineer to build out the front end…"
          duration="2-months"
          level="Intermediate"
          date="Oct 1, 2020 EDT"
          logo=""

        />

        <Card
        name="University of Toronto"
        position="UX/UI Design Intern"
        description="As a software engineer at Lumaki Labs Inc, you will work with a creative team and a senior engineer to build out the front end…"
        duration="2-months"
        level="Intermediate"
        date="Oct 1, 2020 EDT"
        logo=""
        />

 
    </div>
  );
}

export default App;
