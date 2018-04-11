import React, { Component } from 'react';
import api                  from '../utils/api';
import handleErrors         from '../utils/helpers';

class Inbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: [],
      user: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id, user){
    api.deleteMessages(id, user).then(res => {
      this.getMessages(this.state.user)
    })
    .catch(err => handleErrors(err));
  }
  handleClick() {
    api.getInbox(this.state.user).then(res => 
      { this.setState({messages: res})
    })
    .catch(err => handleErrors(err));
  }
  componentWillMount(){
    let user = JSON.parse(localStorage.getItem("user"))
    this.setState({
      user: user
    })
    if(!user){
      this.props.history.push("/")
    }
  }
  componentDidMount(){
    if(this.state.user){
      api.getInbox(this.state.user).then(res => 
        { this.setState({messages: res})
      })
      .catch(err => handleErrors(err));
    }
  }
  getMessages(user){
    api.getInbox(user).then(res => 
      { this.setState({messages: res})
    })
    .catch(err => handleErrors(err));
  }
  render(){
    let messages = this.state.messages
    return(
      <div>
        <h1>Inbox</h1>
        {
          messages.map(message => 
            <li key={message.id}>
              <p>ID: {message.id}</p>
              <p>From: {message.sender}</p>
              <p>Title: {message.title}</p>
              <p>Date Sent: {message.sent}</p>
              <p>Message: {message.body}</p>
              <button onClick={() => this.handleDelete(message.id, this.state.user)}>Delete</button>
            </li>
          )
        }
      </div>
    )
  }
}

export default Inbox;