import React, { useRef } from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../src/firebase";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../../userSlice";

const Signin = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(
          setUserLogin({
            name: user.displayName || emailRef.current.value.split("@")[0],
            email: user.email,
            photo: user.photoURL || null,
          })
        );
        navigate("/home"); // redirect after signup
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <div className="signupScreen__overlay"></div>
      <form onSubmit={register}>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder="Email address" type="email" required />
        <input ref={passwordRef} placeholder="Password" type="password" required />
        <button type="submit">Sign Up</button>

        <h4>
          <span className="signupScreen__gray">Already have an account? </span>
          <Link to="/signin" className="signupScreen__link">
            Sign in now.
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default Signin;
