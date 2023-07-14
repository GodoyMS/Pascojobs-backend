import { CollectionConfig } from "payload/types";
import { isEmployerOrAdmin } from "../accessControl/employer/isEmployerOrdAdmin";

const Employer: CollectionConfig = {
  slug: "employers",
  auth: {
    tokenExpiration: 60 * 60 * 24 * 30,
  },
  admin: {
    useAsTitle: "name",
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Email added by default
    {
      name: "name",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "region",
      type: "text",
      required: false,
    },
    {
      name: "province",
      type: "text",
      required: false,
    },
    {
      name: "district",
      type: "text",
      required: false,
    },
    {
      name: "profile",
      type: "text",
    },
    { name: "verified", type: "text", defaultValue: "no" },
    {
      name: "employerRole",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "text",
      defaultValue: "employer",
    },
  ],
};

export default Employer;
