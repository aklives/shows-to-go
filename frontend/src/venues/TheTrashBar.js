import React from 'react'
import MapContainer from '../containers/MapContainer'

class TheTrashBar extends React.Component {


state = {
  venue: {}
}

componentDidMount(){
  fetch('http://localhost:3000/venues/3')
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
      <h1>The Trash Bar</h1>
      <p>{this.state.venue.address}</p>
      <br/>
      <img src="./the_trash_bar.jpg" height="400px" width="800px" />
      <p>The Trash Bar is in the heart of Williamsburg and features punk and rock acts</p>
      <h1>Bands Playing:</h1>
      {this.state.venue.address ?
       this.state.venue.concerts.map(concert => {
         return <div className="venue-concerts"><p><span className="neon-orange">{concert.band}</span>-<span className="neon-purple">{concert.day_name.name}</span></p></div>
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

export default TheTrashBar
