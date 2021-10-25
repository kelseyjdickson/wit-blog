import "./App.css";
import { Route, Switch } from "react-router-dom";

//components
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import About from "./About/About";
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
        <Route exact path="/">
          <WomenContainer />
        </Route>
        <Route path="/:id">
          <WomenDetail />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
