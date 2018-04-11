import React, { Component } from 'react';
import api                  from '../utils/api';
import handleErrors         from '../utils/helpers';

class Outbox extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: [],
      user: null,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleClick() {
    api.getOutbox(this.state.user).then(res => 
      { this.setState({messages: res})
    })
    .catch(err => handleErrors(err));
  }
  handleDelete(id, user){
    console.log("id", id)
    api.deleteMessages(id, user).then(res => {
      console.log(res)
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
        api.getOutbox(this.state.user).then(res => 
          { this.setState({messages: res})
        })
        .catch(err => handleErrors(err));
    }
  }
  render(){
    let messages = this.state.messages
    return(
      <div>
        <h1>Outbox</h1>
        {
          messages.map(message => 
            <li key={message.id}>
              <p>ID: {message.id}</p>
              <p>To: {message.receiver}</p>
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

export default Outbox;