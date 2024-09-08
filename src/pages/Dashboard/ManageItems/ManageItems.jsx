import SectionHeading from "../../../Components/SectionHeading";
import useGetMenuData from "../../../Hooks/useGetMenuData";
import MangeItemsRow from "./MangeItemsRow";

const ManageItems = () => {
  const { menus, isLoading,refetch } = useGetMenuData();
  if (isLoading) return <h4>laoding..</h4>;

  
  return (
    <div>
      <SectionHeading
        heading={"manage all items"}
        subHeading={"- - - - hurry up- - - - - "}
      />

      <div>
        <div className="">
          <div className=" bg-white min-h-screen rounded-lg shadow-2xl p-10 m-10  ">
            <h3 className="text-3xl font-bold">Total Items : {menus.length}</h3>

            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price </th>
                    <th> update </th>
                    <th> action </th>
                  </tr>
                </thead>
                <tbody>
                  {menus.map((item) => (
                    <MangeItemsRow
                      key={item._id}
                      item={item}
                      refetch={refetch}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
