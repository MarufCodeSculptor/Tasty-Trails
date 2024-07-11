import { useEffect, useState } from 'react';
import useAxiosSecure from './useAxiosSecure';


const  useGetMenuData = () => {
  const [data, setData] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axiosSecure.get('/menus');
        setData(data);
      } catch (err) {
        console.log(err?.messate);
      }
    };
    getData();
  }, []);

  return data;
};

export default useGetMenuData;
