import Recommendation from "../../Components/Recommendation/Recommendation";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

import Menu from "../Shared/Menu/Menu";
import Testimonials from "../Testimonials/Testimonials";
import Boss from "./Boss";
import CallUs from "./CallUs";
import CarouselContainer from "./Carousel";
import Catagory from "./Catagory";
import Fetures from "./Fetures";

const Home = () => {
  const axiosSecure = useAxiosSecure();
  const fucks = async () => {
    try {
      const res = await axiosSecure.get("/draft");
      console.log(res, "comming from drafts");
    } catch (err) {
      console.error(err);
    }
  };
  fucks();
  return (
    <div>
      <CarouselContainer />
      <Catagory />
      <Boss />
      <Menu />
      <CallUs />
      <Recommendation />
      <Fetures />
      <Testimonials />
    </div>
  );
};

export default Home;
