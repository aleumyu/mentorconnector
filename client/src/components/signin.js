import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SignIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
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
      email: this.state.email,
      password: this.state.password 
    }
    console.log(signInBody)
    fetch('http://localhost:9000/api/v1/signin', {
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
          signedIn: true
        })
      } else if (!res.ok) {
          throw Error(res.statusText);
        }
    })
    .catch (error => console.log(error))
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
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
				<p>Don't have an Account? <a href="#"> Register Now!</a></p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SignIn;