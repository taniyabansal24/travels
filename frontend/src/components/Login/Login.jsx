import React, { useState } from "react";
import "./Login.css";
import "boxicons/css/boxicons.min.css";

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const [showSignIn, setShowSignIn] = useState(true);

  const toggleSignIn = () => {
    setShowSignIn((prevShowSignIn) => !prevShowSignIn);
  };

  return (
    <>
      <div className="login-component" id="web-screen">
        <div className={`container ${isActive ? "active" : ""}`} id="container">
          <div className="form-container sign-up">
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i class="bx bxl-google-plus"></i>Sign up with Google
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in">
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i class="bx bxl-google-plus"></i>Sign in with Google
                </a>
              </div>
              <span>or use your email password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forget Your Password?</a>
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                  className="hidden"
                  id="login"
                  onClick={handleLoginClick}
                >
                  Sign In
                </button>
              </div>
              <div className="toggle-panel toggle-right">
                <h1>Hello, Friend!</h1>
                <p>
                  Register with your personal details to use all of site
                  features
                </p>
                <button
                  className="hidden"
                  id="register"
                  onClick={handleRegisterClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="login-component" id="mobile-screen">
      <div className="container">
        <div className={`form-container ${showSignIn ? "sign-in" : "sign-up"}`}>
          {showSignIn ? (
            <form>
              <h1>Sign In</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="bx bxl-google-plus"></i>Sign in with Google
                </a>
              </div>
              <span>or use your email and password</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot Your Password?</a>
              <button type="submit">Sign In</button>
            </form>
          ) : (
            <form>
              <h1>Create Account</h1>
              <div className="social-icons">
                <a href="#" className="icon">
                  <i className="bx bxl-google-plus"></i>Sign up with Google
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </form>
          )}
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all site features</p>
              <button
                className="hidden"
                id="login"
                onClick={() => setShowSignIn(true)}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all site features
              </p>
              <button
                className="hidden"
                id="register"
                onClick={() => setShowSignIn(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="switch-form">
          {showSignIn ? (
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={toggleSignIn}>
                Sign Up
              </a>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <a href="#" onClick={toggleSignIn}>
                Sign In
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
