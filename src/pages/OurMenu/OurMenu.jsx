import { Helmet } from 'react-helmet';
import Cover from '../../Components/Shared/Cover';
import banner3 from '../../assets/menu/banner3.jpg';
import MenuDesert from './Menus/MenuDesert';
import MenusHeading from './MenusHeading';

const OurMenu = () => {
  const coverData = {
    heading: 'our menu',
    description: 'woul you like to try a dish',
    opacity: true,
    imageUrl: banner3,
  };

  return (
    <div>
      <Helmet>
        <title> Tasty_Trails|Our Menu </title>
      </Helmet>

      <div className="my-20">
        <Cover {...coverData} />
      </div>
      <div>
        <MenusHeading />
      </div>

      <div>
        <MenuDesert />
      </div>
    </div>
  );
};

export default OurMenu;
