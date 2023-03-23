import React, { createContext, useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
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
  const [addressSave, setAddressSave] = useState(false);
  const [phoneNumbersave, setPhoneNumberSave] = useState(false);
  const [sanityUser, setSanityUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState(null);
  useEffect(() => {
    if (user) {
      toast.loading("Loading user data...");
      client
        .fetch(`*[_type == "user" && _id == "${user.uid}"][0]`)
        .then((userData) => {
          if (userData) {
            setSanityUser(userData);
            console.log("userData", userData);
            setPhoneNumber(userData?.phoneNumber || "");
            setPhoneNumberSave(!!userData?.phoneNumber);
            setAddress(userData?.address || "");
            setAddressSave(!!userData?.address);
            toast.success("Logged in!");
          }
          // If userData is null, then it's a new user and we need to create a record in Sanity
          if (!userData) {
            const doc = {
              _id: user.uid,
              _type: "user",
              name: name,
              email: user.email,
              phoneNumber: phoneNumber,
              address: address,
            };
            toast.loading("creating user data...");
            client
              .create(doc)
              .then((result) => {
                setSanityUser(result);
                toast.success("Logged in!");
              })
              .catch((error) => {
                toast.error("Create failed: ", error.message);
              });
          }
        })
        .catch((error) => {
          toast.error("Fetch failed: ", error.message);
        });
    }
    toast.dismiss();
  }, [user]);

  const updateUserInSanity = async (userId, updates) => {
    const doc = {
      _id: userId,
      _type: "user",
      name: name,
      ...updates,
    };
    try {
      const result = await client.createOrReplace(doc);
      toast("Updated!", {
        icon: "👏",
      });
    } catch (error) {
      toast.error("Create failed: ", error.message);
    }
  };

  const handlePhoneNumberSave = () => {
    setPhoneNumberSave(true);
    updateUserInSanity(user.uid, { phoneNumber });
  };

  const handleAddressSave = () => {
    setAddressSave(true);
    updateUserInSanity(user.uid, { address });
  };

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
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLinkClick = (link) => {
    if (link === "Logout") {
      logout();
      toast.success("logged out");

      setSanityUser(null);
      setActiveLink("Dashboard");
    } else {
      setActiveLink(link);
    }
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
        setActiveLink,

        phoneNumber,
        setPhoneNumber,
        address,
        setAddress,
        addressSave,
        phoneNumbersave,
        setAddressSave,
        setPhoneNumberSave,
        sanityUser,
        handlePhoneNumberSave,
        handleAddressSave,
        searchQuery,
        setSearchQuery,
        products,
        setProducts,
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
