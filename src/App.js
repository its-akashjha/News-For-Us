import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  
  render() {
      
      return (
        <div>
        <Router>
        <NavBar />
        <Switch>
        <Route exact path="/"><News key="general" pageSize={12} country="in" category="General"/></Route>
        <Route exact path="/entertainment"><News key="entertainment" pageSize={12} country="in" category="Entertainment"/></Route>
        {/* <Route exact path="/general"><News key="general" pageSize={12} country="in" category="general"/></Route> */}
        <Route exact path="/health"><News key="health" pageSize={12} country="in" category="Health"/></Route>
        <Route exact path="/science"><News key="science" pageSize={12} country="in" category="Science"/></Route>
        <Route exact path="/sports"><News key="sports" pageSize={12} country="in" category="Sports"/></Route>
        <Route exact path="/technology"><News key="technology" pageSize={12} country="in" category="Technology"/></Route>
        <Route exact path="/business"><News key="general" pageSize={12} country="in" category="Business"/></Route>
        </Switch>
        </Router>
      
      </div>
    )
  }
}


