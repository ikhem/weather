import React, { Component } from 'react';
import api                  from '../utils/api';
import handleErrors         from '../utils/helpers';
import Message              from '../components/Message'

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
    this.getMessages(this.state.user)
  }
  handleDelete(id, user){
    api.deleteMessages(id, user).then(res => {
      this.getMessages(this.state.user)
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
  getMessages(user){
    api.getOutbox(user).then(res => 
      { this.setState({messages: res})
    })
    .catch(err => handleErrors(err));
  }
  render(){
    let messages = this.state.messages
    return(
      <div className="container">
        <h1>Outbox</h1>
        <Message 
          messages={messages}
          user={this.state.user}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default Outbox;