import React from 'react';
import api   from '../utils/api';

class Login extends React.Component {
    constructor(props){
      super(props)
  
      this.state = {
        username: '',
        password: '',
        errors: null
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
      .catch(err => {
        this.setState({
          errors: "User Not Found. Please Try Again."
        })
      });

      event.preventDefault();
    }
  
    render(){
      let errors = this.state.errors
      return(
        <div>
          <form className="form-signin" onSubmit={this.handleSubmit}>
              <div className="text-center mb-4">
                <h1>Login</h1>
              </div>

              <div className="form-label-group">
                <input 
                  type="text" 
                  value={this.state.username} 
                  name="username" 
                  placeholder="username"
                  onChange={this.handleChange}
                  required
                />
              </div>

              <div className="form-label-group">
                <input
                  type="password" 
                  value={this.state.password} 
                  name="password"
                  placeholder="password"
                  onChange={this.handleChange} 
                  required
                />
              </div>

              <input className="btn btn-lg btn-primary btn-block" type="submit" value="Submit" />
          </form>

          {
            this.state.errors ? 
            <p>{errors}</p> :
            null
          }
        </div>
      )
    }
}

export default Login;