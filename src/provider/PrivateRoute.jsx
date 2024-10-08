import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <p> loading... </p>;

  if (!user)
    return (
      <Navigate to={"/login"} state={{ from: location.pathname }}></Navigate>
    );

  if (user) return children;
};

export default PrivateRoute;
