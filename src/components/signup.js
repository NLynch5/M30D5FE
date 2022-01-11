import "./signup.css";

const Signup = () => {
  return <div className="s-container">
    <div className="s-inputs">
      <label>USERNAME :</label>
      <input type="UserName" placeholder="Username12" />
      <label>EMAIL :</label>
      <input type="email" placeholder="example@email.com" />
      <label>PASSWORD :</label>
      <input type="password" placeholder="Min 8 charaters long" />

      <button className="signup" type="submit">Signup</button>
    </div>
  </div>
};

export default Signup;
