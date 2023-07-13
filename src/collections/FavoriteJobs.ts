import { CollectionConfig } from "payload/types";

const FavoriteJobs: CollectionConfig = {
  slug: "favoriteJobs",
  admin: {
    defaultColumns: ["job", "user"],
    useAsTitle: "job",
  },
  access: {
    read: ()=>true,
    create:()=>true,
    delete:()=>true,
    update:()=>false
  },
  fields: [

    {
      name: "job",
      type: "relationship",
      hasMany:false,
      relationTo: "jobs",      
    },
    {
      name: "user",
      type: "relationship",
      hasMany:false,
      relationTo: "applicants",
    },
  ],
};

export default FavoriteJobs;
