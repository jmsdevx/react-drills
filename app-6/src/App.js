import React, {Component} from 'react'
import ToDo from './ToDo'

class App extends Component {

  constructor(){
    super();
    this.state = {
      input: '',
      list: []
    }
  }

  inputHandler(value){
    this.setState({input: value})
  }

  addToList(){
    this.state.list.push(this.state.input)
    this.setState({input: ''})
  }

  render(){
    return(
      <div>

      <input type="text" placeholder="What to do?" value={this.state.input} onChange={(event)=>this.inputHandler(event.target.value)} />

      <button onClick={()=>this.addToList()}>Add To List</button>

      <ToDo list={this.state.list} />
      </div>
    )
  }
}

export default App