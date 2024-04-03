import { Link } from "react-router-dom";
import { createRef } from "react";
import '../styles/auth-forms.css';
import password from '../images/password.png';
import profile from '../images/profile.png';

export default function Login() {
  const emailRef = createRef();
  const passwordRef = createRef();

  return (
    <div className="login-signup-form">
      <div className="form">
        <form onSubmit={() => {}} className="center-form">
        <div className="input-container">
            <img src={profile} alt="Username Icon" className="input-icon" />
            <input ref={emailRef} type="text" placeholder="USERNAME" />
          </div>
          <div className="input-container">
            <img src={password} alt="Password Icon" className="input-icon" />
            <input ref={passwordRef} type="password" placeholder="PASSWORD" />
          </div>
          <div className="button-message-container">
            <div className="signup-link">
                <p className="message">
                Don't have an account?
                </p>
                <p className="register"> <Link className="register" to="/signup">Register</Link></p>
            </div>
            <button className="button">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
