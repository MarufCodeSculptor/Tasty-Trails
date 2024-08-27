import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use(
    (config) => {
      const token = JSON.parse(localStorage.getItem("token"))?.token;
      config.headers.authorization = `Bearer ${token}`;
      return config;

    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosSecure.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      if (error.response.status === 403) {
        try {
          await logOut();
          navigate("/login");
          return Promise.reject(error);
        } catch (err) {
          console.log("forbidden", err);
        }

        return Promise.reject(error);
      }

      return Promise.reject(error);
    }
  );

  return axiosSecure;
};
export default useAxiosSecure;
