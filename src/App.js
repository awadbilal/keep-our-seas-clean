import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home/Index.js";
import Blog from "./containers/Blog/Index.js";
import ContactUs from "./containers/ContactUs";
import Footer from "./components/Footer";
import Donate from "./containers/Donate";
import About from "./containers/AboutUs";

function App() {

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact_us" component={ContactUs} />
        <Route path="/donate" component={Donate} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
