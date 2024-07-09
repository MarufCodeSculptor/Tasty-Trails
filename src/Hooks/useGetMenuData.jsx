import { useEffect, useState } from 'react';

const useGetMenuData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataJson = await fetch('/menu.json');
        const data = await dataJson.json();
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
