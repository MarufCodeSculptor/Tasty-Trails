import toast from "react-hot-toast";

const MyCartRow = ({ item }) => {
  const { image, name, price ,_id} = item;

  const handleDelete = () => {


    console.log("delete action working ",_id);
    toast.success('delete is working')



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
        <button onClick={handleDelete}  className="btn btn-ghost btn-xs"> Delete </button>
      </th>
    </tr>
  );
};

export default MyCartRow;
