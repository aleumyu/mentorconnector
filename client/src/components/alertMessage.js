import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';

class AlertMessage extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    
    return (
      <Alert dismissible variant="danger">
        <Alert.Heading>Your email is already registered!</Alert.Heading> 
      </Alert>
    );
  }
}

export default AlertMessage;