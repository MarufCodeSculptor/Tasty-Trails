const FoodCard = ({ item }) => {
  const { image, name, recipe } = item;

  return (
    <div className="flex-1">
      <div className="w-full rounded-lg shadow-lg">
        <img className="object-cover w-full" src={image} alt="avatar" />

        <div className="py-5 flex flex-col items-center justify-center p-3">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm ">{recipe}</p>
          <button className="btn capitalize"> order now </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
