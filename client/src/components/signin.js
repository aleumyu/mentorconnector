import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SignIn extends Component {

  constructor(props) {
    super(props);
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
          <input className="text email" type="email" name="email" placeholder="Email" required="" />
					<input className="text" type="password" name="password" placeholder="Password" required="" />
					<div className="wthree-text">
						<div className="clear"> </div>
					</div>
					<input type="submit" value="SIGN IN" />
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