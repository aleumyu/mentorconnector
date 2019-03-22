import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

class RegisterFormAlert extends Component {
  render() {
    return (
      <Alert dismissible variant="danger">
        <Alert.Heading>Your have to fill all the informaiton.</Alert.Heading>
      </Alert>
    );
  }
}

export default RegisterFormAlert;
