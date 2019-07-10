import React from 'react'
import VenueContainer from '../containers/VenueContainer'
import DaysContainer from '../containers/DaysContainer'
import { NavLink } from 'react-router-dom';

export default class Home extends React.Component {

render(){
  return (
   <div className = "maincontainer">

     {this.props.currentUser ?
       <div className="welcome">
         <h2><NavLink className="welcome" to="/profile">Welcome {this.props.currentUser.name}, click here to see your Free Concert Schedule</NavLink></h2>
       </div>
       :
       <div className="sign-in">
         <h2><NavLink className="neon-orange" to="/signup">Please Log-In to Add Shows to Schedule</NavLink></h2>
       </div>
      }
     <div className="venues-days">
       <VenueContainer currentUser={this.props.currentUser}/>
       <DaysContainer currentUser={this.props.currentUser}/>
     </div>
   </div>
  )




}

}
