import { useEffect, useState } from "react";

import useAxiosPublic from "./useAxiosPublic";

const useGetMenuData = () => {
  const [data, setData] = useState([]);

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosPublic.get("/menus");
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return data;
};

export default useGetMenuData;
