import React, { Component } from 'react';
import './App.css';
import Timeline from './timeline';

import scenarioOne from './data/scenarioOne'
import scenarioTwo from './data/scenarioTwo'
import perfectData from './data/perfectData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Timeline data={scenarioOne}></Timeline>
        <Timeline data={scenarioTwo}></Timeline>
        <Timeline data={perfectData}></Timeline>
      </div>
    );
  }
}

export default App;
