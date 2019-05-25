import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Home from './components/Home';
import NavBar from './components/NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf: null,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err))
  }

  // Leslee: I moved addSmurf to App because I didn't have time to re-think any configuration different from what we did on Thursday with Friends and Trinkets.
  addSmurf = (event, individual) => {
    event.preventDefault();
    axios 
      .post("http://localhost:3333/smurfs", individual)
      .then(res => this.setState({ activeSmurf: res.data }))
      .catch(err => console.log(err))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <div className="header-bar">
          <Route exact path="/" component={Home} />
          <NavBar />
        </div>
        <Route path="/smurfs" render={props => (
          <Smurfs {...props} smurfs={this.state.smurfs} />
        )} />
        <Route path="/smurf-form" render={props => (
          <SmurfForm {...props} addSmurf={this.addSmurf} smurfs={this.state.smurfs}  />
        )} />
      </div>
    );
  }
}

export default App;
