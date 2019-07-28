import React from 'react'
import MapContainer from '../containers/MapContainer'

class TheBoweryBallroom extends React.Component {


state = {
  venue: {}
}

componentDidMount(){
  fetch('http://localhost:3000/venues/4')
  .then(res => res.json())
  .then(venue => {
    this.setState({
      venue: venue
    })
  })
}

render(){
  return(
    <React.Fragment>
      <h1>The Bowery Ballroom</h1>
      <p>{this.state.venue.address}</p>
      <br/>
      <img src="./the_bowery_ballroom.jpg" height="400px" width="800px" alt="The Bowery Ballroom" title="The Bowery Ballroom" />
      <p>The Bowery Ballroom is located in the heart of the East Village on Delancey St.</p>
      <h1>Bands Playing:</h1>
      {this.state.venue.address ?
       this.state.venue.concerts.map(concert => {
         return <div className="venue-concerts" key={concert.id}><p><span className="neon-orange">{concert.band}</span>-<span className="neon-purple">{concert.day_name.name}</span></p></div>
       })

      :
      null
      }
      {this.state.venue.lat ?
        <MapContainer lat={this.state.venue.lat} lng={this.state.venue.lng} name={this.state.venue.name} address={this.state.venue.address}/>
       :
       null
      }
    </React.Fragment>
  )
}


}

export default TheBoweryBallroom
