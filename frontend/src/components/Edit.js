import React from 'react'
import { Form, Button } from 'semantic-ui-react'

class Edit extends React.Component{

state = {
  concerts: [],
  band: "",
  venue_id: "",
  day_id: ""

}

handleBandChange = (event) => {
  this.setState({
    band: event.target.value
  })
}

handleVenueChange = (event) => {
  this.setState({
    venue_id: event.target.value
  })
}

handleDayChange = (event) => {
  this.setState({
    day_id: event.target.value
  })
}



fetchConcerts = () => {
  fetch('http://localhost:3000/concerts')
  .then(res => res.json())
  .then(concerts => {
    console.log("concerts fetched")
    this.setState({
      concerts: concerts
    })
  })

}

deleteConcert = (concertId) => {

  fetch(`http://localhost:3000/concerts/${concertId}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(concert => console.log(concert))
  .then(() => this.fetchConcerts())
}

addConcert = () => {
  fetch('http://localhost:3000/concerts', {
    method: "POST",
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      band: this.state.band,
      venue_id: this.state.venue_id,
      day_id: this.state.day_id
    })
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .then(alert("You created a concert!"))
  .then(() => this.fetchConcerts())
}

render(){
  const bands = this.state.concerts.map(concert => concert.band)

  return (
  <div>
    {this.props.currentUser ?
      <div>
        <h1>Welcome to Edit Mode, {this.props.currentUser.name}</h1>
        <h2>See all shows:</h2>
        {this.state.concerts.length < 1 && this.props.currentUser ? this.fetchConcerts() : null}
        {this.state.concerts.map(concert => {
          return <React.Fragment key={concert.id}>
                   <div>
                     <br/><span className="neon-purple">{concert.day_name.name}</span> - <span className="neon-orange"><strong>{concert.band}</strong></span> - <span className="venue-day">{concert.venue_name.name}</span>
                     {this.props.currentUser ?
                      <Button  size='mini' basic color='violet' onClick={() => this.deleteConcert(concert.id)} type='submit'>Delete</Button>
                      :
                      null
                     }

                   </div>
                 </React.Fragment>
        })}
      </div>
      :
    null
    }
    <br/>
    <div><p>Add Concert Form:</p></div>

    <form>
      <select value={this.state.band} onChange={this.handleBandChange} required>
        <option value="" disabled>Band</option>
        {
          bands.map(function(band) {
            return <option
              value={band}>{band}</option>;
          })
        }
      </select>
    </form>

    <form>
      <select value={this.state.venue_id} onChange={this.handleVenueChange} required>
        <option value="" disabled>Venue</option>
        <option value="1">Kingsland</option>
        <option value="2">The Gutter</option>
        <option value="3">The Trash Bar</option>
        <option value="4">The Bowery Ballroom</option>
        <option value="5">East River Park</option>
      </select>
    </form>

    <form>
      <select value={this.state.day_id} onChange={this.handleDayChange} required>
        <option value="" disabled>Day</option>
        <option value="1">Sunday</option>
        <option value="2">Monday</option>
        <option value="3">Tuesday</option>
        <option value="4">Wednesday</option>
        <option value="5">Thursday</option>
        <option value="6">Friday</option>
        <option value="7">Saturday</option>
      </select>
    </form>
    <Button size='mini' basic color='violet' onClick={() => this.addConcert()} type='submit'>Add Concert</Button>

  </div>
  )
}
}

export default Edit
