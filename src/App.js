import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useAuth } from "./Context/AuthContext.js";
import NavBar from "./components/NavBar";
import Home from "./containers/Home/Index.js";
import Blog from "./containers/Blog/Index.js";
import ContactUs from "./containers/ContactUs";
import Footer from "./components/Footer";
import Login from "./containers/Login";
import Donate from "./containers/Donate";
import About from "./containers/AboutUs";
import EditProfile from "./components/EditProfile";

function App() {
  const { currentUser } = useAuth();

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact_us" component={ContactUs} />
        <Route path="/donate" component={Donate} />
        <Route path="/edit-profile" component={EditProfile} />
        {!currentUser && <Route path="/login" component={Login} />}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
