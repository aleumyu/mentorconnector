import React, { Component } from 'react';
import './results.css';


class Results extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      users: [],
      checkBox: [
        {name: "role", value: "1", isChecked: false},
        {name: "role", value: "2" , isChecked: false},
        {name: "industry", value: ""},
        {name: "interests", value: "Networking" , isChecked: false},
        {name: "interests", value: "Career Transition" , isChecked: false},
        {name: "interests", value: "Technical Skills" , isChecked: false},
        {name: "interests", value: "Leadership" , isChecked: false},
        {name: "interests", value: "Entrepreneurship" , isChecked: false},
        {name: "interests", value: "Job Search" , isChecked: false},
        {name: "meeting", value: "In Person" , isChecked: false},
        {name: "meeting", value: "Virtually", isChecked: false},
        {name: "location", value: "Location"}
      ]
    };
  }

  componentDidMount() {
    fetch("http://localhost:9000/api/v1/users")
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(json => {
      this.setState ({
        users: json
      });
    })
    .catch(error => {
      console.log(error)
    })
  }  


    updateFilter(event) {
      let checkBox = this.state.checkBox;
      checkBox.forEach(e => {
        if (e.value === event.target.value) {
          e.isChecked = event.target.checked;
        }
      })

      this.setState ({
        checkBox: checkBox
      });
      

      let role = [];
      let roleParam = "";
      let ind = [];
      let industryParam = "";
      let int = [];
      let interestsParam = "";
      let meet = [];
      let meetingParam = ""
      let loc = [];
      let locationParam = "";

    checkBox.forEach( e => {
      if (e.name === "role" && e.isChecked) {
        role.push(`${e.value}`);
        roleParam = role.join(',');    
      } else if (e.name === "industry") {
        ind.push(`${e.value}`);
        industryParam = ind.join(','); 
      } else if (e.name === "interests" && e.isChecked) {
        int.push(`${e.value}`);
        interestsParam = int.join(',');
      } else if (e.name === "meeting" && e.isChecked) {
        meet.push(`${e.value}`);
        meetingParam = meet.join(',');
      } else if (e.name === "location" && e.isChecked) {
        loc.push(`${e.value}`);
        locationParam = loc.join(',');  
      }
    });


    fetch(`http://localhost:9000/api/v1/users?location=?role=${roleParam}&industry=${industryParam}&meeting=${meetingParam}&interestTag=${interestsParam}`)
        .then(results => {
          if (!results.ok) {
            throw Error(results.statusText);
          }
          return results.json();
        })
        .then(json => {
          this.setState ({
            users: json
          });
        })
        .catch(error => {
          console.log(error)
        })
    };

  

  render() {
    return (
    <div className="App">

      <h3>Describe your language partner</h3>
      <p>Not all fields need to be selected</p>
      
      <label>Role</label>
        <li className="form-group"><input className="form-group" type="checkbox" value="1" onChange = {(e) => this.updateFilter(e)}/>Mentor</li> <br />
        <li className="form-group"><input className="form-group" type="checkbox" value="2" onChange = {(e) => this.updateFilter(e)}/>Mentee</li><br />

      <label>Industry</label>
        <select name="industry">
        <option value="Select">Select</option>
        <option value="Advertising">Advertising</option>
        <option value="Back-end development">Back-end development</option>
        <option value="Business development">Business development</option>
        <option value="Civil engineering">Civil engineering</option>
        <option value="Community management">Community management</option>
        <option value="Customer success">Customer success</option>
        <option value="Database administration">Database administration</option>
        <option value="Data science">Data science</option>
        <option value="Design (UX/UI)">Design (UX/UI)</option>
        <option value="Entrepreneurship">Entrepreneurship</option>
        <option value="Finance">Finance</option>
        <option value="Front-end development">Front-end development</option>
        <option value="Full stack development">Full stack development</option>
        <option value="Hardware engineering">Hardware engineering</option>
        <option value="Human computer interaction">Human computer interaction</option>
        <option value="Human resources">Human resources</option>
        <option value="Information technology (general)">Information technology (general)</option>
        <option value="Legal">Legal</option>
        <option value="Marketing">Marketing</option>
        <option value="Mobile app development">Mobile app development</option>
        <option value="Operations">Operations</option>
        <option value="Product management">Product management</option>
        <option value="Program management">Program management</option>
        <option value="Project management">Project management</option>
        <option value="Public relations">Public relations</option>
        <option value="Research">Research</option>
        <option value="Robotics">Robotics</option>
        <option value="Sales">Sales</option>
        <option value="System security">System security</option>
        <option value="Software engineering">Software engineering</option>
        <option value="System administration">System administration</option>
        <option value="Quality assurance">Quality assurance</option>
        <option value="Other">Other</option>
        </select>

      <label>Interests</label>
            <div className="form-group">
              <li className="form-group"><input className="form-group" type="checkbox" value="Networking" onChange = {(e) => this.updateFilter(e)} /> Networking</li> <br />
              <li className="form-group"><input className="form-group" type="checkbox" value="Career Transition" onChange = {(e) => this.updateFilter(e)} /> Career Transition</li> <br />
              <li className="form-group"><input className="form-group" type="checkbox" value="Technical Skills" onChange = {(e) => this.updateFilter(e)} /> Technical Skills</li> <br />
              <li className="form-group"><input className="form-group" type="checkbox" value="Leadership" onChange = {(e) => this.updateFilter(e)} /> Leadership</li> <br />
              <li className="form-group"><input className="form-group" type="checkbox" value="Entrepreneurship" onChange = {(e) => this.updateFilter(e)} /> Entrepreneurship</li> <br />
              <li className="form-group"><input className="form-group" type="checkbox" value="Networking" onChange = {(e) => this.updateFilter(e)} /> Job Search</li>  <br />
            </div>


      <label>Meeting</label>
        <li className="form-group"><input className="form-group" type="checkbox" value="1" onChange = {(e) => this.updateFilter(e)}/>In Person</li><br />
        <li className="form-group"><input className="form-group" type="checkbox" value="2" onChange = {(e) => this.updateFilter(e)}/>Virtually</li>

      <label>Location (city)</label>
        <input name="city" type="text" />


        <div id = "gallery">
          <h3>Your matches</h3>
          <p>Click on the member to see more information</p>
          {this.state.users.map((obj, i) => 
          <div key={i} className = "userResult">
            <div className="row">
              <div className="col1">
                <img src= {obj.photo} alt= "Photo of user" ></img>
              </div>
              <div className="col2">
                {obj.firstName + " " + obj.lastName.charAt(0) + "."} <br /> 
                {obj.industry + " - " + obj.jobType} <br />
                {obj.location}   <br />
              </div>
            </div>              
          </div> 
          )}  
        </div>  
    </div>  
    );
  }
}

export default Results;