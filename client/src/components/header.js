import React, { Component } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';
import './header.css';
//const LocalStrategy = require('passport-local').Strategy;


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isAuthenticated: true,
      userId: 0
    }
  }

componentDidMount() {
  fetch('/login') 
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log('res is ' + res);
      return res.json();
    })
    .then(json => {
      console.log(json);
      this.setState ({
        userId: json[0].userId
      });
    })
    .catch(error => {
      console.log(error)
    })
}

  signOut(e) {
    fetch('/logout')
    .then(results => {
      if (!results.ok) {
        throw Error(results.statusText);
      } else {
        this.setState ({
          isAuthenticated: false
        });
      }
    })
    .catch(error => {
      console.log(error)
    })      
  }
  

  render() {

    if (this.state.isAuthenticated === false) {
      return <Redirect to="/" />
  }

    console.log('head ' + this.state.userId);

    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mentor Connector</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/home" className="menulink">Home</NavLink>
          <NavLink to={`/profile/${this.state.userId}`} className="menulink">My Profile</NavLink>
          <NavLink to="/inbox" className="menulink">Inbox</NavLink>
        </Nav>
        <Form inline>
          <Button  onClick={(e) => this.signOut(e)}>Log Out</Button>
        </Form>
    </Navbar>

    );
  }
}

export default Header;

