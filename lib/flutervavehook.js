import Reac from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { useStateContext } from "../context/StateContext";
export default function FlutterButton() {
  const { user, cartItems, totalPrice, totalQuantities } = useStateContext();

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
    public_key: "FLWPUBK_TEST-5419243573a80e991b76c98897b1a477-X",
    tx_ref: Date.now(),
    amount: totalPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.providerData[0].email,
      phone_number: sanityUser.phoneNumber,
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
      ],
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <button
      type="button"
      className="btn"
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            closePaymentModal(); // this will close the modal programmatically
          },
          onClose: () => {},
        });
      }}
    >
      Pay with FlutterWave
    </button>
  );
}
