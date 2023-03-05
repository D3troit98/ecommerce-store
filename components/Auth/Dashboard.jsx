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
import Inbox from "./Inbox";
import Orders from "./Orders";
import Subscription from "./Subscription";
import RequestQuotes from "./RequestQuotes";
import NewsletterPreferences from "./NewsletterPreferences";
import GiftCards from "./GiftCards";
import Addresses from "./Addresses";

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

          {/* sidebars with dashboards */}
          <div className=" flex flex-col md:flex-row justify-center items-center md:items-start mt-4 rounded-lg ">
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
              {activeLink === "Inbox" && (
                <div>
                  <Inbox />
                </div>
              )}
              {activeLink === "Orders" && (
                <div>
                  <Orders />
                </div>
              )}
              {activeLink === "Subscriptions" && (
                <div>
                  <Subscription />
                </div>
              )}
              {activeLink === "Request Quotes" && (
                <div>
                  <RequestQuotes />
                </div>
              )}
              {activeLink === "Newsletter Preferences" && (
                <div>
                  <NewsletterPreferences />
                </div>
              )}
              {activeLink === "Gift Cards" && (
                <div>
                  <GiftCards />
                </div>
              )}

              {activeLink === "Addresses" && (
                <div>
                  <Addresses />
                </div>
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
