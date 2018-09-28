import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      text: ""
    }
  }

  inputHandler(text, val) {
    this.setState({[text]: val})
  }


  render() {

    let display = <div>{this.state.text}</div>
    


    return (
      <div >
        <h2>App 1</h2>
        <input type="text" value={this.state.text} placeholder="Enter Text Here" onChange={(event)=>this.inputHandler("text",event.target.value)} />
        {display}
      </div>
    );
  }
}

export default App;
