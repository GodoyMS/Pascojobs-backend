import { CollectionConfig } from "payload/types";

const AdsReports: CollectionConfig = {
  slug: "adsReports",
  admin: {
    useAsTitle: "job",
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

export default AdsReports;
