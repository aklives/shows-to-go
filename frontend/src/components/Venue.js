import React from 'react'
import { NavLink } from 'react-router-dom';

export default class Venue extends React.Component {

  render(){
    return (
      <div className="venue">
        <NavLink className="neon-green" to={this.props.venue.name}>{this.props.venue.name}</NavLink>
      </div>
    )
  }


}
