const MenuItem = ({ item }) => {
  console.log(item, 'from menu item');

  const { name, price, recipe, image } = item;

  return (
    <div className="flex item-center justify-center gap-3 p-3">
       <img src={image} alt="" className="w-[110px] h-[90px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] " />
        <div>
          <h2 className="text-xl font-bold uppercase">{name} ---------- </h2>
          <p className="text-gray-800">{recipe}</p>
        </div>
       <span className="font-bold text-xl text-blue-800">${price}</span>
    </div>
  );
};

export default MenuItem;
