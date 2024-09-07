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
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/users/role/${user?.email}`);
        return data;
      } catch (err) {
        console.log(err, "from admin cheeck request");
        return err?.message;
      }
    },
  });
  if (loading) return;

  return [isPending, isAdmin, error];
};

export default useAdmin;
