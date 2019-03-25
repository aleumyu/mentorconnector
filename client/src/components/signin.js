import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      email: "",
      password: ""
    };
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  signIn(e) {
    let signInBody = {
      email: this.state.email.toLowerCase(),
      password: this.state.password 
    }
    console.log(signInBody)
    fetch('/api/v1/signin', {
      method: "POST", 
      headers: {
              "Content-Type": "application/json",
      },
      body: JSON.stringify(signInBody) 
    })
    .then (res => {
      if (res.status === 200) {
        console.log(200);
        this.setState ({
          isAuthenticated: true
        })
      } else if (!res.ok) {
          throw Error(res.statusText);
        }
    })
    .catch (error => console.log(error))
  }

  render() {
  
    if (this.state.isAuthenticated === true) {
        return <Redirect to="/home" />
    }
   
    return (

      <Modal
        {...this.props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign In to MentorConnect
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="text email" type="email" name="email" placeholder="Email" required="" onChange={e => this.handleInput(e)}/>
					<input className="text" type="password" name="password" placeholder="Password" required="" onChange={e => this.handleInput(e)}/>
					<div className="wthree-text">
						<div className="clear"> </div>
					</div>
					<input type="submit" value="SIGN IN" onClick={(e) => this.signIn(e)}/>
				<p>Don't have an Account? <button onClick={this.props.onSwitch}> Register Now!</button></p>

        </Modal.Body>
      </Modal>

    );
  }
}

export default SignIn;