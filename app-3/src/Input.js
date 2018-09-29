import React, {Component} from 'react'
import Filter from './Filter'

class Input extends Component{

    constructor(){
        super();
        this.state={
            array: ['fish', 'ham', 'bologna', 'cheese', 'pickle'],
            input: ''
        }
    }

    handleInput(val){
        this.setState({input: val})
      }

    render(){
        return(
            <div>
            <input type="text" placeholder="search" value={this.state.input} onChange={(event)=>this.handleInput(event.target.value)} />
            <Filter displayArray={this.state.array} input={this.state.input} />
            </div>
        )
    }
}

export default Input