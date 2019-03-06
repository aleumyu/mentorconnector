import React, { Component } from 'react';
import './App.css';

class Profile extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    // calls our backend on port 9000, modify this!
    fetch("http://localhost:9000/")
      .then(res => res.json())
      .then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        Add your code!
      </div>
    );
  }
}

export default Profile;