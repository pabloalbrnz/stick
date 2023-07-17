import {
  GoogleAuthProvider,
  User,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../services/firebase";

// import { useNavigate } from "react-router-dom";

export function handleUser() {
  const [user, setUser] = useState<User>({} as User);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  // const navigate = useNavigate();

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // navigate("/stick/home");
        setUser(result.user);
        setIsLogged(true);
      })
      .catch((error) => console.error(error));
  }

  function handleSignOut() {
    signOut(auth).then(() => {
      setUser({} as User);
      setIsLogged(false);
    });
  }

  return {
    states: { user, isLogged },
    actions: { setUser, setIsLogged, handleGoogleSignIn, handleSignOut },
  };
}
