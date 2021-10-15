import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from "./About";
import Contact from "./Contact/Contact";
import Resources from "./Resources/Resources";
import WomenContainer from "./WomenContainer";
import WomenDetail from "./WomenDetail/WomenDetail";
function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <WomenContainer />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/females/:id">
          <WomenDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
