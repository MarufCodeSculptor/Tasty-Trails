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

import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
const providerOfGoogle = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

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
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userInfo = { email: currentUser?.email };

        try {
          const { data: token } = await axiosPublic.post("/jwt", userInfo);
          localStorage.setItem("token", JSON.stringify(token));
          setLoading(false);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }

        //  store token to the client
      } else {
        setLoading(false);
        //  remove token if current user is not found >  token  prorably stored in the local storeage
      }
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
