import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import AlertMessage from './alertMessage';
import RegisterForm from "./registerform";
import { Redirect } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
      message: false,
      isAuthenticated: false,
      userId: 0
		};
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	addAccount(e) {
		let signUpBody = {
			email: (this.state.email).toLowerCase(),
			password: this.state.password	
		};

		fetch('/api/v1/register', {
			method: 'POST',
			headers: {
				'content-Type': 'application/json'
			},
			body: JSON.stringify(signUpBody)
		})
			.then((response) => {
				if (response.status === 200) {
          console.log(200);
          this.setState ({
            isAuthenticated: true
          })
          return response.json();
				} else if (response.status === 409) {
					console.log(409);
					this.setState({
						message: true
					});
				} else if (!response.ok) {
					console.log('error');
					throw Error(response.statusText);
				}
			})
      .then(json => {
        console.log(json);
        this.setState({
          userId: json[0].userId
        });
      })
			.catch((error) => console.log(error));
	}

	render() {

    if (this.state.isAuthenticated === true) {
      return <Redirect to="/registerForm" />
    }
 
		return (
			<div>
				<Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Register with MentorConnect</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{this.state.message ? <AlertMessage /> : null}
						<input
							className="text email"
							type="email"
							name="email"
							placeholder="Email"
							required=""
							onChange={(e) => this.handleChange(e)}
						/>
						<input
							className="text"
							type="password"
							name="password"
							placeholder="Password"
							required=""
							onChange={(e) => this.handleChange(e)}
						/>
						{/*<input className="text w3lpass" type="password" name="password" placeholder="Confirm Password" required="" />*/}
						<div className="wthree-text">
							<label className="anim">
								<input type="checkbox" className="checkbox" required="" />
								<span>I Agree To The Terms and Conditions</span>
							</label>
							<div className="clear"> </div>
						</div>
						<input type="submit" value="SIGNUP" onClick={(e) => this.addAccount(e)} />
						<p>
							Already have an Account? <button onClick={this.props.onSwitch}> Sign in Now!</button>
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.props.onHide}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}

}

export default Register;
