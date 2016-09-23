import React, { Component } from 'react';
import logo from './logo.svg';
import myData from './resume.json';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {jsonObj: myData};
  }

  render() {

     if (this.state.jsonObj) {
        const profileData = this.state.jsonObj.basics;
        const aboutData = profileData.summary;
        const workData = this.state.jsonObj.work;
        const skillsData = this.state.jsonObj.skills;
        const educationData = this.state.jsonObj.education;
        console.log(aboutData);
      
      return (

          <div className="container">
          <div className="row">
          <div className="col-md-6 col-sm-12">
              <h1>{profileData.name}</h1>
              <h2>{profileData.location.city}</h2>
          </div>
         </div>
         </div>
    
      );
    }
  }
}

export default App;


