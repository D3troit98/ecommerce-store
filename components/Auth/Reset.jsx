import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import LoadingScreen from "../LoadingScreen";
import { ToastContainer, toast } from "react-toastify";
import { urlFor } from "../../lib/client";

const Reset = ({ heroBanner }) => {
  const {
    loading,
    user,
    email,
    password,
    signInWithGoogle,
    setEmail,
    setPassword,
  } = useStateContext();
  const router = useRouter();
  useEffect(() => {
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
                  <p>Recover your Account</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center  mt-4 md:mt-8 w-full h-auto">
            <div className="flex flex-col w-full md:w-1/3 md:border-r border-gray-400 md:pr-10 py-4 px-2">
              <h1 className="md:text-2xl text-xl font-semibold text-gray-900">
                RESET
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

              <button
                className="w-full mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                onClick={() => logInWithEmailAndPassword(email, password)}
              >
                Send password reset email
              </button>

              <div className="flex items-center mt-1 justify-between">
                <Link href={"/register"}>
                  <p className="text-xs cursor-pointer text-red-600 hover:text-red-500">
                    Dont have an account?
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
              <div className="flex justify-center items-center w-1/2 mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
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

export default Reset;
