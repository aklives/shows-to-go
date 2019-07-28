import React from 'react';
import '../App.css';
import {Route} from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Signup from '../components/Signup'
import Logout from '../components/Logout'
import Profile from '../components/Profile'
import Edit from '../components/Edit'
import Kingsland from '../venues/Kingsland'
import TheGutter from '../venues/TheGutter'
import TheTrashBar from '../venues/TheTrashBar'
import TheBoweryBallroom from '../venues/TheBoweryBallroom'
import EastRiverPark from '../venues/EastRiverPark'

class App extends React.Component {

  state = {
    currentUser: null
  }

  setCurrentUser = (user) => {
		this.setState({
			currentUser: user
		})
	}

  logOut = () => {
    this.setState({
      currentUser: null
    })
  }

  componentWillMount(){
  		const token = localStorage.getItem("token")
  		if(token){
  			fetch("http://localhost:3000/auto_login", {
  				headers: {
  					"Authorization": token
  				}
  			})
  			.then(res => res.json())
  			.then(user => {
  				if (user.errors){
  					localStorage.removeItem("token")
  					alert(user.errors)
  				} else {
            console.log(user)
  					this.setCurrentUser(user)
  				}
  			})
  		}
    }


  render(){
    return (
      <Router>
            <Navbar className="navbar" currentUser={this.state.currentUser}/>

            <Route exact path="/" render={(routerProps) => {
              return <Home currentUser={this.state.currentUser} {...routerProps}/>
            }} />

            <Route exact path="/about" component={About} />

            <Route exact path="/signup" render={(routerProps) => {
							return <Signup setCurrentUser={this.setCurrentUser} {...routerProps}/>
						}} />

            <Route exact path="/logout" render={(routerProps) => {
							return <Logout logOut={this.logOut} currentUser={this.state.currentUser} {...routerProps}/>
						}} />

            <Route exact path="/login" render={(routerProps) => {
 							return <Login setCurrentUser={this.setCurrentUser} {...routerProps}/>
 						}} />

            <Route exact path="/profile" render={(routerProps) => {
             return <Profile currentUser={this.state.currentUser} {...routerProps}/>
            }} />

            <Route exact path="/edit" render={(routerProps) => {
              return <Edit currentUser={this.state.currentUser} {...routerProps}/>
            }} />

            <Route path="/Kingsland" render={(routerProps) => {
               return <Kingsland currentUser={this.state.currentUser} {...routerProps}/>
            }} />

           <Route path="/The Gutter" render={(routerProps) => {
             return <TheGutter currentUser={this.state.currentUser} {...routerProps}/>
           }} />

           <Route path="/The Trash Bar" render={(routerProps) => {
             return <TheTrashBar currentUser={this.state.currentUser} {...routerProps}/>
           }} />

           <Route path="/The Bowery Ballroom" render={(routerProps) => {
             return <TheBoweryBallroom currentUser={this.state.currentUser} {...routerProps}/>
           }} />

           <Route path="/East River Park" render={(routerProps) => {
             return <EastRiverPark currentUser={this.state.currentUser} {...routerProps}/>
           }} />

      </Router>
    );
  }

}

export default App;
