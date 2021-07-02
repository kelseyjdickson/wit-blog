import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Switch } from "react-router-dom";

//componenets
import Part1 from "./Part1";
import Part2 from "./Part2"
//assets
import part1 from "./images/womenintech.jpeg";
import part2 from "./images/yellowwit.jpeg";
import part3 from "./images/part3.jpeg";

const blogData = [
  {
    id: 0,
    link: "https://kelseyjdickson.medium.com/5-women-in-tech-to-watch-in-2021-1df735a9ecbd",
    image: part1,
    name: "Women in Tech to Watch Part I",
    component: <Part1/>

  },
  {
    id: 1,
    link: "https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-9cb2d69543c7",
    image: part2,
    name: "Women in Tech to Watch Part II",

  },
  {
    id: 2,
    link: "https://kelseyjdickson.medium.com/women-to-watch-in-tech-in-2021-cdb437200fe1",
    image: part3,
    name: "Women in Tech to Watch Part III",

  },

]

function App() {
  let image = blogData.map((bl) => {
  return(
      
    <div key={bl.id} style={{display:'flex'}}>
      <a href={bl.link} style={{display:'flex'}}>
      <img src={bl.image} style={{width: '300px', display:'flex',}}/>
     </a>
      
      <h1>{bl.name}</h1>
      
  </div>
  )})
  
  return (
    <div className="App">
      <div>
     {image}
    
      </div>
    </div>
  );
}

export default App;
