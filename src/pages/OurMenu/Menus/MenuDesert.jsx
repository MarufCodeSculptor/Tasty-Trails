import Menus from '../../../Components/Menus/Menus';
import useGetMenuData from '../../../Hooks/useGetMenuData';
import dessert from '../../../assets/menu/dessert-bg.jpeg';

const MenuDesert = () => {
  const datas = useGetMenuData();
  console.log(datas);

  const desertData = datas.filter(data => data.category === 'dessert');
  const coverData = {
    heading: 'Desert',
    description:
      'Indulge in the sweetest treats Tasty-Trails has to offer. From classic favorites like rich chocolate cakes and creamy cheesecakes to innovative creations that tantalize your taste buds, our dessert menu is a delightful journey of flavors. Perfect for satisfying your sweet cravings, our desserts are crafted with the finest ingredients to ensure every bite is a moment of pure bliss. Come and discover the delicious world of desserts at Tasty-Trails',
    opacity: true,
    imageUrl: dessert,
  };

  return (
    <div>
      <Menus coverData={coverData} recipeData={desertData} />
    </div>
  );
};

export default MenuDesert;
