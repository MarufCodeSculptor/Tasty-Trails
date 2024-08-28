import { Navigate} from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const [isPending, isAdmin, error] = useAdmin();
  

  if (error)
    return <h1 className="text-3xl font-bold text-center">Error: {error}</h1>;

  if (loading || isPending)
    return <h1 className="text-3xl font-bold text-center">Loading...</h1>;

  if (!isAdmin) return <Navigate to={"/dashboard"}> </Navigate>;
  if (isAdmin && user) return children;
};

export default AdminRoute;
