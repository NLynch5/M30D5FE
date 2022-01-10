import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="brand-logo"></div>
      <div className="brand-title">Cora?</div>
      <div className="inputs">
        <label>EMAIL</label>
        <input type="email" placeholder="example@email.com" />
        <label>PASSWORD</label>
        <input type="password" placeholder="Min 8 charaters long" />
        <button type="submit">LOGIN</button>
        <button type="submit">
          <Link id="link" to="/signup">
            SIGNUP
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
