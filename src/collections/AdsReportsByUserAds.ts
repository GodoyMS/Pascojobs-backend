import { CollectionConfig } from "payload/types";

const AdsReportsByUserAds: CollectionConfig = {
  slug: "adsReportsByUserAds",
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
      relationTo: "userAds",
    },
    {
      name:"reason",
      type:"text"
    }
  ],
};

export default AdsReportsByUserAds;
