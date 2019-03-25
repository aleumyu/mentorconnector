import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import './favorite.css';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.favoritesList);
    return (
      <div className="container-fluid text-center bg-white align-items-center align-content-center">
        <h3 className="mt-4 mb-4 bg-secondary text-white">MY FAVORITES</h3>
        <div className="container">
          <div className="row">
            {this.props.favoritesList.map((e, i) => {
              return (
                <div className="col" key={e.selectedUserId}>
                  <img className="mb-3" src={e.photo} /><br></br>
                  <button className="mb-2 btn btn-outline-danger btn-sm"onClick={event => this.props.removeFavorite(event, i)}>
                    remove
                  </button><br></br>
                  <NavLink to={`/profile/${e.selectedUserId}`} className="text-uppercase font-weight-bold text-reset">{e.firstName + " " + e.lastName}</NavLink>
                  <p>{e.country}</p>
                  <p>{e.industry}</p>
                  <p>{e.jobType}</p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
