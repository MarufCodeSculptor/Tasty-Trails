import useUsers from "../../../Hooks/useUsers";
import UserRow from "./UserRow";

const User = () => {
  const [users]= useUsers();
  console.log(users);
  return (
    <div className="m-10 p-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold">All USERS</h2>
      {/* List all users here */}
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th> action </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={index} user={user} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
