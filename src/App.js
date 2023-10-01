import React, { Component } from 'react'
import Home from './Components/Home'
import Header from './Components/Header'
import Weather from './Components/Weather'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          {/* <Route exact  path="/" element={<Header />} /> */}
          <Route exact path="" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/weather" element={<Weather />} />
        </Routes>
      </Router>
    );
  }
}

export default App
