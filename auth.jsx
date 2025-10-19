import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "./src/firebase";
import { setUserLogin, setSignOut } from "./userSlice";

export const handleAuth = (userName, dispatch) => {
  if (!userName) {
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          setUserLogin({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  } else if (userName) {
    signOut(auth)
      .then(() => {
        dispatch(setSignOut());
      })
      .catch((err) => console.log(err.message));
  }
};

