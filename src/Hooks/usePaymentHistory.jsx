import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // const marufraju =  "marufraju2183@gmail.com"

  const {
    data: paymentHistories,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["paymentHistory"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/payment-history/${user?.email}`);

      return data;
    },
  });

  return { paymentHistories, isLoading, error, refetch };
};

export default usePaymentHistory;
