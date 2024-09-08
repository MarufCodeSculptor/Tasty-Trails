import { Link } from "react-router-dom";
import SectionHeading from "../../Components/SectionHeading";
import useCartData from "../../Hooks/useCartData";
import MyCartRow from "./MyCartRow";

const MyCart = () => {
  const [cart] = useCartData();

  const sum = cart.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.price);
  }, 0);

  return (
    <div className="">
      <div>
        <SectionHeading
          heading="Mange all Bookings "
          subHeading="- - -At a   Glance - - -"
        />
      </div>
      <div className=" bg-white min-h-screen rounded-lg shadow-2xl p-10 m-10  ">
        <div className="grid grid-cols-3 gap-2 text-center font-cinzel">
          <div>
            <h2 className="text-4xl font-bold">Total orders: {cart?.length}</h2>
          </div>
          <div className="min-w-24 min-h-5 ">
            <h2 className="text-4xl font-bold"> Total Price {sum} </h2>
          </div>
          <div className="min-w-24 min-h-5">
            {cart.length ? (
              <Link to={"/dashboard/payment"}>
                <button className="btn bg-dashboardbg"> Pay </button>
              </Link>
            ) : (
              <button
                disabled={!cart.length > 0}
                className="btn bg-dashboardbg"
              >
                Pay
              </button>
            )}
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
    </div>
  );
};

export default MyCart;
