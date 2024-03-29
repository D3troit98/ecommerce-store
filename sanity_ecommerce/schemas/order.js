// order.js
export default {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "user",
      title: "User",
      type: "reference",
      to: [{ type: "user" }],
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
    {
      name: "charge_response_code",
      title: "Charge Response Code",
      type: "string",
    },
    {
      name: "charge_response_message",
      title: "Charge Response Message",
      type: "string",
    },
    {
      name: "charged_amount",
      title: "Charged Amount",
      type: "number",
    },
    {
      name: "created_at",
      title: "Created At",
      type: "datetime",
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
    },
    {
      name: "flw_ref",
      title: "Flutterwave Reference",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "transaction_id",
      title: "Transaction ID",
      type: "number",
    },
    {
      name: "tx_ref",
      title: "Transaction Reference",
      type: "number",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "shipping_state",
      title: "Shipping State",
      type: "string",
    },
  ],
  preview: {
    select: {
      name: "transaction_id",
      email: "user.email",
    },
    prepare({ name, email }) {
      return {
        title: `${name} (${email})`,
      };
    },
  },
};
