import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import Profile from "./components/profile";
import Login from "./components/login";
import Signup from "./components/signup";
// natalie added import below to calc
import CalcForm from "./components/calculatorForm.js";

import "./App.css";
import "./components/profile.css";
import "./components/login.css";
//natalie added below
import "./components/calculatorForm.css";
import "./components/calculatorForm.js";


const App = () => {
  const [user, setUser] = useState();
  return (
    <Router>
      <div className="page">
        <div className="App">
          {user && <Redirect to="/calculator" />}
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/signup">
              <Signup setUser={setUser} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router >
  );
};

//Natalie changed below code
const Calculator = () => {
  return (
    <div className="calcContainer">
      <nav className="calcNavBar">
        <div className="calcLogo"> CORATECH </div>
        <button className="profileBtn">
          <Link id="link" to="/profile">
            My Profile
          </Link>
        </button>
        <button className="logoutBtn">
          <Link id="link" to="/">
            {/* Have a look!*/}
            Log out
          </Link>
        </button>
      </nav>
      <header className="calcHeader">
        <h2>Carbon Footprint Calculator</h2>
      </header>
      <div>
        <CalcForm />
      </div>
      <footer className="calcFooter">
        Click on the 'My Profile' page to see how you can use your credits at
        your next gaming event.
      </footer>
    </div>
  );
};


export default App;
