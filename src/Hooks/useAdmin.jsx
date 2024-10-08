import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const {
    data: isAdmin,
    isPending,
    error,
  } = useQuery({
    enabled: !loading,
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      try {
        if(!user) return
        const { data } = await axiosSecure.get(`/users/role/${user?.email}`);
        return data;
      } catch (err) {
        console.log(err, "from admin cheeck request");
        return err?.message;
      }
    },
  });
 
  return [isPending, isAdmin, error];
};

export default useAdmin;
