import React, { Component } from 'react';
import api                  from '../utils/api';
import handleErrors         from '../utils/helpers';

class Login extends Component {
    constructor(props){
      super(props)
  
      this.state = {
        username: '',
        password: '',
      }

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  
    handleSubmit(event) {
      let user = {
        username: this.state.username,
        password: this.state.password
      }
  
      api.login(user).then(response => {
        if(response.token){
            this.setState({
                token: response.token,
                login: true
            }) 

            let user = {
              username: this.state.username,
              token: response.token
            }

            localStorage.setItem('user', JSON.stringify(user))
            this.props.history.push('/inbox')
        }
      })
      .catch(err => handleErrors(err));

      event.preventDefault();
    }
  
    render(){
      return(
        <div>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
            <input 
              type="text" 
              value={this.state.username} 
              name="username" 
              placeholder="username"
              onChange={this.handleChange} 
            />
            </label>
            <label>
              Password:
            </label>
            <input 
              type="password" 
              value={this.state.password} 
              name="password"
              placeholder="password"
              onChange={this.handleChange} 
            />
            <input type="submit" value="Submit" />
          </form>
          {
            this.state.login ? 
            <p>Login Successful</p> :
            <p>{this.state.error}</p>
          }
        </div>
      )
    }
  }

export default Login;