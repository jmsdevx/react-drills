import React, {Component} from 'react'

class Alert extends Component{

    constructor(){
        super();
    }

    alerter(){
        alert(`Username: ${this.props.username} Password: ${this.props.password}`)
    }

    render(){

        return(
            <button onClick={()=>this.alerter()}>Login</button>
        )
    }
}







export default Alert