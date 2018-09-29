import React, { Component } from 'react';
import './App.css';
import ToDo from './Display'
import AddTask from './AddTask'

class App extends Component {
  constructor(){
    super();

    this.state = {
    list: []
    }

    this.addToList = this.addToList.bind(this) 

   
  }

  addToList(task) {
    this.setState({ list: [ ...this.state.list, task ]})
  }

  render() {

   
      return (
        <div>
          {/*Original JSX Functionality*/}
          {/* <input type="text" placeholder="What to do?" value={this.state.input} onChange={(e)=>this.handleInput(e.target.value)} /> */}
          {/*Adds new input to parent component's state (list), clears input field, activated on click*, class component*/}
          <AddTask add={this.addToList}/>

          {/*Original JSX functionality*/}
          {/* <button onClick={()=>this.addToList()}>Add To List</button> */}
          {/*maps current parent state's (list) object and displays it to the screen, functional component*/}
          <ToDo list={this.state.list}/>




        </div>
      )
    }
}

export default App