const Login = () => {
  return (
    <div class="container">
      <div class="brand-logo"></div>
      <div class="brand-title">Cora?</div>
      <div class="inputs">
        <label>EMAIL</label>
        <input type="email" placeholder="example@email.com" />
        <label>PASSWORD</label>
        <input type="password" placeholder="Min 6 charaters long" />
        <button type="submit">LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
