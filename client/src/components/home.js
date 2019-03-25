import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import './home.css';
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      mentorSelect: false,
      isAuthenticated: true
    }
  }

  /*componentDidMount() {
    fetch("http://localhost:9000/login")
    .then(res => {
      console.log("hellohello" + res.status)
      if (res.status === 401) {
        this.setState ({
          isAuthenticated: false
        });
      }  
    })  
    .catch(error => {
      console.log(error)
    })  
  }  */
  
  render() {


    if (this.state.isAuthenticated === false) {
      return <Redirect to="/" />
  }


    return (
      <div className="Home">
        <div>
          <div>
            <Header />
          </div>

          <section className="jumbotron text-center">
            <div className="jumbotronCover">
              <h1 className="jumbotron-heading">Be engaged and help others!</h1>
              <p className="lead">
                Hundreds of profiles of tech professionals so you can find the perfect match for you.
              </p>
              <p>
                <a href="/results" className="btn btn-primary my-2">
                  Find Match
                </a>
              </p>
            </div>
          </section>

          <div className="text-center">
            <div className="container marketing">

              {/*<!-- /.row -->*/}

              <h2 className="featurette-heading"> See what's on the blog </h2>
              {/*START THE FEATURETTES*/}


              <hr className="featurette-divider" />
              <div className="row">
                <div className="col-8">
                  <h2 className="featurette-heading">
                    How being a mentor helped me be a better manager

                  </h2>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla.
                    Vestibulum id ligula porta felis euismod semper. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur.
                    Fusce dapibus, tellus ac cursus commodo. <br />
                    <strong>Read More...</strong>
                  </p>
                  </div>
                  <div className="col-4">
                  <img src="https://images.unsplash.com/photo-1531538512164-e6c51ea63d20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    alt="Generic placeholder image" className="imgblog"/>
                  </div>
              </div>




              <hr className="featurette-divider" />
              <div className="row">
                <div className="col-8">
                  <h2 className="featurette-heading">
                    Preparing to meet your mentor for the first time

                  </h2>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla.
                    Vestibulum id ligula porta felis euismod semper. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur.
                    Fusce dapibus, tellus ac cursus commodo. <br />
                    <strong>Read More...</strong>
                  </p>
                  </div>
                  <div className="col-4">
                  <img src="https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="Generic placeholder image" className="imgblog"/>
                  </div>
              </div>




              <hr className="featurette-divider" />
              <div className="row">
                <div className="col-8">
                  <h2 className="featurette-heading">
                    Mentorship Matchmaking

                  </h2>
                  <p>
                    Donec ullamcorper nulla non metus auctor fringilla.
                    Vestibulum id ligula porta felis euismod semper. Praesent
                    commodo cursus magna, vel scelerisque nisl consectetur.
                    Fusce dapibus, tellus ac cursus commodo. <br />
                    <strong>Read More...</strong>
                  </p>
                  </div>
                  <div className="col-4">
                  <img src="https://images.unsplash.com/photo-1467799824547-58bcafb6dbc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                    alt="Generic placeholder image" className="imgblog"/>
                  </div>
              </div>


              {/*<!-- /END THE FEATURETTES -->*/}
            </div>
            {/*<!-- /.container -->*/}
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
