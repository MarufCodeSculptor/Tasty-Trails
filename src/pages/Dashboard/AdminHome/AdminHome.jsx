import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUser } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const AdminHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: adminStats = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admins_Stats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stats");
      return data;
    },
  });

  const { data: orderStats } = useQuery({
    queryKey: ["orderStats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/order-stats");
      return data;
    },
  });

  console.log(orderStats, "the order stats");

  if (isLoading) return <div>Loading...</div>;

  const { reveniue, orders, menus, users } = adminStats;
  return (
    <div>
      <h2 className="text-2xl fotn-bold uppercase my-5 ">
        hi welcome back{" "}
        <span className="text-blue-500">{user?.displayName}</span>{" "}
      </h2>

      <div>
        <div className="stats shadow">
          <div className="stat py-6">
            <div className="stat-figure text-secondary">
              <FaDollarSign className="text-5xl" />
            </div>
            <div className="stat-title">Reveniue</div>
            <div className="stat-value"> {reveniue}</div>
            {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUser className="text-5xl" />
            </div>
            <div className="stat-title">Users</div>
            <div className="stat-value">{users}</div>
            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <IoShieldCheckmarkSharp className="text-5xl" />
            </div>
            <div className="stat-title">Orders</div>
            <div className="stat-value">{orders}</div>
            {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaBook className="text-5xl" />
            </div>
            <div className="stat-title">Menus</div>
            <div className="stat-value">{menus}</div>
            {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
          </div>
        </div>
      </div>

      <div className="border border-red-500 p-10 mt-10"></div>
    </div>
  );
};

export default AdminHome;
