import useCartData from "../../Hooks/useCartData";
import MyCartRow from "./MyCartRow";

const MyCart = () => {
  const [cart] = useCartData();

  const sum = cart.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.price);
  }, 0);

  console.log(sum, "hay sinamika");

  return (
    <div className="">
      <div className="grid grid-cols-3 gap-2 text-center font-cinzel">
        <div>
          <h2 className="text-4xl font-bold">Total orders: {cart?.length}</h2>
        </div>
        <div className="min-w-24 min-h-5 ">
          <h2 className="text-4xl font-bold"> Total Price {sum} </h2>
        </div>
        <div className="min-w-24 min-h-5">
          <button className="btn bg-dashboardbg"> Pay</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price </th>
              <th> action </th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <MyCartRow key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
