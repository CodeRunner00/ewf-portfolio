import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header.js';
import Home from './Home';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
      <Header/>
      <Route exact path="/" component={Home} />
          <p>
            Welcome to my portfolio site
          </p>


      </div>
    </Router>
    );
  }
}

export default App;
