import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import Swal from "sweetalert2";

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
  const logOut = async () => {
    try {
      await signOut(auth);
      Swal.fire({
        title: "log out successfully",
        icon: "success",
      });
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: err.message,
        icon: "error",
      });
    }
  };
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const contexData = {
    owner: "MuhammedMarufraju@gmail.com",
    user,
    setLoading,
    setUser,
    signUp,
    login,
    googleSignIn,
    loading,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={contexData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
