import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) return <p> loading... </p>;

  if (!user) <Navigate to={"/login"}> </Navigate>;

  if (user) return children;
};

export default PrivateRoute;
