import React, {Component} from 'react'
import Alert from './Alert'

class Login extends Component {

    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    inputHandler(key, value){
        this.setState({[key]:value})
    }

    render(){
        return(
            <div>

            <input type="text" placeholder="Username" value={this.state.username} 
            onChange={(event)=>this.inputHandler("username", event.target.value)} />

            <input type="text" placeholder="Password" value={this.state.password}
            onChange={(event)=>this.inputHandler("password", event.target.value)} />

            <Alert username={this.state.username} password={this.state.password} />

            </div>

        )
    
    }
}

export default Login