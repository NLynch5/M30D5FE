import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import Profile from "./components/profile";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li className="endpoint">
              <Link to="/">Home</Link>
            </li>
            <li className="endpoint">
              <Link id="link" to="/profile">
                Profile
              </Link>
            </li>
            <li className="endpoint">
              <Link to="/calculator">Carbon Calculator</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Home</h2>;
};

const Calculator = () => {
  return <h2>Calculator</h2>;
};

// const Profile = () => {
//   return <h2>Profile</h2>;
// };

export default App;
