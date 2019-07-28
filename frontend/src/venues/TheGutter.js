import React from 'react'
import MapContainer from '../containers/MapContainer'

class TheGutter extends React.Component {


state = {
  venue: {}
}

componentDidMount(){
  fetch('http://localhost:3000/venues/2')
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
      <h1>The Gutter</h1>
      <p>{this.state.venue.address}</p>
      <br/>
      <img src="./the_gutter.jpg" height="400px" width="800px" alt="The Gutter" title="The Gutter" />
      <p>The Gutter is tucked away in North Williamsburg and features a bowling alley.</p>
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

export default TheGutter
