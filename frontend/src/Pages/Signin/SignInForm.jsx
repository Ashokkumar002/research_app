import React from 'react';
import './SignInForm.css';

const SignInForm = () => {
  return (
    <div className="signin-container">
      <div className="background"></div>
      <div className="form-container">
        <h1 className="form-title">Sign in</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="********"
              required
            />
          </div>
          <div className="form-options">
            <div className="checkbox-group">
              <input type="checkbox" id="rememberMe" name="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="submit-button">
            Proceed
          </button>
        </form>
      </div>
      <button className="signup-button">Sign Up</button>
    </div>
  );
};

export default SignInForm;
