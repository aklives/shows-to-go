import React from 'react'


class Logout extends React.Component {



render(){
  console.log(this.props)
  return(
    <div className="account-settings">
      <h1>Account Settings</h1>
      {this.props.currentUser ?
      <div>
        <p>Name: {this.props.currentUser.name}</p>
        <p>Email: {this.props.currentUser.email}</p>
      </div>
      :
      null


      }
      <br/>
      {this.props.currentUser ?
        <div className = "logout" onClick={() => {
          this.props.logOut()
          localStorage.removeItem("token")
        }}>

        Click to Logout
        </div>
        :
        <div className = "logout" onClick={() => {
          this.props.history.push('/login')
        }}>

        Click to Login
        </div>
      }
    </div>
  )
}
}

export default Logout
