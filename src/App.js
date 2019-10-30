import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import './Styles/App.css';
import { Header } from './Components/Layout/Header';
import { About } from './Components/Pages/About';
import { Home } from './Components/Pages/Home';

export class App extends Component {
  render() {
    return (
      <Router>
        <Header className='header'/>
        <Route exact path="/" render={() => (
          <React.Fragment>
            <Home />
          </React.Fragment>
        )} />
        <Route exact path="/about" render={() => (
          <About />
        )} />
      </Router>
    );
  }
}