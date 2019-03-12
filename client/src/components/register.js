import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class Register extends Component {

  constructor(props) {
    super(props);
  }


  addAccount(e) {}

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
            Register with MentorConnect
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="text email" type="email" name="email" placeholder="Email" required="" />
					<input className="text" type="password" name="password" placeholder="Password" required="" />
					<input className="text w3lpass" type="password" name="password" placeholder="Confirm Password" required="" />
					<div className="wthree-text">
						<label className="anim">
							<input type="checkbox" className="checkbox" required="" />
							<span>I Agree To The Terms and Conditions</span>
						</label>
						<div className="clear"> </div>
					</div>
					<input type="submit" value="SIGNUP" onClick={(e) => this.addAccount(e)} />
				<p>Already have an Account? <a href="#"> Login Now!</a></p>

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Register;