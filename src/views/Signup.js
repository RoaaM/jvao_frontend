import { createRef } from "react";
import '../styles/auth-forms.css';
import password from '../images/password.png';
import profile from '../images/profile.png';
import email from '../images/email.png';

export default function Signup() {
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
            <img src={email} alt="Email Icon" className="input-icon" />
            <input ref={emailRef} type="email" placeholder="EMAIL" />
          </div>
          <div className="input-container">
            <img src={password} alt="Password Icon" className="input-icon" />
            <input ref={passwordRef} type="password" placeholder="PASSWORD" />
          </div>
          <div className="register-container">
            <button className="button">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
