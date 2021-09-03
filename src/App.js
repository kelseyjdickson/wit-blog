import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
//components
import Nav from './Nav/Nav'
import Contact from './Contact/Contact'
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
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
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
