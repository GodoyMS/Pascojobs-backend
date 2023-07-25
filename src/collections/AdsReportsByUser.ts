import { CollectionConfig } from "payload/types";

const AdsReportsByUser: CollectionConfig = {
  slug: "adsReportsByUser",
  admin: {
    useAsTitle: "ad",
  },
 
  access: {
    read: () => true,
    update: ()=>true,
    delete: ()=>true,
    create: ()=>true,
  },
  fields: [
    {
      name: "ad",
      type:"relationship",
      relationTo:"ads"
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "applicants",
    },
    {
      name:"reason",
      type:"text"
    }
  ],
};

export default AdsReportsByUser;
