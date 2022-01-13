import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import React, { useState } from "react";


//Natalie added useState
//import React, { useState } from "react";

import Profile from "./components/profile";
import Login from "./components/login";
import Signup from "./components/signup";
// natalie added import below to calc
import CalcForm from "./components/calculatorForm.js";
// import CreditTotal from "./components/creditTotal";

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
        Logo <button className="profileBtn"> My Profile </button>
        <button className="logoutBtn"> Log Out</button>
      </nav>
      <header className="calcHeader">
        <h2>Carbon Footprint Calculator</h2>
      </header>
      <div className="calcForm">
        <CalcForm />
      </div>
      <label>
        Total Credits
        <button className="calcTotal">{/* <CreditTotal /> */}</button>
      </label>
      <footer className="calcFooter">
        Please go to the 'Your Profile' page to see how you can use your credits
        at your next gaming event.
      </footer>
    </div>
  );
};

// const Profile = () => {
//   return <h2>Profile</h2>;
// };

export default App;
