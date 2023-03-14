"use client";
import React, { useState,useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const Layout = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [visible, setVisible] = useState(true);
  const router = useRouter();
  const topViewRef = useRef(null);
  const handleScroll = (event) => {
    const currentScrollTop = event.currentTarget.scrollTop;
    setVisible(scrollTop > currentScrollTop);
    setScrollTop(currentScrollTop);
  };
  const handleScrollToTop = () => {
    topViewRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="layout" onScroll={handleScroll}>
      <Head>
        <title>
          Detroit Store - Online Store for Kitchen Gadgets, Home Stuffs, Gift
          Ideas, Women's Fashion & Sales
        </title>
        <meta
          name="description"
          content="Detroit Store is an online store that sells a variety of items including kitchen gadgets, home stuffs, gift ideas, women's fashion and sales. Browse our collection and find something perfect for yourself or as a gift for your loved ones."
        />
      </Head>
      <header>
        <Navbar scrollTop={scrollTop} visible={visible} />
      </header>
    <div id="topView" ref={topViewRef}>

   
      <main className="main-container" >{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>

      {scrollTop > 500 && (
        <div className="scroll-to-top" onClick={handleScrollToTop}>
          <BsFillArrowUpCircleFill className="scroll-top-arrow" />
        </div>
      )}
    </div>
  );
};

export default Layout;
