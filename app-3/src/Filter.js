import React, {Component} from 'react'

class Filter extends Component {

    render(){
        let display = this.props.displayArray
        .filter((e)=>e.includes(this.props.input))
        .map((e,i)=><div key={i}>{e}</div>)
    return(
        <h2>{display}</h2>
        )
    }
}






export default Filter