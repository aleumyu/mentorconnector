import React, { Component } from 'react';
import './landing.css';
import Register from "./register";
import SignIn from "./signin";
import 'bootstrap/dist/css/bootstrap.css'

class Landing extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      registerview: false,
      signinview: false
    })
  }

  render() {
    let closeReg = () => this.setState({ registerview: false });
    let closeLog = () => this.setState({ signinview: false });

    return (
      <div>
<div className="text-center">
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">

  <main role="main" className="inner cover">
    <h1 className="cover-heading">MentorConnector</h1>
    <p className="lead">MentorConnector is a platform for matching mentors and mentees who wish to develop long-lasting professional relationships.</p>
    <p className="lead">
      <button className="btn btn-lg btn-secondary" onClick = {() => this.setState ({ registerview: true })}>Register</button>  
      <button className="btn btn-lg btn-secondary" onClick = {() => this.setState ({ signinview: true })}>Sign In</button>  
    </p>
    <Register
          show={this.state.registerview}
          onHide={closeReg}
    />
    <SignIn
          show={this.state.signinview}
          onHide={closeLog}
    />
  </main>

</div>
</div>

      </div>
    );
  }
}

export default Landing;