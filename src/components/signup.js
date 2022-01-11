import "./signup.css";

const Signup = () => {
  return <div className="s-container">
    <div className="s-inputs">
      <label>USERNAME :</label>
      <input className="s-input" type="UserName" placeholder="Username12" />
      <label>EMAIL :</label>
      <input className="s-input" type="email" placeholder="example@email.com" />
      <label>PASSWORD :</label>
      <input className="s-input" type="password" placeholder="Min 8 charaters long" />

      <button className="s-button" type="submit">Signup</button>
    </div>
  </div>
};

export default Signup;
