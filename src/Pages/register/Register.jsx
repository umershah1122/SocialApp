import "./Register.css";
const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">LamaSocial</h3>
          <span className="registerDesc">
            Connets with friends and the world around you on Lamasocail.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <input
              type="text"
              placeholder="User Name"
              className="registerInput"
            />
            <input type="text" placeholder="Email" className="registerInput" />
            <input
              type="text"
              placeholder="Passoward"
              className="registerInput"
            />
            <input
              type="text"
              placeholder="Confirm Passoward"
              className="registerInput"
            />
            <button className="registerBtn">Sign Up</button>
            <button className="registerRegisterBtn">
              Register into account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
