import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const { user } = await googleSignIn();
      if (user) {
        const userData = { email: user?.email };
        const { data } = await axiosPublic.post("/users", userData);
        console.log(data);
        Swal.fire({
          title: "Login Successful",
          text: `Welcome ${user.displayName}!`,
          icon: "success",
        });

        navigate("/");
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        title: `${err.message}`,
        icon: "error",
      });
    }
  };
  return (
    <button className=" btn " onClick={handleGoogleLogin}>
      Login with
      <span>
        <FaGoogle className=" text-purple-900" />
      </span>
    </button>
  );
};

export default GoogleLogin;
