import Cover from '../../Components/Shared/Cover';
import TabsCatagories from '../../Components/TabsCatagories/TabsCatagories';
import orderBanner from '../../assets/shop/banner2.jpg';

const Order = () => {
  const coverData = {
    heading: 'our menu',
    description: 'woul you like to try a dish',
    opacity: true,
    imageUrl: orderBanner,
  };

  return (
    <div>
      <div>
        <Cover {...coverData} />
      </div>
      <TabsCatagories />
    </div>
  );
};

export default Order;
