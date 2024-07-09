import { Helmet } from 'react-helmet';
import Cover from '../../Components/Shared/Cover';
import banner3 from '../../assets/menu/banner3.jpg';
import dessertBg from '../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../assets/menu/pizza-bg.jpg';
import saladBg from '../../assets/menu/salad-bg.jpg';
import soupBg from '../../assets/menu/soup-bg.jpg';
import MenusHeading from './MenusHeading';
import useGetMenuData from '../../Hooks/useGetMenuData';
import Menus from '../../Components/Menus/Menus';

const OurMenu = () => {
  const coverData = {
    heading: 'our menu',
    description: 'woul you like to try a dish',
    opacity: true,
    imageUrl: banner3,
  };

  const allMenus = useGetMenuData();
  const dessertMenus = allMenus.filter(item => item.category === 'dessert');
  const saladMenus = allMenus.filter(item => item.category === 'salad');
  const pizzaMenus = allMenus.filter(item => item.category === 'pizza');
  const soupMenus = allMenus.filter(item => item.category === 'soup');

  const menuCategories = {
    dessert: {
      heading: 'Decadent Desserts',
      description:
        'Indulge in our selection of delightful desserts. From classic favorites to innovative creations, our desserts are the perfect way to end any meal on a sweet note',
      opacity: true,
      imageUrl: dessertBg,
    },
    salad: {
      heading: 'Fresh Salads',
      description:
        'Enjoy our range of crisp and refreshing salads, made with the freshest ingredients. Perfect for a light meal or a side dish, our salads are sure to delight',
      opacity: true,
      imageUrl: saladBg,
    },
    pizza: {
      heading: 'Perfect Pizzas',
      description:
        'Savor our delicious pizzas, made with hand-tossed dough and topped with the finest ingredients. Each bite is a taste of perfection',
      opacity: true,
      imageUrl: pizzaBg,
    },
    soup: {
      heading: 'Hearty Soups',
      description:
        "Warm up with our selection of hearty soups. Whether you're in the mood for something classic or a new favorite, our soups are the perfect comfort food",
      opacity: true,
      imageUrl: soupBg,
    },
  };

  const button = 'Order Your Favourite Food';
  console.log('Menu Categories:', menuCategories);

  return (
    <div>
      <Helmet>
        <title> Tasty_Trails|Our Menu </title>
      </Helmet>

      <div className="mb-20">
        <Cover {...coverData} />
      </div>
      <div>
        <MenusHeading />
      </div>

      <div className="mb-20">
        <Menus
          coverData={menuCategories.dessert}
          recipeData={dessertMenus}
          button={button}
        />
      </div>

      <div className="mb-20">
        <Menus
          coverData={menuCategories.salad}
          recipeData={saladMenus}
          button={button}
        />
      </div>

      <div className="mb-20">
        <Menus
          coverData={menuCategories.pizza}
          recipeData={pizzaMenus}
          button={button}
        />
      </div>
      <div className="mb-20">
        <Menus
          coverData={menuCategories.soup}
          recipeData={soupMenus}
          button={button}
        />
      </div>
    </div>
  );
};

export default OurMenu;
