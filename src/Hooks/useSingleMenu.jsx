import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSingleMenu = (id) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: item = {},
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["singleMenu"],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get(`/menu/${id}`);
        return data;
      } catch (error) {
        console.log(error, "the error message");
      }
    },
  });

  return { item, isLoading, error, refetch };
};

export default useSingleMenu;
