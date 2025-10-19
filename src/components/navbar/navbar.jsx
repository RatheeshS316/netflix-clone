

import React, { useState, useEffect } from "react";
import "./navbar.css";
import Logonetflix from "../../assets/netflixlogo.png";
import profileLogo from "../../assets/profilelogo.png";
import searchIcon from "../../assets/search-icon.svg";
import { Link } from "react-router-dom";
import bell_icon from "../../assets/bell_icon.svg";
import downarrow from "../../assets/caret_icon.svg";


const Navbar = () => {
  const [banner, setBanner] = useState(false);

  const transitionPage = () => {
    if (window.scrollY > 100) {
      setBanner(true);
    } else {
      setBanner(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionPage);
    return () => window.removeEventListener("scroll", transitionPage);
  }, []);

  return (
    <nav className={`navbar ${banner ? "nav_black" : ""}`}>
      <div className="navcontainer">
        {/* Netflix logo */}
        <Link to="/home">
          <img src={Logonetflix} className="logonetflix" alt="Netflix Logo" />
        </Link>

        {/* Navigation links */}
        <div className="navlinks">
          <a>Home</a>
          <a>TV Shows</a>
          <a>Movies</a>
          <a>New & Popular</a>
          <a>My List</a>
          <a >About</a>
        </div>

        {/* Search, Notification, and Profile */}
        <div className="nav_right">
          <span className="line">
            <img src={searchIcon} alt="Search" className="nav_icon" />
            <a>Children</a>
            <img src={bell_icon} alt="bell" />
         
          </span>

         
          {/* 👤 Profile */}
          <Link to="/profile">
            <img src={profileLogo} className="profilelogo" alt="Profile" />
            <img src={downarrow} alt="downarrow"  className="downarrow"/>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
