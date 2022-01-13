import "./signup.css";
import SignUpFetch from "../utils/index";
import React, { useState } from "react";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    await SignUpFetch(username, email, password, setUser);
  };

  return (
    <div className="s-overall">
      <div className="background"></div>
      <div className="s-container">
        <form className="s-inputs" onSubmit={submitHandler}>
          <label className="s-label">USERNAME :</label>
          <input
            className="s-input"
            type="UserName"
            placeholder="Username12"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="s-label">EMAIL :</label>
          <input
            className="s-input"
            type="email"
            placeholder="example@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="s-label">PASSWORD :</label>
          <input
            className="s-input"
            type="password"
            placeholder="Min 8 charaters long"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="s-button" type="submit">
            Signup
          </button>
        </form>
      </div>
      <section className="sidebar"></section>
    </div>
  );
};

export default Signup;
