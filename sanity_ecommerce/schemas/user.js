// user.js
export default {
    name: "user",
    title: "User",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "phoneNumber",
        title: "Phone Number",
        type: "string",
      },
      {
        name: "address",
        title: "Address",
        type: "string",
      },
    ],
    preview: {
      select: {
        name: "name",
        email: "email",
      },
      prepare({ name, email }) {
        return {
          title: name,
          subtitle: email,
        };
      },
    },
  };
  