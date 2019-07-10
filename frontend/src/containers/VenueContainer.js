import React from 'react'
import '../App.css';
import Venue from '../components/Venue'
import { NavLink } from 'react-router-dom';

export default class VenueContainer extends React.Component {

state = {
  venues: []
}

componentDidMount(){
  fetch('http://localhost:3000/venues')
  .then(res => res.json())
  .then(venues => {
    this.setState({
      venues: venues
    })
  })
}

render(){

  return (
    <div className="venue-container">
        {this.state.venues.map(venue => {
          return <Venue key={venue.id} venue={venue}/>
        })}

        {this.props.currentUser && this.props.currentUser.admin ?
        <div className = "edit"><NavLink to="/edit">{this.props.currentUser.admin ? "admin" : "not admin"}</NavLink></div>
          :
        <h1>not admin</h1>

         }

    </div>
    )
  }

}
