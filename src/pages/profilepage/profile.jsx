

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import profileLogo from "../../assets/profilelogo.png";
import "./profile.css";
import { selectUserEmail } from "../../../userSlice";
import { auth } from "../../../src/firebase";
import { setSignOut } from "../../../userSlice";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);

  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(setSignOut());
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="profileScreen">
      <div className="profileScreen__overlay"></div>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={profileLogo} alt="Profile" />
          <div className="profileScreen__details">
            <h2>{userEmail || "User"}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <p className="profileScreen__planText">Premium - Ultra HD</p>
              <button onClick={logout} className="profileScreen__signOut">
               <Link to="/" style={{textDecoration:"none" , color:"white"}}>Sign Out</Link>
              </button>
              <Link to="/home" className="profileScreen__homeBtn">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
