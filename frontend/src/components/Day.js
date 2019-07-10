import React from 'react'
import { Form, Button } from 'semantic-ui-react'


export default class Day extends React.Component {


  state = {
    concerts: []
  }


  componentWillMount(){
    fetch('http://localhost:3000/concerts')
    .then(res => res.json())
    .then(concerts => {
      let days_concerts = concerts.filter(concert => concert.day_id === this.props.day.id)
      this.setState({
        concerts: days_concerts
      })
    })
  }

  addToList = (concert_id, user_id) => {
    fetch('http://localhost:3000/tickets', {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        concert_id: concert_id,
        user_id: user_id
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then(alert("You added a show to your schedule"))
  }

  render(){
    return (
      <div className="day" >
         <div>
        <span className="neon-purple">{this.props.day.name}:</span>


         {this.state.concerts.map(concert => {

           return <React.Fragment key={concert.id}>
                    <div>
                    <hr />
                      <br/><strong>{concert.band}</strong> - <span className="venue-day">{concert.venue_name.name}</span>
                      <div>
                      {this.props.currentUser ?
                       <Button size='mini' basic color='blue' onClick={() => this.addToList(concert.id, this.props.currentUser.id)} type='submit'>Add</Button>
                       :
                       null
                      }
                      </div>

                    </div>
                  </React.Fragment>
         })}
         </div>
      </div>
    )
  }


}
