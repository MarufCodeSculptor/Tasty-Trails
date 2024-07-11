import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [submit, setSubmit] = useState(false);
  const { login} = useContext(AuthContext);
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
  // login configurations=> =>

  const emailRef = useRef(null);
  const passRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user } = await login(
        emailRef.current.value,
        passRef.current.value
      );

      if (user) {
        toast.success("Login successful");
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.messsage);
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
          <form onSubmit={handleSubmit} className="card-body">
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
                ref={passRef}
                placeholder="password"
                className="input input-bordered"
                required
              />
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
        </div>
      </div>
    </div>
  );
};

export default Login;
