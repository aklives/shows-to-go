import React from 'react'
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';

class Signup extends React.Component {
	state = {
		name: "",
		email: "",
		password: "",
		passwordConfirmation: "",
		admin: false
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	createUser = () => {
		fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accepts": "application/json",
			},
			body: JSON.stringify(this.state)
		})
		.then(res => res.json())
		.then((response) => {
			if (response.errors){
				console.log(response)
				alert(response.errors)
			} else {
        localStorage.setItem("token", response.token)
				this.props.setCurrentUser(response.user)
				this.props.history.push('/')
			}

		})
	}

	handleSubmit = () => {
		if(this.state.password === this.state.passwordConfirmation){
			this.createUser()
		} else {
			alert("Passwords don't match!")
		}
	}

	render(){
		return (
      <div className="signup-container">
			<Grid centered columns={2}>
				<Grid.Column>
					<Header as="h2" textAlign="center" className="ui violet header">
						Sign Up
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
								name="name"
								value={this.state.name}
								fluid
								iconPosition="left"
								placeholder="Name"
							/>
							<Form.Input
								onChange={this.handleChange}
								name="password"
								type="password"
								value={this.state.password}
								fluid
								icon="lock"
								iconPosition="left"
								placeholder="Password"
							/>
							<Form.Input
								onChange={this.handleChange}
								type="password"
								name="passwordConfirmation"
								value={this.state.passwordConfirmation}
								fluid
								icon="lock"
								iconPosition="left"
								placeholder="Password Confirmation"
							/>

							<Button color="blue" fluid size="large">
								Sign Up
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
      </div>
		)
	}
}

export default Signup
