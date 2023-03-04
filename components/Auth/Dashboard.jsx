import React, { useEffect } from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import LoadingScreen from "../LoadingScreen";
import { ToastContainer, toast } from "react-toastify";
import { urlFor } from "../../lib/client";

import "react-toastify/dist/ReactToastify.css";
import { query, collection, getDocs, where } from "firebase/firestore";
import Sidebar from "./Sidebar";
import DashBoardDetails from "./DashBoardDetails";

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
    handleLinkClick,
    activeLink,
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

          {/* sidebars with dashboards */}
          <div className="flex">
            <Sidebar
              handleLinkClick={handleLinkClick}
              activeLink={activeLink}
            />
            {/* Active page */}
            <div className="flex-1 p-8">
              {/* Render content based on active link */}
              {activeLink === "Dashboard" && (
                <div>
                  <DashBoardDetails
                    handleLinkClick={handleLinkClick}
                    activeLink={activeLink}
                  />
                </div>
              )}
              {activeLink === "Inbox" && <div>Pre-orders Content</div>}
              {activeLink === "Orders" && <div>Orders Content</div>}
              {activeLink === "Subscriptions" && (
                <div>Subscriptions Content</div>
              )}
              {activeLink === "Request Quotes" && (
                <div>Request Quotes Content</div>
              )}
              {activeLink === "Newsletter Preferences" && (
                <div>RMA Requests Content</div>
              )}
              {activeLink === "Gift Cards" && <div>Gift Cards Content</div>}
              {activeLink === "Downloads" && <div>Downloads Content</div>}
              {activeLink === "Addresses" && <div>Addresses Content</div>}
              {activeLink === "Payment methods" && (
                <div>Payment methods Content</div>
              )}
              {activeLink === "Account details" && (
                <div>Account details Content</div>
              )}
              {activeLink === "Vendors" && <div>Vendors Content</div>}
              {activeLink === "Seller Support Tickets" && (
                <div>Seller Support Tickets Content</div>
              )}
              {activeLink === "Wishlist" && <div>Wishlist Content</div>}
              {activeLink === "Logout" && <div>Logout Content</div>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
