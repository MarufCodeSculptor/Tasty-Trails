import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useGetMenuData = () => {
  const axiosPublic = useAxiosPublic();
const {data:menus}=useQuery({
    queryFn: async () =>{

      try{
        const {data}=await axiosPublic.get('/menus');
      console.log('the fucken data',data);
      return  data; 
      }
      catch(error){
        console.error('Error fetching data:', error);
      }
    }
  })

 
  return menus;
};

export default useGetMenuData;