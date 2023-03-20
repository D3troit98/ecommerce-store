import React, { useEffect, useState } from "react";
import { client } from "../../lib/client";
import { useStateContext } from "../../context/StateContext";
import Link from "next/link";
const Orders = () => {
  const { sanityUser } = useStateContext();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrderData = async () => {
      const orderQuery = `*[_type == "order" && user._ref == "${sanityUser._id}"]{
        _id,
        address,
        charge_response_code,
        charge_response_message,
        charged_amount,
        created_at,
        currency,
        flw_ref,
        status,
        transaction_id,
        tx_ref,
        user->,
        items[]->{_id, name, price, details}
      }`;
      const orderData = await client.fetch(orderQuery);
      setOrders(orderData);
      console.log(orderData);
    };
    fetchOrderData();
  }, [sanityUser]);
  console.log("orders", orders);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Orders header */}
      <h2 className="text-lg leading-6 font-medium text-gray-900 mb-6">
        Orders
      </h2>

      {orders.length > 0 ? (
        // Show orders if there are any
        <div className="flex flex-wrap -mx-4">
          {/* Display each order in a column */}
          {orders.map((order) => (
            <div key={order._id} className="w-full lg:w-1/3 px-4 mb-8">
              <div className="border border-gray-200 rounded-lg shadow-md p-6 h-full">
                <div className="flex justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Order {order.transaction_id}
                  </h3>
                  <span className="text-gray-600">
                    {new Date(order.created_at).toLocaleDateString()}
                  </span>
                </div>
                <ul className="space-y-4 mb-4">
                  {order.items.map((item, i) => (
                    <li
                      key={item ? item?._id : i}
                      className="flex items-center justify-between"
                    >
                      <span className="font-medium">{item?.name}</span>
                      <span className="text-gray-600">{item?.price}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="text-gray-600">{order.charged_amount}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Status</span>
                  <span
                    className={`${
                      order.status === "order shipped"
                        ? "text-green-600"
                        : order.status === "order payed"
                        ? "text-blue-600"
                        : "text-gray-600"
                    } font-medium`}
                  >
                    {order.status || "order pending"}
                  </span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Shipping State</span>
                  <span className="text-gray-600">
                    {order.shipping_state || "order pending"}
                  </span>
                </div>
                <Link href={`/order/${order._id}`}>
                  <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-400">
                    SEE DETAILS
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show empty state if there are no orders
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            You have placed no orders yet!
          </h3>
          <p className="text-gray-600">
            All your orders will be saved here for you to access their state
            anytime.
          </p>
        </div>
      )}
    </div>
  );
};

export default Orders;
