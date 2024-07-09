import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useGetMenuData from '../../Hooks/useGetMenuData';
import CatagoriesContainer from './CatagoriesContainer';
import { useParams } from 'react-router-dom';

const TabsCatagories = () => {
  const { category } = useParams();

  const categories = [
    'dessert',
    'salad',
    'pizza',
    'soup',
    'drinks',
    'popular',
    'offered',
  ];

  let initialIndex = categories.indexOf(category);
  if (initialIndex === -1) initialIndex = 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const allMenus = useGetMenuData();
  const dessertMenus = allMenus.filter(item => item.category === 'dessert');
  const saladMenus = allMenus.filter(item => item.category === 'salad');
  const pizzaMenus = allMenus.filter(item => item.category === 'pizza');
  const soupMenus = allMenus.filter(item => item.category === 'soup');
  return (
    <div className="my-20">
      <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
        <TabList className={'flex  items-center justify-center'}>
          <Tab> Desert </Tab>
          <Tab> Salads</Tab>
          <Tab> Pizza</Tab>
          <Tab> Soups</Tab>
        </TabList>
        <TabPanel>
          <CatagoriesContainer catagoriesData={dessertMenus} />
        </TabPanel>

        <TabPanel>
          <CatagoriesContainer catagoriesData={saladMenus} />
        </TabPanel>

        <TabPanel>
          <CatagoriesContainer catagoriesData={pizzaMenus} />
        </TabPanel>

        <TabPanel>
          <CatagoriesContainer catagoriesData={soupMenus} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsCatagories;
