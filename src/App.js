import logo from "./logo.svg";
import "./App.css";
//assets
import part1 from "./images/womenintech.jpeg";
import part2 from "./images/yellowwit.jpeg";
import part3 from "./images/part3.jpeg";

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <div>
        <img
          style={{ width: "600px", height: "417px" }}
          src={part1}
          alt="first blog"
        />
        <img
          style={{ width: "600px", height: "417px" }}
          src={part2}
          alt="second blog"
        />
        <img
          style={{ width: "600px", height: "417px" }}
          src={part3}
          alt="third blog"
        />
      </div>
    </div>
  );
}

export default App;
