import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  auth,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  logInWithEmailAndPassword,
  signInWithGoogle,
  db,
  logout,
} from "./../lib/firebase";
import { client } from "../lib/client";
import { useAuthState } from "react-firebase-hooks/auth";
const context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [activeLink, setActiveLink] = useState("Dashboard");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addressSave, setAddressSave] = useState(
    address.length > 1 ? true : false
  );
  const [phoneNumbersave, setPhoneNumberSave] = useState(
    phoneNumber.length > 1 ? true : false
  );

  useEffect(() => {
    if (user) {
      client
        .fetch(`*[_type == "user" && _id == "${user.uid}"][0]`)
        .then((userData) => {
          console.log("User data:", userData);
          setPhoneNumber(userData.phoneNumber);
          if (userData.phoneNumber.length > 1) setPhoneNumberSave(true);
          setAddress(userData.address);
          if (userData.address.length > 1) setAddressSave(true);
        })
        .catch((error) => {
          console.error("Fetch failed: ", error.message);
        });
    }
  }, [user]);
  useEffect(() => {
    if ((user && addressSave) || (user && phoneNumbersave)) {
      const doc = {
        _id: user.uid,
        _type: "user",
        name: user.displayName,
        email: user.email,
        phoneNumber: phoneNumber,
        address: address,
      };
      client
        .createOrReplace(doc)
        .then((result) => {
          console.log(`Document ID is ${result._id}`);
        })
        .catch((error) => {
          console.error("Create failed: ", error.message);
        });
    }
  }, [addressSave, phoneNumbersave]);

  let foundProduct;
  let index;
  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuanties) => prevTotalQuanties + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        // console.log(cartProduct)
        if (cartProduct?._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });
      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems
      .sort()
      .filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalPrice(
      (prevTotalQuanties) => prevTotalQuanties - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };
  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.sort().filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuanties) => prevTotalQuanties + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuanties) => prevTotalQuanties - 1);
      }
    }
  };

  const incQt = () => {
    setQty((prevQry) => prevQry + 1);
  };

  const deccQt = () => {
    setQty((prevQry) => {
      if (prevQry - 1 < 1) return 1;
      return prevQry - 1;
    });
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
    console.log("dropdown", isDropdownOpen);
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQt,
        deccQt,
        onAdd,
        setShowCart,
        toggleCartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        searchTerm,
        setSearchTerm,
        handleDropdownToggle,
        isDropdownOpen,
        setIsDropdownOpen,
        handleTabChange,
        activeTab,
        setActiveTab,

        email,
        setEmail,
        password,
        setPassword,
        user,
        loading,
        error,
        logInWithEmailAndPassword,
        signInWithGoogle,
        name,
        setName,
        db,
        logout,
        registerWithEmailAndPassword,
        handleLinkClick,
        activeLink,

        phoneNumber,
        setPhoneNumber,
        address,
        setAddress,
        addressSave,
        phoneNumbersave,
        setAddressSave,
        setPhoneNumberSave,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
