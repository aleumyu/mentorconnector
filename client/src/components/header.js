import React, { Component } from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { NavLink, Redirect } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isAuthenticated: true
    }
  }

  signOut(e) {
    this.setState ({
      isAuthenticated: false
    });
    }
  

  render() {

    if (this.state.isAuthenticated === false) {
      return <Redirect to="/" />
  }

    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Mentor Connector</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/profile">My Profile</NavLink> 
          <NavLink to="/inbox">Inbox</NavLink>
        </Nav>
        <Form inline>
          <Button variant="outline-danger" onClick={(e) => this.signOut(e)}>Log Out</Button>
        </Form>
    </Navbar>

    );
  }
}

export default Header;

/*
    <div>

        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">Mentor Connector</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">InBox</a>
              </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Log Out</button>
            </form>

            //FUTURE FEATURE
            <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            
            </div>
            </nav>
    
        </div>

*/



/*
<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
<script src="../../assets/js/vendor/popper.min.js"></script>
<script src="../../dist/js/bootstrap.min.js"></script>


//import 'bootstrap/dist/css/bootstrap.min.css';
*/