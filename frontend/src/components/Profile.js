import React from 'react';
import {Button} from 'semantic-ui-react'


export default class Profile extends React.Component {

state = {
  tickets: []
}

componentDidMount = () => {
  fetch('http://localhost:3000/tickets')
  .then(res => res.json())
  .then(tickets => {
    const userTickets = tickets.filter(ticket => {
       return ticket.user_id === this.props.currentUser.id})
    this.setState({
      tickets: userTickets
    })
  })
}

deleteTicket = (ticketId) => {
  fetch(`http://localhost:3000/tickets/${ticketId}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .then(() => this.componentDidMount())
}



  render(){
    return(

     <div className="schedule">

     <div className="profile-header">{this.props.currentUser ? <h2>{this.props.currentUser.name}'s Concert Schedule</h2> : null}</div>



        {this.state.tickets.length > 0 ?

          this.state.tickets.map(userTicket => {
           return <div className="schedule-item" key={userTicket.concert.id}>
                     <p>{userTicket.concert.band}</p>
                     <p className="neon-green">{userTicket.concert.venue_name.name}</p>
                     <p className="neon-purple">{userTicket.concert.day_name.name}</p>
                     <Button size='mini' basic color='blue' onClick={() => this.deleteTicket(userTicket.id)} type='submit'>Delete Ticket</Button>
                  </div>
          })
          :
          <h1>"Add Some Free Shows!!!"</h1>
        }





      </div>



    )
  }
}
