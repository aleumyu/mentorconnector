import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RegisterForm from './registerform';
import AlertMessage from './alertMessage';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      lgShow: false,
      message: false
    }
  }


  handleChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    })

  }


  addAccount(e) {
    let signUpBody = {
      email: this.state.email,
      password: this.state.password 
    }

    fetch('http://localhost:9000/api/v1/register', {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(signUpBody)
    })
    .then (response => {
      if (response.status === 200) {
        console.log(200);
        this.setState ({
          lgShow: true
        })
      } else if (response.status === 409) {
        console.log(409)
        this.setState ({
          message: true
        }) 
      } else if (!response.ok) {
        console.log("error");
        throw Error(response.statusText);
      }
    })
    .catch(error => console.log(error))
  }

  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <div>
        {
          !this.state.lgShow 
            ?  <Modal
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
                  {
                    this.state.message ? <AlertMessage/> : null
                  }
                  <input className="text email" type="email" name="email" placeholder="Email" required="" onChange = {e => this.handleChange(e)}/>
                  <input className="text" type="password" name="password" placeholder="Password" required="" onChange = {e => this.handleChange(e)}/>
                  {/*<input className="text w3lpass" type="password" name="password" placeholder="Confirm Password" required="" />*/}
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

            : <Modal 
                size="lg"
                show={this.state.lgShow}
                onHide={lgClose}
                aria-labelledby="example-modal-sizes-title-lg"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-modal-sizes-title-lg">Registration Form</Modal.Title>
                </Modal.Header>
                <Modal.Body> <RegisterForm />  </Modal.Body>   
            </Modal> 
            
        }
        
        
      </div>
    );
  }
}

export default Register;