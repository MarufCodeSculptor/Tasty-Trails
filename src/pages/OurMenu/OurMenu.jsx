import { Helmet } from 'react-helmet';

const OurMenu = () => {
  return (
    <div>
      <Helmet>
      <title> Tasty_Trails|Our Menu </title>
      </Helmet>
      <div className="mt-16 min-h-screen border border-red-500">
        <h2 className="text-5xl font-bold">Our menu</h2>
      </div>
    </div>
  );
};

export default OurMenu;
