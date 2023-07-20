import { CollectionConfig } from "payload/types";
import { isEmployerOrAdminJobs } from "../accessControl/jobs/isEmployerOrAdmin";
import { isEmployerSelfOrAdminJobs } from "../accessControl/jobs/isEmployerSelfOrAdmin";
const Ads: CollectionConfig = {
  slug: "ads",
  admin: {
    defaultColumns: ["title", "author"],
    useAsTitle: "title",
  },
 
  access: {
    read: () => true,
    update: ()=>true,
    delete: ()=>true,
    create: ()=>true,
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "author",
      type: "relationship",
      relationTo: "userAds",
      hasMany:false
    },
    {
        name:"image",
        type:"text"
    },   
    { name: "description", type: "textarea", required: true}, 
 
    {
      name: "province",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type:"text",
     
      access: {
        // Only admins can create or update a value for this field
        create: () => true,
        update: () => true,
      }     
    },
    {
      name:"district",
      type:"text"
    },
    {
    name:"featured",
    type:"select",
    options:["si","no"],
    defaultValue:"no"
    },
    {
      name:"expired",
      type:"text",
      defaultValue:"no"
    }
  ],
};

export default Ads;
