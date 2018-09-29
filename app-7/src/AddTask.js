import React, {Component} from 'react'

class AddTask extends Component {

    constructor(){
        super();
        this.state = {
            input: '',
        }

        // this.addToList = this.addToList.bind(this)
    }

    handleChange(value) {
        this.setState({input: value})
    }


    addToList(){
        this.props.add(this.state.input)
        this.setState({input: ''})
    }



    render(){

        return(
            <div>

                <input type="text" placeholder="What to do?" value={this.state.input} onChange={(e)=>this.handleChange(e.target.value)}/>

                <button onClick={()=>this.addToList()}>Add Item</button>

            </div>
            )
    }
}

export default AddTask