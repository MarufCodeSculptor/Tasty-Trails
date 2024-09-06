import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useGetMenuData from "../../Hooks/useGetMenuData";
import CatagoriesContainer from "./CatagoriesContainer";
import { useParams } from "react-router-dom";

const TabsCatagories = () => {
  const { category } = useParams();
  const categories = [
    "dessert",
    "salad",
    "pizza",
    "soup",
    "popular",
    "drinks",
    "offered",
  ];
  let initialIndex = categories.indexOf(category);

  if (initialIndex === -1) initialIndex = 0;
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const { menus: allMenus, isLoading, error } = useGetMenuData();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <h2>data not found</h2>;

  const dessertMenus = allMenus.filter((item) => item.category === "dessert");
  const saladMenus = allMenus.filter((item) => item.category === "salad");
  const pizzaMenus = allMenus.filter((item) => item.category === "pizza");
  const soupMenus = allMenus.filter((item) => item.category === "soup");
  const popularMenus = allMenus.filter((item) => item.category === "popular");
  const drinksMenus = allMenus.filter((item) => item.category === "drinks");
  const offeredMenus = allMenus.filter((item) => item.category === "offered");
  return (
    <div className="my-20">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={"flex  items-center justify-center"}>
          <Tab> Desert </Tab>
          <Tab> Salads</Tab>
          <Tab> Pizza</Tab>
          <Tab> Soups</Tab>
          <Tab> Popular</Tab>
          <Tab> Drinks</Tab>
          <Tab>
            {" "}
            <span className="capitalize">offered</span>
          </Tab>
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

        <TabPanel>
          <CatagoriesContainer catagoriesData={popularMenus} />
        </TabPanel>
        <TabPanel>
          <CatagoriesContainer catagoriesData={drinksMenus} />
        </TabPanel>
        <TabPanel>
          <CatagoriesContainer catagoriesData={offeredMenus} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsCatagories;
