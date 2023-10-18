import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import helloAnimation from "../../assets/Animation - 1697522941774.json";

const Register = () => {
  const { createUser, userProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    try {
      const result = await createUser(email, password);

      if (photoURL) {
        await userProfile(name, photoURL);
      }
      toast.success("Registration successful!");
      form.reset();
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center px-4 md:px-8">
        <div className="w-full">
          <div className="mx-auto p-4">
            <Lottie
              animationData={helloAnimation}
              loop={true}
              autoplay={true}
            />
          </div>
        </div>
        <div className="bg-white rounded p-8 mx-auto shadow-md w-full sm:w-96">
          <h2 className="text-5xl font-bold mb-4 text-center">Register</h2>
          <form onSubmit={handleRegister}>
            <div className="mb-4">
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Photo Url</label>
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          
            <div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                Register
              </button>
              <div className="mt-4">
                <p>
                  Already Have an Account? &nbsp;
                  <Link
                    to="/login"
                    className="text-blue-500 hover:underline"
                  >
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
