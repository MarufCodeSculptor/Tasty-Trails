import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCartData = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const laodData = async () => {
    const { data } = await axiosSecure.get(`/carts?email=${user.email}`);
    return data;
  };
  const {
    data: cart = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryFn: () => laodData(),
    queryKey: ["carts", user?.email],
  });

  return [cart, refetch, isLoading, error];
};

export default useCartData;
