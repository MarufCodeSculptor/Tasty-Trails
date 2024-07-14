import { BsPersonLinesFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const UserRow = ({ user, index }) => {
  const { email, imageUrl, userName } = user;

  return (
    <tr>
      <th> {index+1} </th>
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
        <button className="btn btn-ghost btn-lg">
          {" "}
          <MdDelete className="text-red-700" />
        </button>
      </th>
    </tr>
  );
};

export default UserRow;
