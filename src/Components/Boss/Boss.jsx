const Boss = () => {
  const heading = 'Tasty Boss';
  const description =
    "Welcome to Tasty-Trails, where culinary excellence meets unparalleled dining experiences. Our restaurant isn't just a place to eat; it's a journey of flavors and ambiance that sets us apart. Here's why Tasty-Trails reigns supreme";
  return (
    <div className="my-20">
      <div
        className={`flex item-center justify-center p-40 bg-pink-500  bg-opacity-25 text-center bg-[url(https://i.ibb.co/tQ5ySTk/chef-service.jpg)] bg-center	 bg-no-repeat	 bg-cover `}
      >
        <div className="md:w-[1096px] md:px-40 md:py-20  bg-white">
          <h2 className="text-5xl uppercase">{heading}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Boss;
