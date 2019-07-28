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

        {(this.props.currentUser !== null && this.props.currentUser.admin === true) ?

          <div className = "admin"><NavLink to="/edit">admin</NavLink></div>
        :
        null


        }



    </div>
    )
  }

}
