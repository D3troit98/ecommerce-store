import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import LoadingScreen from "../LoadingScreen";
import { ToastContainer, toast } from "react-toastify";
import { urlFor } from "../../lib/client";

import "react-toastify/dist/ReactToastify.css";

const Login = ({ heroBanner }) => {
  const {
    user,
    loading,
    error,
    email,
    password,
    setEmail,
    setPassword,
    logInWithEmailAndPassword,
    signInWithGoogle,
  } = useStateContext();

  const router = useRouter();
  useEffect(() => {
    console.log("useEffect called");
    if (loading) {
      // maybe trigger a loading screen
      return;
    } else if (user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);
  return (
    <>
      {loading || !heroBanner ? (
        <LoadingScreen />
      ) : (
        <div>
          <ToastContainer />
          <div className={`hero-banner-container `}>
            <div className="hero-banner-margin">
              <p className="beats-solo">Discover something unique</p>
              <h3>Detroit Store</h3>
              <h1>MY ACCOUNT</h1>
              <img
                src={urlFor(heroBanner?.image)}
                alt="headphones"
                className="hero-banner-image"
              />
              <div>
                <Link href={`/`}>
                  <button type="button">Home</button>
                </Link>
                <div className="desc">
                  <h5>Welcome</h5>
                  <p>Sign in into your Account</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center  mt-4 md:mt-8 w-full h-auto">
            <div className="flex flex-col w-full md:w-1/3 md:border-r border-gray-400 md:pr-10 py-4 px-2">
              <h1 className="md:text-2xl text-xl font-semibold text-gray-900">
                LOGIN
              </h1>
              <div className="md:my-4 my-2">
                <label
                  htmlFor="email"
                  className="block text-xs md:text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="text"
                  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
              </div>

              <div className="md:my-3">
                <label
                  htmlFor="password"
                  className="block text-xs md:text-sm font-medium  text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="mt-1 focus:ring-red-500 focus:border-red-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>

              <button
                className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Login
              </button>

              <button
                className="flex justify-start gap-4 items-center mt-4 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={signInWithGoogle}
              >
                <span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.64 9.20456C17.64 8.56637 17.5827 7.95274 17.4764 7.36365H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8196H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20456Z"
                      fill="#4285F4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z"
                      fill="#34A853"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.96409 10.71C3.78409 10.17 3.68182 9.59319 3.68182 9.00001C3.68182 8.40683 3.78409 7.83001 3.96409 7.29001V4.95819H0.957273C0.347727 6.17319 0 7.54774 0 9.00001C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z"
                      fill="#FBBC05"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
                      fill="#EA4335"
                    />
                  </svg>
                </span>
                <span>Login with Google</span>
              </button>

              <div className="flex items-center mt-1 justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-xs text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <Link href={"/reset"}>
                  <p className="text-xs cursor-pointer text-red-600 hover:text-red-500">
                    Lost your password?
                  </p>
                </Link>
              </div>
            </div>

            <div className="flex justify-start items-center flex-col md:pl-10 py-4 w-full px-1  md:w-1/3">
              <h1 className="md:text-2xl text-xl font-semibold text-gray-900">
                REGISTER
              </h1>
              <p className="text-xs md:text-sm text-[#777777]">
                Registering for this site allows you to access your order status
                and history. Just fill in the fields below, and we'll get a new
                account set up for you in no time. We will only ask you for
                information necessary to make the purchase process faster and
                easier.
              </p>
              <div className="flex justify-center items-center w-1/2 mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 cursor-pointer">
                <Link href={"/register"}>
                  <h3>REGISTER</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;