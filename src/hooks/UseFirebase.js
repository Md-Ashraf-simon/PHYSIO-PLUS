import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";


import initializeAuthentication from "../Firebase/Firebse.init";

initializeAuthentication();

const useFirebase = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const singInUsingGoogle = () => {
               
    return signInWithPopup(auth, googleProvider)
     
      .finally(() => {
        setIsLoading(false);
        
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const registerNewUser = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);

        // ...
      })
      .finally(() => {
        setIsLoading(false);
        setUserName(name);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
        // ..
      });
  };
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  const setUserName = (name) => {
    
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        setUserName(name);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  return {
    singInUsingGoogle,
    registerNewUser,
    processLogin,
    auth,
    user,
    setUser,
    logOut,
    updateProfile,
    setUserName,
    errorMsg,
    isLoading,
  };
};
export default useFirebase;
