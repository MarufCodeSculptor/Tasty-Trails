import Boss from '../../Components/Boss/Boss';
import Menu from '../Shared/Menu/Menu';
import CarouselContainer from './Carousel';
import Catagory from './Catagory';
import Fetures from './Fetures';

const Home = () => {
  return (
    <div>
      <CarouselContainer />
      <Catagory />
      <Boss/> 
      <Menu />
      <Fetures/>
    </div>
  );
};

export default Home;
