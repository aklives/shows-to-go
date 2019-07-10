import React from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';


class Login extends React.Component {
	state = {
    email: "",
		password: ""
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = () => {
		// console.log("LOGGING IN", this.state)
		fetch("http://localhost:3000/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then(response => {
			if (response.errors) {
				alert(response.errors)
			} else {
				// response is the user object
				console.log(response)
				localStorage.setItem("token", response.token)
				this.props.setCurrentUser(response.user)
				this.props.history.push('/')
			}
		})
	}

	render(){
		return (
      <div className="login-container">
			<Grid centered columns={2}>
		    <Grid.Column>
		      <Header as="h2" textAlign="center" className="ui violet header">
		        Login
		      </Header>
		      <Segment inverted>
		        <Form inverted
                  onSubmit={this.handleSubmit}
						      size="large">
		          <Form.Input
							  onChange={this.handleChange}
								name="email"
								value={this.state.email}
		            fluid
		            icon="user"
		            iconPosition="left"
		            placeholder="Email address"
		          />
		          <Form.Input
                onChange={this.handleChange}
								type="password"
								name="password"
								value={this.state.password}
								fluid
		            icon="lock"
		            iconPosition="left"
		            placeholder="Password"
		          />

		          <Button color="blue" fluid size="large">
		            Login
		          </Button>
		        </Form>
		      </Segment>
		      <Message>
		        Not registered yet? <a href="/signup">Sign Up</a>
		      </Message>
		    </Grid.Column>
		  </Grid>
      </div>


		)
	}
}

export default Login
