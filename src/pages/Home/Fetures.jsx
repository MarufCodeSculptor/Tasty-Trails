import SectionHeading from '../../Components/SectionHeading';

const Fetures = () => {
  return (
    <div className="my-20 bg-[url(https://i.ibb.co/qgWy1pR/featured-1.png)] bg-no-repeat bg-cover bg-center ">
      <section className='bg-gray-800 bg-opacity-50 py-20'>
        {/* section heading */}
        <SectionHeading
          heading={'from our menu'}
          subHeading={'- - - check it out- - -'}
          hColor={'text-white'}
        />
        {/* section contents */}
        <div className='w-[1096px] px-20'>
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center text-white">

            <div className="w-1/2">
              <img src={'https://i.ibb.co/qgWy1pR/featured-1.png'} alt="" />
            </div>

            <div className="w-1/2">
              <div className="uppercase">
                <p> March 20, 2023</p>
                <h3> where can i get some </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                deleniti nihil fugit odit enim aliquam sed optio inventore
                quibusdam culpa?
              </p>
              <button className="btn mt-2 bg-transparent outline-none border-0 border-b-4 border-gray-300 text-white hover:text-blue-600 hover:bg-transparent">
                {' '}
                Read More ...
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Fetures;
