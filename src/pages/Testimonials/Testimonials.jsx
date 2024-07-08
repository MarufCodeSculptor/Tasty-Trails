     import { useEffect, useState } from 'react';
     import SectionHeading from '../../Components/SectionHeading';
     import { Swiper, SwiperSlide } from 'swiper/react';
     import 'swiper/css';
     import 'swiper/css/navigation';
     import { Navigation } from 'swiper/modules';
     import ReactStars from 'react-rating-stars-component';
     import { FaQuoteLeft } from 'react-icons/fa';


     const Testimonials = () => {
     const [reviews, setReviews] = useState([]);
     useEffect(() => {
     const getReviews = async () => {
          try {
          const response = await fetch('/reviews.json');
          const reviews = await response.json();
          setReviews(reviews);
          } catch (err) {
          console.log(err?.message);
          }
     };

     getReviews``;
     }, []);
     console.log(reviews);
     return (
     <div>
          <SectionHeading
          heading={'Testimonials'}
          subHeading={'- - -what our client say- - -'}
          />
          <div className="my-16">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               {reviews.map(review => (
               <SwiperSlide key={review._id}>
               <div className="flex items-center justify-center flex-col md:px-20">
                    <ReactStars size={50} value={review.rating} edit={false} />
                      <span className='text-6xl my-10'> <FaQuoteLeft /></span>
                    <p className="text-sm"> {review.details} </p>
                    <h2 className="text-3xl font-bold">{review.name}</h2>
               </div>
               </SwiperSlide>
               ))}
          </Swiper>
          </div>
     </div>
     );
     };

     export default Testimonials;
