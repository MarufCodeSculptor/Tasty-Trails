import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [admin, setAdmin] = useState(false);
  const token = JSON.parse(localStorage.getItem("token"))?.token;

  const checkAdmin = async () => {
    if (!loading) {
      try {
        const { data } = await axiosSecure.get(`/users/role/${user?.email}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        if (data.role === "admin") {
          setAdmin(true);
        } else {
          setAdmin(false);
        }
      } catch (err) {
        console.log(`Error checking admin status: ${err.message}`);
      }
    }
  };

  useEffect(() => {
    checkAdmin();
  }, [loading]);

  return [admin];
};

export default useAdmin;
