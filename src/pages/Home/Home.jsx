import Boss from '../../Components/Boss/Boss';
import Recommendation from '../../Components/Recommendation/Recommendation';
import Menu from '../Shared/Menu/Menu';
import Testimonials from '../Testimonials/Testimonials';
import CallUs from './CallUs';
import CarouselContainer from './Carousel';
import Catagory from './Catagory';
import Fetures from './Fetures';

const Home = () => {
  return (
    <div>
      <CarouselContainer />
      <Catagory />
      <Boss />
      <Menu />
      <CallUs/>
      <Recommendation/>
      <Fetures />
      <Testimonials />
    </div>
  );
};

export default Home;
