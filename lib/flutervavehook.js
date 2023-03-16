import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useStateContext } from "../context/StateContext";
import { client } from "./client";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
export default function FlutterButton() {
  const {
    user,
    cartItems,
    totalPrice,
    totalQuantities,
    address,
    phoneNumber,
    sanityUser,
  } = useStateContext();
  const [paymentResponse, setPaymentResponse] = useState(null);
  const router = useRouter();
  console.log(phoneNumber);
  // Iterate over cartItems and create a new array of objects
  const products = cartItems?.map((item) => {
    return {
      name: item.name, // Name of the product
      quantity: item.quantity, // Quantity of the product
      price: item.price, // Price of the product
    };
  });

  // Add the products array to the config object
  const config = {
    public_key: "FLWPUBK_TEST-a5014b0f786163c50af505a37165f1f4-X",
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

  const handlePaymentResponse = async (response) => {
    console.log("response", response);
    setPaymentResponse(response);
    if (response.status === "successful") {
      try {
        const order = {
          customer: {
            _type: "reference",
            _ref: sanityUser._id,
          },
          products: products.map((product) => ({
            _type: "reference",
            _ref: product._id,
          })),
          payment: {
            amount: response.charged_amount,
            currency: response.currency,
            status: response.status,
            txRef: response.tx_ref,
            flwRef: response.flw_ref,
            chargeResponseCode: response.charge_response_code,
            chargeResponseMessage: response.charge_response_message,
            createdAt: response.created_at,
          },
        };
        await client.create({ type: "order", ...order });
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
    <button
      type="button"
      className="btn"
      onClick={() => {
        handleFlutterPayment({
          callback: handlePaymentResponse,
          onClose: () => {
            toast.loading("Redirecting...");
            router.push("/success");
          },
        });
      }}
    >
      Pay with FlutterWave
    </button>
  );
}
