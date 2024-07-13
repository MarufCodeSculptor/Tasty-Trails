import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCartData from "../../Hooks/useCartData";

const FoodCard = ({ item }) => {
  const { image, name, recipe, _id, price } = item;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const [,refetch] = useCartData();

  const handleAddToCart = async (item) => {
    const userName = user?.displayName;
    const userEmail = user?.email;
    const cartData = {
      itemID: _id,
      userName: userName,
      userEmail: userEmail,
      name,
      image,
    };

    if (user && userEmail) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to add this item to your cart?",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            axiosSecure.post("/carts", cartData).then((res) => {
              if (res.data) {
                console.log(res.data);
                Swal.fire({
                  title: "added to cart",
                  icon: "success",
                });
                refetch();
              }
            });
          } catch (err) {
            console.log(err);
          }
          //  execute  posting function here
        }
      });
    } else {
      Swal.fire({
        title: "Your are not logged in ",
        text: "you have to log in to add items to cart",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="flex-1">
      <div className="w-full rounded-lg shadow-lg">
        <img className="object-cover w-full" src={image} alt="avatar" />

        <div className="py-5 flex flex-col items-center justify-center p-3">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm ">{recipe}</p>
          <button
            onClick={() => handleAddToCart(item)}
            className="btn capitalize"
          >
            order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
