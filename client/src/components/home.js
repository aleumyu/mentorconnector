import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class Home extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <div><Header/></div>
        <br></br>
        <br></br>
        <br></br>
        <div>This is Home</div>
        <div><Footer/></div>
      </div>
    );
  }
}

export default Home;