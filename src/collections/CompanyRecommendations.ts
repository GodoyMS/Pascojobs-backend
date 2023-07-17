import { CollectionConfig } from "payload/types";
import { isEmployerOrAdminJobs } from "../accessControl/jobs/isEmployerOrAdmin";
import { isEmployerSelfOrAdminJobs } from "../accessControl/jobs/isEmployerSelfOrAdmin";
const CompanyRecommendations: CollectionConfig = {
  slug: "companyRecommendations",
  admin: {
    useAsTitle: "company",
  },
 
  access: {
    read: () => true,
    update: ()=>true,
    delete: ()=>true,
    create: ()=>true,
  },
  fields: [
    {
      name: "company",
      type:"relationship",
      relationTo:"employers",
      hasMany:false
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "applicants",
      hasMany:false
    },
    
   
  

   
  ],
};

export default CompanyRecommendations;
