import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const adminRoute = ({ children }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  console.log(location);

  if (loading) return <p> loading... </p>;

  if (!user)
    return <Navigate to={"/login"} state={{ from: location.pathname }}></Navigate>;

  if (user) return children;
};

export default adminRoute;
