import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import toast from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [submit, setSubmit] = useState(true);
  const { login } = useContext(AuthContext);

  // capacha configurations=> => =>
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptcha = (e) => {
    e.preventDefault();
    if (e.target.value.length === 6 && validateCaptcha(e.target.value)) {
      setSubmit(true);
      toast.success(e.target.value);
    } else {
      setSubmit(false);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // login configurations=> =>
  const onSubmit = async ({ email, password }) => {
    try {
      const { user } = await login(email, password);
      if (user) {
        toast.success("login successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error("login failed");
    }
  };

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
              {errors.email && <span className="text-red-500"> email is required </span>}
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
               {errors.password && <span className="text-red-500" > password  is required </span>}
            </div>
            {/* catpcha =>  */}
            <div className="form-control">
              <LoadCanvasTemplate />
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
          <p> don't have  an acount please  <Link to={'/register'} className="link"  >  Sign up </Link>   </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
