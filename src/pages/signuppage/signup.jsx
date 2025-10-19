// Signup.jsx
import React, { useRef } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../src/firebase";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../../userSlice";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUserLogin({
          name: user.displayName || emailRef.current.value.split("@")[0],
          email: user.email,
          photo: user.photoURL || null,
        }));
        navigate("/home"); // redirect to home
      })
      .catch((error) => alert(error.message));
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUserLogin({
          name: user.displayName || emailRef.current.value.split("@")[0],
          email: user.email,
          photo: user.photoURL || null,
        }));
        navigate("/home"); // redirect to home
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signupScreen">
      <div className="signupScreen__overlay"></div>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email address" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>Sign In</button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>
          <Link className="signupScreen__link" to="/signup">
            Sign up now.
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default Signup;
