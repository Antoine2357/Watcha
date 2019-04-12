import React, { Component } from 'react';
import './App.css';
import './header.css';
import './components/fiche.css'
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./components/Routing";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Routing/>
        </div>
      </Router>
    );
  }
}
export default App;
