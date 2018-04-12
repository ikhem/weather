import React  from 'react'
import moment from 'moment'

export default function Message(props) {
  return(
    <div>
      {
        props.messages.map(message => 
          <div className="card" key={message.id}>
            <div className="card-body">
              <p>Date Sent: {moment(message.sent).format('llll')}</p>
              <p>ID: {message.id}</p>
              <p>From: {message.sender}</p>
              <p>Subject: {message.title}</p>
              <p>Message: {message.body}</p>
              <button onClick={() => props.handleDelete(message.id, props.user)}>Delete</button>
            </div>
          </div>
        )
      }
    </div>
  )
}