import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../../Components/Laoding/Spinner";
import GoogleLogin from "../../Components/Shared/GoogleLogin";

const Login = () => {
  const [submit, setSubmit] = useState(true);
  const { login, setLoading, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  // capacha configurations=> => =>
  const capchaConfig = async () => {
    try {
      if (!loading) {
        await loadCaptchaEnginge(6);
      }

      // LoadCaptchaEnginge(6); // if you want to use reCAPTCHA instead of simple-captcha
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    capchaConfig();
  }, [loading]);

  const handleCaptcha = (e) => {
    e.preventDefault();
    if (e.target.value.length === 6 && validateCaptcha(e.target.value)) {
      setSubmit(true);
      toast.success(e.target.value);
    } else {
      setSubmit(false);
    }
  };

  // form configurations => =>
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // login function =>
  const onSubmit = async ({ email, password }) => {
    try {
      setLoading(true);
      const { user } = await login(email, password);
      if (user) {
        navigate(from);
        toast.success("login successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("login failed");
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="hero min-h-screen max-w-screen-md  mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Please enter your credentials to access your account
          </p>
        </div>

        <div className="card bg-base-100 w-full shadow-2xl md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500"> email is required </span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500"> password is required </span>
              )}
            </div>
            {/* catpcha =>  */}
            <div className="form-control">
              <div className="border border-blue-500">
                <LoadCanvasTemplate />
              </div>
              <input
                type="text"
                name="capcha"
                placeholder="input the capcha showed above.."
                className="input input-bordered"
                onChange={handleCaptcha}
              />
            </div>

            <div className="form-control mt-6">
              {submit && <button className="btn btn-primary">Login</button>}
            </div>
          </form>
          <div className="card-body">
            <div className="divider mt-0"></div>
            <p>
              dont have an acount please
              <Link to={"/register"} className="link mx-2 text-blue-800 ">
                Register
              </Link>
            </p>
            <div className="divider"></div>
            <div className="flex items-center justify-center">
            <GoogleLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
