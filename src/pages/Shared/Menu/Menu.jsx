import { useEffect } from 'react';
import SectionHeading from '../../../Components/SectionHeading';
import { useState } from 'react';
import MenuItem from './MenuItem';

const Menu = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const dataJson = await fetch('/menu.json');
        const data = await dataJson.json();
        const popularsData = await data.filter(
          item => item.category === 'popular'
        );
        setData(popularsData);
      } catch (err) {
        console.log(err?.messate);
      }
    };
    getData();
  }, []);



  return (
    <section className="my-10">
      <SectionHeading heading={'From our menu'} subHeading={'check it out'} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
        {data.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Menu;
