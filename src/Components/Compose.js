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
    event.preventDefault()
  }

  render(){
    return(
      <div>
        <h1>Compose Messages</h1>

        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.title} name="title" onChange={this.handleChange} />
          </label>
          <label>
            Message:
          </label>
          <textarea type="text" value={this.state.body} name="body" onChange={this.handleChange} />
          <label>
            Receiver:
            <input type="text" value={this.state.receiver} name="receiver" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Compose;