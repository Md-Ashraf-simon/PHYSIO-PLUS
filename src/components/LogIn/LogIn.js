import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

import useAuth from "../../hooks/useAuth";
import './LogIn.css';

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const {
    singInUsingGoogle,
    processLogin,
    registerNewUser,
    setUserName,
    errorMsg,
    setUser
  } = useAuth();

  //handle google login
  const location = useLocation();
  const history = useHistory();
  const handleGoogleLogin = () => {
    singInUsingGoogle()
     .then((result) => {
       history.push(location.state?.from || '/' )
        setUser(result.user);
        
      })
  }

  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (password.length < 6) {
      setError("Password Must be at least 6 characters long.");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Password Must contain 2 upper case");
      return;
    }

    if (isLogin) {
      processLogin(email, password);
      history.push("/");
    } else {
      registerNewUser(email, password, name);
      setUserName(name);
      history.push("/");
    }
  };

  return (
    <div className="mx-auto mb-5 w-50">
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary text-center login__title mt-5 mb-5">
          Please {isLogin ? "Login" : "Register"}
        </h3>
        {!isLogin && (
          <div className="row mb-3">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                onChange={handleNameChange}
                className="form-control"
                id="inputName"
                placeholder="Your Name"
              />
            </div>
          </div>
        )}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              onBlur={handleEmailChange}
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              onBlur={handlePasswordChange}
              className="form-control"
              id="inputPassword3"
              placeholder="Your Password"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input
                onChange={toggleLogin}
                className="form-check-input"
                type="checkbox"
                id="gridCheck1"
              />
              <label className="form-check-label" htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <div className="row mb-3 text-danger">{errorMsg}</div>
        <button type="submit" className="btn btn-warning me-2 ">
          {isLogin ? "Login" : "Register"}
        </button>
        <button
          className="btn btn-warning mb-5 mt-5"
          onClick={handleGoogleLogin}
        >
          Google Sign In
        </button>
      </form>
    </div>
  );
}
export default Login;
