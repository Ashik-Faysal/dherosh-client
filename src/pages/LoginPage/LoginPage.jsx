import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/animation_lnw3o9vs.json";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const LoginPage = () => {
  const { signInWithGoogle, signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      toast.success("Google login successful!");
      reset();
      setEmailError("");
      setPasswordError("");
      navigate("/");
    } catch (error) {
      toast.error("Google login failed. Please try again.");
    }
  };

  const onSubmit = async (data) => {
    if (data.email && data.password) {
      try {
        await signIn(data.email, data.password); 
        toast.success("Login successful");
        reset();
        setEmailError("");
        setPasswordError("");
        navigate("/");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      setEmailError(data.email ? "" : "Email is required");
      setPasswordError(data.password ? "" : "Password is required");
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 px-2 md:px-4 gap-2 md:gap-8 items-center justify-center bg-gray-100 ">
      <div>
        <Lottie animationData={loginAnimation} loop={true} autoplay={true} />
      </div>
      <div className="bg-white rounded p-8 mx-auto shadow-2xl w-full sm:w-96 md:py-16">
        <h2 className="text-5xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              rules={{ required: "Email is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              rules={{ required: "Password is required" }}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border rounded-md"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
          <div className="flex justify-between">
            <button type="submit" className="btn-primary">
              Login
            </button>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center bg-white border btn-success rounded p-2 cursor-pointer"
            >
              <FaGoogle className="w-6 h-6 mr-2" />
              <span className="text-gray-800">Sign with Google</span>
            </button>
          </div>
          <p className="text-red-500 hover:underline my-4">Forgot Password?</p>
          <div className="mt-4">
            <p>
              Are you New? &nbsp;
              <Link to="/register" className="text-blue-500 hover:underline">
                Register Here
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
