import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Favorites from './favorites';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: [],
      interestTag: [],
      favoritesList: [],
      isAuthenticated: true,
      userId: 0
    };
  }

  componentDidUpdate() {
    const {id} = this.props.match.params;
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
      return Promise.all ([
        fetch(`/api/v1/users/${id}`),
        fetch(`/api/v1/users/${id}/interests`),
        fetch(`/api/v1/users/${id}/favorites`)
      ]);
    })
      .then(([results1, results2, results3]) => {
        if (results1.status === 401 || results2.status === 401 || results3.status === 401) {
          return this.setState ({
            isAuthenticated: false
          });
        }
        return Promise.all([results1.json(), results2.json(), results3.json()]);
      })
      .then(([json1, json2, json3]) => {
        console.log(json2);
        this.setState ({
          user: json1,
          interestTag: json2,
          favoritesList: json3
        });
      })
      .catch(error => console.log(error))
  }
 
  addFavorite(e) {
    const {id} = this.props.match.params;
    let favorite = {
      id: this.state.userId,
      selectedUserId: id
    }
    console.log(favorite);

    fetch(`/api/v1/users/${this.state.userId}/favorites`, {
      method: "POST", 
      headers: {
              "Content-Type": "application/json",
      },
      body: JSON.stringify(favorite) 
    })
    .then (res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const currentList = this.state.favoritesList;
      this.setState ({
        favoritesList: [...currentList, favorite]
      });
      console.log(this.state.favoritesList)
    })
    .catch (error => console.log(error))
  
  }

  removeFavorite(event, i) {
    event.preventDefault(event);
    const {id} = this.props.match.params;
    console.log(this.state.favoritesList[i]);
    
    fetch(`/api/v1/users/${id}/favorites/${this.state.favoritesList[i].selectedUserId}`, {
      method: 'DELETE'
    })
    .then (results => {
      if (!results.ok) {
        throw Error(results.statusText);
      }
      let arr = this.state.favoritesList;
      arr.splice(i, 1);
      this.setState ({
        favoritesList: arr
      });
    })
  }

  render() {

    if (this.state.isAuthenticated === false) {
      return <Redirect to="/" />
    }

    const id = this.props.match.params.id;
    console.log(id);
    console.log(this.state.userId)

    return (

      <div>
        <div><Header/></div>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <div className="container text-center">
            <div className="container text-center bg-white align-items-center align-content-center">      
              {
                this.state.user.map((e, i) => {
                  return <div className="container border border-secondary rounded text-center bg-white align-items-center align-content-center mb-5" key={e.userId}>
                        
                            <img className="mb-3 mt-3" src={e.photo}></img><br></br>
                        
                            <h4 className="d-inline text-uppercase font-weight-bold">{e.firstName} {e.lastName}</h4><span className="d-inline"> in {e.country} / {e.city}</span><br></br>
          
                            <p className="badge badge-warning mr-1">{e.meeting ? 'in person' : 'online'}</p>
                            {
                            (e.role === 0) ? <p className="badge badge-success mr-1">{'mentor'}</p>
                            : (e.role === 1) ? <p className="badge badge-success mr-1">{'mentee'}</p>  
                            : (e.role === 2) ? <p className="badge badge-success mr-1">{'mentor & ' + 'mentee'}</p>
                            : <p></p>
                            }
                            {this.state.interestTag.map( e => {
                              return <p className="badge badge-info rounded mr-1"key={e.interestId}>{e.interestTag}</p>
                            })
                            } 
                            <p className="mb-2">{e.industry}</p>
                            <p className="mb-2">{e.jobType}</p>
                            <p className="mb-2">{e.years} year's of experience</p>
                            <p>{e.intro}</p>                                    
                        </div>
                })
              }
          </div> 

          {
            id == this.state.userId
            ? <p></p>
            : <button className="btn btn-outline-success text-center" onClick={event => this.addFavorite(event)}>Add to Favorites</button>
          }

        </div>

        {
          id == this.state.userId
          ? <div>
              <Favorites favoritesList={this.state.favoritesList} removeFavorite={(e, i) => this.removeFavorite(e, i)} userId={this.state.userId}/>
            </div>
          : <div></div>
        }
           <div><Footer/></div>
      </div>
    );
  }
}

export default Profile;