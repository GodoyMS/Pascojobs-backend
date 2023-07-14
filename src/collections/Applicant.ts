import { CollectionConfig } from "payload/types";

const Applicant: CollectionConfig = {
  slug: "applicants",
  
  auth:{
    tokenExpiration:60*60*24*30,

  },
  admin: {
    useAsTitle: "name",
    
  },
  
  access: {
    read: () => true,
    create: () => true,
    update: ()=>true,
    delete: ()=>true,
  },
  fields: [
    // Email added by default
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "position",
      type: "text",
      required: false,
    },
    {
      name: "description",
      type: "text",
      required: false,
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
      name: "sex",
      type: "text",
      required: false,
    },
    {
      name: "age",
      type: "number",
      required: false,
    },
    {
      name: "profile",
      type: "text"    
    },
    {
      name: "cv",
      type: "text"   
    },

    {
      name: "applicantRole",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "text",
      defaultValue: "applicant",
    },
  ],
};

export default Applicant;
