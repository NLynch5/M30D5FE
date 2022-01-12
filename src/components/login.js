import { Link } from "react-router-dom";
import "../components/images/resizedController.png";

const Login = () => {
  return (
    <div className="overall">
      <div className="bg-img"></div>
      <div className="container">
        <div className="inputs">
          <label className="l-label">EMAIL</label>
          <input
            className="l-input"
            type="email"
            placeholder="example@email.com"
          />
          <label className="l-label">PASSWORD</label>
          <input
            className="l-input"
            type="password"
            placeholder="Min 8 charaters long"
          />
          <button className="l-button" type="submit">
            LOGIN
          </button>
          <button className="l-button" type="submit">
            <Link id="link" to="/signup">
              SIGNUP
            </Link>
          </button>
        </div>
      </div>
      <div className="logo"></div>
      <div className="brand-title">Cora?</div>
    </div>
  );
};

export default Login;
