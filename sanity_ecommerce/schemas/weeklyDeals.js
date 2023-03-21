export default {
  name: "weeklyDeal",
  title: "Weekly Deal",
  type: "document",
  fields: [
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
    },
    {
      name: "discount",
      title: "Discount Percentage",
      type: "number",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
  preview: {
    select: {
      title: "product.name",
      subtitle: "discount",
      media: "product.image.0",
    },
  },
};
