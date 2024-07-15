import { BsPersonLinesFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUsers from "../../../Hooks/useUsers";

const UserRow = ({ user, index }) => {
  const { email, imageUrl, userName, _id } = user;
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useUsers();

  const handleDelete = async () => {
    //  make a asking before delete with Sweetalert2
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const { data } = await axiosSecure.delete(`/users/${_id}`);
        // make a confrirmations afiter data.dleecteCount > 0

        if (data.deletedCount > 0) {
          // show  success message with sweeetalert message
          toast.success("User deleted successfully");
          refetch();
        }
      } catch (error) {
        toast.error("Failed to delete user");
        console.error(error);
      }
    }
  };

  return (
    <tr>
      <th> {index + 1} </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageUrl} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{userName}</div>
          </div>
        </div>
      </td>
      <td> {email} </td>

      <td>
        <BsPersonLinesFill />
      </td>
      <th>
        <button onClick={handleDelete} className="btn btn-ghost btn-lg">
          {" "}
          <MdDelete className="text-red-700" />
        </button>
      </th>
    </tr>
  );
};

export default UserRow;
