import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCartData from "../../Hooks/useCartData";
import Swal from "sweetalert2";
import { FaTrashCan } from "react-icons/fa6";



const MyCartRow = ({ item }) => {
  const { image, name, price, _id } = item;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCartData();

  const handleDelete = async () => {
    try {
      const proccied = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (proccied.isConfirmed) {
        await axiosSecure.delete(`/carts/${_id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
        });
        refetch();
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>

      <td>
        <h2 className="text-xl font-bold">{name}</h2>
      </td>

      <td> {price} </td>

      <th>
        <button onClick={handleDelete} className="btn btn-ghost btn-lg">
            <FaTrashCan  className="text-red-500" />
        </button>
      </th>
    </tr>
  );
};

export default MyCartRow;
