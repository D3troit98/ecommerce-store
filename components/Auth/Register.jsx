import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import LoadingScreen from "../LoadingScreen";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const {
    loading,
    user,
    email,
    password,
    signInWithGoogle,
    setEmail,
    setPassword,
    name,
    setName,
    registerWithEmailAndPassword,
  } = useStateContext();
  const router = useRouter();
  const register = () => {
    console.log("registering");
    if (!name) {
      toast.info("Please enter name", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    registerWithEmailAndPassword(name, email, password);
  };

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
        <div className="register">
          <ToastContainer />
          <div className="register__container">
            <input
              type="text"
              className="register__textBox"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
            <input
              type="text"
              className="register__textBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail Address"
            />
            <input
              type="password"
              className="register__textBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button className="register__btn" onClick={register}>
              Register
            </button>
            <button
              className="register__btn register__google"
              onClick={signInWithGoogle}
            >
              Register with Google
            </button>
            <div>
              Already have an account? <Link href={"/"}>Login</Link> now.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
