const Cover = ({ heading, description, opacity, imageUrl }) => {
  return (
    <div className="my-20">
      <div
        className={`flex items-center justify-center p-40 text-center bg-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div
          className={`md:w-[1096px] md:px-40 md:py-20   ${
            (opacity && 'bg-gray-800 bg-opacity-30 text-white') ||
            ' bg-white text-gray-950'
          } rounded-lg  `}
        >
          <h2 className="text-5xl uppercase">{heading}</h2>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
