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
      isAuthenticated: true
    };
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    Promise.all ([
      fetch(`http://localhost:9000/api/v1/users/${id}`),
      fetch(`http://localhost:9000/api/v1/users/${id}/interests`),
      fetch(`http://localhost:9000/api/v1/users/${id}/favorites`)
    ])
    .then(([results1, results2, results3]) => {
      if (!results1.ok || !results2.ok || !results3.ok) {
        throw Error(results1.statusText);
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

  removeFavoite(event, i) {
    event.preventDefault(event);
    const {id} = this.props.match.params;
    console.log(this.state.favoritesList[i]);
    
    fetch(`http://localhost:9000/api/v1/users/${id}/favorites/${this.state.favoritesList[i].selectedUserId}`, {
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

    return (

        <div>
        <div><Header/></div>
          <hr/>
          <hr/>
          <hr/>
          <hr/>
          <div className="text-center bg-white">      
            {
              this.state.user.map((e, i) => {
                return <div className="container" key={e.userId}>
                          <img src={e.photo}></img>
                          <p>{e.firstName} {e.lastName}</p>
                          <p>{e.jobType}</p>
                          <p>{e.location}</p>
                          <p>{e.intro}</p>
                          <p>{e.meeting ? 'in person' : 'online'}</p>
                          
                          {
                          (e.role === 0) ? <p>{'mentor'}</p>
                          : (e.role === 1) ? <p>{'mentee'}</p>  
                          : (e.role === 2) ? <p>{'mentor' + 'mentee'}</p>
                          : <p></p>
                          }

                          <p>{e.years} year</p>
                          <p>{e.industry}</p>
                          {this.state.interestTag.map( e => {
                            return <p key={e.interestId}>{e.interestTag}</p>


                          })
                        
                        
                        }                       
                      </div>
              })
            }
          </div> 
        {/*if {id}(can I use this in render??) === current logined id (how can I do this?), show Favorites */}  
        <div><Favorites favoritesList={this.state.favoritesList} removeFavoite={(e, i) => this.removeFavoite(e, i)}/></div>
      
        <div><Footer/></div>
        </div>
    );
  }
}

export default Profile;