import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import Nav from './Nav/Nav'
import Part1 from "./Part1/Part1";
import Part2 from "./Part2/Part2";
import Part3 from "./Part3/Part3";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import About from './About'

function App() {
  const [data, setData] = useState({ data: [] });
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/blogs");
      setData(result.data)
    }
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <Nav />
        <Switch>
          <Route path="/part1">
            <Part1 data={data} />
          </Route>
          <Route path="/part2">
            <Part2 data={data} />
          </Route>
          <Route path="/part3">
            <Part3 data={data} />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path="/">
             <Home data={data}/>
          </Route>
        </Switch>
      <Footer />
      
    </div>
  );
}

export default App;
