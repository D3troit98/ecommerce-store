import React, { useState, useMemo } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useStateContext } from "../context/StateContext";
import { client } from "./client";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
export default function FlutterButton() {
  const {
    user,
    cartItems,
    totalPrice,
    totalQuantities,
    address,
    phoneNumber,
    sanityUser,
    setShowCart,
  } = useStateContext();

  const router = useRouter();
  const products = useMemo(() => {
    return cartItems?.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      _id: item._id,
      _type: item._type,
    }));
  }, [cartItems]);

  const config = {
    public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.providerData[0].email,
      phone_number: phoneNumber,
      name: user.providerData[0].displayName,
    },
    customizations: {
      title: "Detroit Store",
      description: `Payment for ${totalQuantities} items in cart`,
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
    // Add the products array to the metadata field
    metadata: {
      custom_fields: [
        {
          display_name: "Cart Items",
          variable_name: "cart_items",
          value: JSON.stringify(products),
        },
        {
          display_name: "Address",
          variable_name: "address",
          value: address,
        },
      ],
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  // const textingSanityStore = () => {
  //   const order = {
  //     user: {
  //       _type: "reference",
  //       _ref: sanityUser._id,
  //     },
  //     items: products.map((product) => ({
  //       _key: uuidv4(),
  //       _type: "reference",
  //       _ref: product._id,
  //     })),
  //     address: address,
  //   };
  //   console.log("product", products);
  //   console.log("order: ", order);
  // };
  const handlePaymentResponse = async (response) => {
    if (response.status === "successful") {
      try {
        const order = {
          user: {
            _type: "reference",
            _ref: sanityUser._id,
          },
          items: products.map((product) => ({
            _key: uuidv4(),
            _type: "reference",
            _ref: product._id,
          })),
          charge_response_code: response.charge_response_code,
          charge_response_message: response.charge_response_message,
          charged_amount: response.charged_amount,
          created_at: response.created_at,
          currency: response.currency,
          flw_ref: response.flw_ref,
          status: response.status,
          transaction_id: response.transaction_id,
          tx_ref: response.tx_ref,
          address: address,
        };

        // use the client to create the order in Sanity
        toast.loading("Redirecting...");
        client
          .create({
            ...order,
            _type: "order", // specify the document type
          })
          .then((createdOrder) => {
            console.log("Order created:", createdOrder);
            // handle success here

            toast.success("Order created");
            router.push("/success");
          })
          .catch((error) => {
            console.error("Error creating order:", error.message);
            toast.error("Error creating order: " + error.message);
            // handle error here
          });
      } catch (error) {
        console.error("Error creating order:", error.message);
        toast.error("Error creating order: " + error.message);
      }
    } else {
      // payment unsuccessful, show error message and option to try again
      toast.error("Payment was not successful. Please try again.");
    }
  };

  return (
    <>
      {address && phoneNumber ? (
        <button
          type="button"
          className="btn"
          onClick={() => {
            handleFlutterPayment({
              callback: handlePaymentResponse,
              onClose: () => {},
            });
          }}
        >
          Pay with FlutterWave
        </button>
      ) : (
        <button
          type="button"
          className="btn"
          onClick={() => {
            router.push("/dashboard");
            setShowCart(false);
          }}
        >
          Enter Address &amp; Phone Number
        </button>
      )}
    </>
  );
}
