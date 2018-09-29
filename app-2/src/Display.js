import React, {Component} from 'react'

class Display extends Component {

    constructor(){
        super();
        this.state = {
            array: ['fish', 'fingers', 'bologna', 'ice cream', 'potato']
        }
    }

    render(){

        let displayArray = this.state.array.map((e,i)=>{
            return <div key={i}>{e}</div>
        })
        
        return(
            <h2>{displayArray}</h2>

        )
    }

}

export default Display