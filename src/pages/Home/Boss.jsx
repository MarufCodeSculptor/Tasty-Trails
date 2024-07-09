import Cover from '../../Components/Shared/Cover.jsx';

const Boss = () => {
  const coverData = {
    heading: 'Tasty Boss',
    description:
      "Welcome to Tasty-Trails, where culinary excellence meets unparalleled dining experiences. Our restaurant isn't just a place to eat; it's a journey of flavors and ambiance that sets us apart. Here's why Tasty-Trails reigns supreme",
    opacity: false,
    imageUrl: 'https://i.ibb.co/tQ5ySTk/chef-service.jpg',
  };

  return (
    <div className='my-20'>
      <Cover {...coverData} />
    </div>
  );
};

export default Boss;
