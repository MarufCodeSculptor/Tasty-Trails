import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetMenuData = () => {
  const axiosPublic = useAxiosPublic();
  // the data fetching function =>
  const getData = async () => {
    try {
      const { data } = await axiosPublic.get("/menus");
      return data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  // ................................................

  const {
    data: menus,
    isLoading,
    error,
  } = useQuery({
    queryFn: getData,
    queryKey: ["menus"],
  });

  return { menus, isLoading, error };
};

export default useGetMenuData;
