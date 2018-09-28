import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      array: ['hey', 'this', 'is', 'searching'],
      input: "",
      finalArray: []
    }
  }

  inputHandler(input, val){
    this.setState({[input]:val})
    console.log(this.state.input)
  }

  render() {

    let displayArray = this.state.array.filter((c) =>
     c.includes(this.state.input))
    .map((element, index)=>{
      return(<div key={index}>
        <h2>{element}</h2>
        </div>)
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Search App 3</h2>
        </div>
        <input type="text" placeholder="search" value={this.state.input} onChange={(event)=>this.inputHandler("input",event.target.value)} /> 
        {displayArray}

      </div>
    );
  }
}

export default App;
