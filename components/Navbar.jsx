import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Cart,
  Cartegories,
  MobileNavbar,
  NormalNavbar,
  ScrollingNavbar,
} from "./";

const Navbar = ({ visible, scrollTop }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div>
      <div className="normal-navbar">
        <NormalNavbar visible={visible} scrollTop={scrollTop} />
        <MobileNavbar visible={visible} scrollTop={scrollTop} />
        <ScrollingNavbar visible={visible} scrollTop={scrollTop} />
      </div>
    </div>
  );
};

export default Navbar;
