import React, {Component} from 'react'

class Input extends Component {


    constructor(){
        super();
        this.state = {
            input: ''
        }

    }

    handleInput(val){
        this.setState({input: val})
      }


    render(){


        return(
            <div>
            <input key="text" placeholder="Enter Text" value={this.state.input} onChange={(event)=>this.handleInput(event.target.value)} />
            <h2>{this.state.input}</h2>
            </div>

        )
    }
}

export default Input