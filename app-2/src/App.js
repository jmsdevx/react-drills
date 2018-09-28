import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      array: ['hey','this','is', 'searching']
    }
  }
  render() {

    let displayArray = this.state.array.map((element,index)=>{
      return (<div className="map" key={index}>

        <h2 >{element}</h2>

      </div>
        )
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>App 2</h2>
        </div>
          <div>{displayArray}</div>
        
      </div>
    );
  }
}

export default App;
