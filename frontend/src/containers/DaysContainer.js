import React from 'react'
import '../App.css';
import Day from '../components/Day'

export default class VenueContainer extends React.Component {

state = {
  days: [],

}

componentDidMount(){
  fetch('http://localhost:3000/days')
  .then(res => res.json())
  .then(days => {
    // debugger
    this.setState({
      days: days
    })
  })
}

render(){

  return (
    <div className="days-container">
        {this.state.days.map(day => {
          return <Day currentUser={this.props.currentUser} key={day.id} day={day}/>
        })}

    </div>
    )
  }

}
