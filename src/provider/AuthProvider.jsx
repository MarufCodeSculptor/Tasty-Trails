import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const providerOfGoogle = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, providerOfGoogle);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const contexData = {
    owner: "MuhammedMarufraju@gmail.com",
    user,
    setUser,
    signUp,
    login,
    googleSignIn,
    loading
  };

  return (
    <AuthContext.Provider value={contexData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
