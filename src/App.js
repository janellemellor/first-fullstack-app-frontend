import React, { Component } from 'react'
import './App.css';
import {
  Route, 
  Switch, 
  Link, 
  BrowserRouter as Router, 
} from 'react-router-dom';
import Home from './Home.js';
import Detail from './Detail.js';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link className="page-links" to="/">Return Home</Link>
          <Switch>
            <Route exact path="/:bobaData?" component={Home} />
            <Route exact path="/detail/:bobaId" component={Detail} />
          </Switch>
        </div>  
      </Router>    
        
    )
  }
}



