// import React, { useState } from "react";
// import SignupScreen from "../signuppage/signup";
// import "./login.css";
// import netflixlogo from '../../assets/netflixlogo.png'


// const Login = () => {
//   const [signIn, setSignIn] = useState(false);

  

//   return (
//     <div className="loginScreen">
//       <div className="loginScreen__background">

//         <div className="loginScreen__gradient" />
//       </div>

//       <div className="loginScreen__body">
//         {signIn ? (
//           <SignupScreen />
//         ) : (
//           <>
//             <h1>Unlimited films, TV programmes and more.</h1>
//             <h2>Watch anywhere. Cancel at any time.</h2>
//             <h3>
//               Ready to watch? Enter your email to create or restart your
//               membership.
//             </h3>

//             <div className="loginScreen__input">
//               <form>
//                 <input type="email" placeholder="Email Address" />
//                 <button
//                   onClick={() => setSignIn(true)}
//                   className="loginScreen__getStarted"
//                 >
//                   GET STARTED
//                 </button>
//               </form>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;


// Login.jsx
import React, { useState } from "react";
import "./login.css";
import netflixLogo from "../../assets/netflixlogo.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../../userSlice";
import { handleAuth } from "../../../auth"; // import your handleAuth function

const Login = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={netflixLogo} alt="Netflix Logo" />

        <div className="loginScreen__topRight">
          <select className="loginScreen__language">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
          <Link className="loginScreen__button" to="/signin"  style={{textDecoration:"none"}}>Sign In</Link>
        </div>
      </div>

      <div className="loginScreen__gradient"></div>

      <div className="loginScreen__body">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

        <div className="loginScreen__input">
          <form>
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Link className="loginScreen__getStarted" to="/signin">
              Get Started &gt;
            </Link>
          </form>
        </div>
  
      </div>
    </div>
  );
};

export default Login;
