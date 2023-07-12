import { CollectionConfig } from "payload/types";
import { isApplicantOrAdmin } from "../accessControl/applicant/isApplicantOrAdmin";

const Applicant: CollectionConfig = {
  slug: "applicants",
  
  auth:{
    tokenExpiration:60*60*24*30,
    cookies:{
      sameSite:"none",
      secure:true,
    }
  },
  admin: {
    useAsTitle: "name",
    
  },
  
  access: {
    read: () => true,
    create: () => true,
    update: isApplicantOrAdmin,
    delete: isApplicantOrAdmin,
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
