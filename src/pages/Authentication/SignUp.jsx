import { useContext, useRef } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const photoRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // const imageURL = photoRef.current.value;
    // triggering sign up event =>
    try {
      const { user } = await signUp(email, password);
      if (user.accessToken) {
        toast.success("Your account has been signed up successfully");
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
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
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text"> Name</span>
              </label>
              <input
                type="Text"
                ref={nameRef}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                ref={passwordRef}
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">ImageURL</span>
              </label>
              <input
                type="text"
                ref={photoRef}
                placeholder="Image URL"
                className="input input-bordered"
                required
              />
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

export default SignUp;
