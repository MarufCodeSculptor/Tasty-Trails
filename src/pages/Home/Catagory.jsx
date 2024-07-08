import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';
import SectionHeading from '../../Components/SectionHeading';

const Catagory = () => {
  return (
    <div>
      <div>
        <SectionHeading
          heading={'ORDER ONLINE'}
          subHeading={'---From 11:00am to 10:00pm---'}
        />
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} className="w-full h-full  object-cover " alt="" />
          <h1 className="text-2xl font-semibold text-center -mt-12 text-gray-800">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} className="w-full h-full  object-cover " alt="" />
          <h1 className="text-2xl font-semibold text-center -mt-12 text-gray-800">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} className="w-full h-full  object-cover " alt="" />
          <h1 className="text-2xl font-semibold text-center -mt-12 text-gray-800">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} className="w-full h-full  object-cover " alt="" />
          <h1 className="text-2xl font-semibold text-center -mt-12 text-gray-800">
            Salad
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} className="w-full h-full  object-cover " alt="" />
          <h1 className="text-2xl font-semibold text-center -mt-12 text-gray-800">
            Salad
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Catagory;
