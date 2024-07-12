import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { signUp } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // send data to server =>
    try {
      const { user } = await signUp(data.email, data.password);
      if (user.accessToken) {
        toast.success("sign up successfully");
      }
    } catch (err) {
      console.log(err?.message);
      toast.error(err?.message)
    }
  };

  return (
    <div className="hero min-h-screen max-w-screen-md  mx-auto">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold"> Register Now </h1>
          <p className="py-6">
            Please enter your credentials to create your account
          </p>
        </div>

        <div className="card bg-base-100 w-full shadow-2xl md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="enter your name "
                {...register("name")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="enter Email "
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="enter password "
                {...register("password", {
                  required: "password is required",
                  pattern: {
                    value: /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/,
                    message:
                      "Password must be at least 8 characters long and contain at least one letter and one digit",
                  },
                })}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ImageURL</span>
              </label>
              <input
                className="input input-bordered"
                placeholder="enter imageULR "
                {...register("imageUrl", { required: true })}
              />
              {errors.imageUrl && <span>This field is required</span>}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary"> SignUp </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
