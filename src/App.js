import './App.css';

import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  
  apiKey=process.env.REACT_APP_NEWS_API
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
      
      return (
        <div>
        <Router>
        <NavBar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
        <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="general" pageSize={12} country="in" category="General"/></Route>
        <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="entertainment" pageSize={12} country="in" category="Entertainment"/></Route>
        {/* <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="general" pageSize={12} country="in" category="general"/></Route> */}
        <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="health" pageSize={12} country="in" category="Health"/></Route>
        <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="science" pageSize={12} country="in" category="Science"/></Route>
        <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="sports" pageSize={12} country="in" category="Sports"/></Route>
        <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="technology" pageSize={12} country="in" category="Technology"/></Route>
        <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} key ="general" pageSize={12} country="in" category="Business"/></Route>
        </Switch>
        </Router>
      
      </div>
    )
  }
}


