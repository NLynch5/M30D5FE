import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

import Profile from "./components/profile";
import Login from "./components/login";
import Signup from "./components/signup";

import "./App.css";
import "./components/profile.css";
import "./components/login.css";

const App = () => {
  return (
    <Router>
      <div className="page">
        <div className="App">
          {/* <nav>
            <ul>
              <li className="endpoint">
                <Link to="/"></Link>
              </li>
              <li className="endpoint">
                <Link id="link" to="/profile"></Link>
              </li>
              <li className="endpoint">
                <Link to="/calculator"> </Link>
              </li>
            </ul>
          </nav> */}
          <Switch>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/signup">
              <Signup />
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
    </Router>
  );
};

const Calculator = () => {
  return <h2>Calculator</h2>;
};

// const Profile = () => {
//   return <h2>Profile</h2>;
// };

export default App;
