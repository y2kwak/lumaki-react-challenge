import React from 'react';
import Card from './Card.js';
import './App.css';
import jobs from './jobs.json';
import logo from './lumaki-logo.png'

function App() {
  let content = null

  // if the jobs.json file is successfully imported, map information to job object by the id
  // this is to potentially use axios.get or to acess data from an API where job details might be outlined
  if(jobs) {
    content = jobs.map((job) =>
      <div key={job.id}>
        <Card 
          job={job}
          logo={logo} // this acts as a place holder
        />
      </div>
    )
  }

  // else statement could be added to catch failures

  return (
    <div className="App">
      <h2>React Challenge</h2>
      {content}
    </div>
  );
}

export default App;
