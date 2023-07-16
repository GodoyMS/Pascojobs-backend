import { CollectionConfig } from "payload/types";

const Admins: CollectionConfig = {
  slug: "admins",
  auth: {
    forgotPassword: {
      generateEmailSubject: ({ req, user }) => {
        return `Hey ${user.email}, reset your password!`;
      }
    }  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed

    // Email added by default
    {
      name: "name",
      type: "text",
    },
    {
      name: "adminRoles",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "select",
      hasMany: true,
      defaultValue: ["admin"],
      access: {
        // Only admins can create or update a value for this field
        create: () => true,
        update: () => true,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Editor",
          value: "editor",
        },
      ],
    },
  ],
};

export default Admins;
