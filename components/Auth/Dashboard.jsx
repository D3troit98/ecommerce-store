import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import LoadingScreen from "../LoadingScreen";
import { ToastContainer, toast } from "react-toastify";
import { urlFor } from "../../lib/client";

import "react-toastify/dist/ReactToastify.css";
import { query, collection, getDocs, where } from "firebase/firestore";

const Dashboard = ({ heroBanner }) => {
  const {
    loading,
    user,
    email,
    password,
    signInWithGoogle,
    setEmail,
    setPassword,
    db,
    logout,
    name,
  } = useStateContext();
  const router = useRouter();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      toast.error("An error occured while fetching user data", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    } else if (!user) {
      router.push("/account");
    }
    console.log(user);
  }, [user, loading, router]);
  return (
    <>
      {loading || !heroBanner || !user ? (
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
                <Link href={`/home`}>
                  <button type="button">Home</button>
                </Link>
                <div className="desc">
                  <h5>Welcome</h5>
                  <p>Sign in into your Account</p>
                </div>
              </div>
            </div>
          </div>

          {/* dashboards */}

          <div className="dashboard">
            <div className="dashboard__container">
              Logged in as
              <div>{name}</div>
              <div>{user?.email}</div>
              <button className="dashboard__btn" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
