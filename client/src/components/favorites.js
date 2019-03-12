import React, { Component } from 'react';
import Results from './results';


class Favorites extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  



  render() {
    return (
      <div className="App">
        <div className="container text-center">
          <div className="row">

                {
                  this.props.favoritesList.map((e, i) => {
                    return <div className="col-md-4" key={e.selectedUserId}>
                      <img src={e.photo}></img>
                      <p>{e.firstName} {e.lastName}</p>
                      <p>{e.location}</p>
                      <p>{e.industry}</p>
                      <p>{e.jobType}</p>
                      <button onClick={event => this.props.removeFavoite(event, i)}>remove</button>
                    </div>
                  })
               }

          </div> 
        </div>
      </div>
    );
  }
}

export default Favorites;