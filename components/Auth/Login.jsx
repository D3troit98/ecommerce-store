import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import LoadingScreen from "../LoadingScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
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
    if (loading) {
      // maybe trigger a loading screen
      return;
    } else if (user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);
  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="login">
          <ToastContainer />
          <div className="login__container">
            <input
              type="text"
              className="login__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="login__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              className="login__btn"
              onClick={() => logInWithEmailAndPassword(email, password)}
            >
              Login
            </button>
            <button
              className="login__btn login__google"
              onClick={signInWithGoogle}
            >
              Login with Google
            </button>
            <div>
              <Link href={"/reset"}>Forgot Password</Link>
            </div>
            <div>
              Don't have an account? <Link href={"/register"}>Register</Link>{" "}
              now.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
