import Facebook_icon from "../../assets/facebook_icon.png";
import Instagram_icon from "../../assets/instagram_icon.png";
import Twitter_icon from "../../assets/twitter_icon.png";
import Youtube_icon from "../../assets/youtube_icon.png";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-icons">
            <img src={Facebook_icon} alt="Facebook" />
            <img src={Instagram_icon} alt="Instagram" />
            <img src={Twitter_icon} alt="Twitter" />
            <img src={Youtube_icon} alt="YouTube" />
        </div>
        <div className="footer-links">
            <a href="#">Audio and Subtitles</a>
            <a href="#">Audio Description</a>
            <a href="#">Help Center</a>
            <a href="#">Gift Cards</a>
            <a href="#">Media Center</a>
            <a href="#">Investor Relations</a>
            <a href="#">Jobs</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy</a>
            <a href="#">Legal Notices</a>   
            <a href="#">Corporate Information</a>
            <a href="#">Contact Us</a>
            <a href="#">Speed Test</a>
            <a href="#">Netflix Originals</a>
        </div>
        <div className="footer-copy">
            <p>© 1997-2024 Netflix, Inc.</p>
        </div>
    </div>
  );
};
export default Footer;
