import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const token = JSON.parse(localStorage.getItem("token"))?.token;

  const getUser = async () => {
    const { data } = await axiosSecure.get("/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    return data;
  };

  const {
    data: users = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUser(),
  });
  return [users, refetch, isLoading, error];
};

export default useUsers;
