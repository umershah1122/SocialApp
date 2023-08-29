import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">LamaSocial</h3>
          <span className="loginDesc">
            Connets with friends and the world around you on Lamasocail.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input type="text" placeholder="Email" className="loginInput" />
            <input
              type="passoward"
              placeholder="Passoward"
              className="loginInput"
            />
            <button className="loginBtn">Log In</button>
            <span className="loginForgot">Forgot Passoward?</span>
            <button className="loginRegisterBtn">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
