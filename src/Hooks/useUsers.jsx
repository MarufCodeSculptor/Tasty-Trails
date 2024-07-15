import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUsers = () => {
  const axiosSecure = useAxiosSecure();
  const token = JSON.parse(localStorage.getItem("token")).token;
  console.log(token, "token from users");
  const getUser = async () => {
    const { data } = await axiosSecure.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
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
