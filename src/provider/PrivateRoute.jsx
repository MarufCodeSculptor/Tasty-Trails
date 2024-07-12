import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) return <p> loading... </p>;

  if (!user)
    return <Navigate to={"/login"} state={{ from: location.pathname }}></Navigate>;

  if (user) return children;
};

export default PrivateRoute;
