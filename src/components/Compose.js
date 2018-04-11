import React, { Component } from 'react';
import api                  from '../utils/api'

class Compose extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null,
      "title": '',
      "body": '',
      "receiver": ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    let user = JSON.parse(localStorage.getItem("user"))
    this.setState({
      user: user
    })
    if(!user){
      this.props.history.push("/")
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(event){
    let message = {
      body: this.state.body,
      receiver: this.state.receiver,
      title: this.state.title,
    }

    api.postMessages(message, this.state.user).then(response => {
      console.log("Response: ", response)
    })
  }

  render(){
    return(
      <div>
        <form className="form-signin" onSubmit={this.handleSubmit}>
          <div className="test-center mb-4">
            <h1>Compose</h1>
          </div>

          <input type="text" value={this.state.receiver} name="receiver" onChange={this.handleChange} placeholder="To" />

          <input type="text" value={this.state.title} name="title" onChange={this.handleChange} placeholder="Subject" />

          <label>
            Message:
          </label>
          <textarea type="text" value={this.state.body} name="body" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Compose;