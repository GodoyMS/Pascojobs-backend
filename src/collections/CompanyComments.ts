import { CollectionConfig } from "payload/types";
import { isEmployerOrAdminJobs } from "../accessControl/jobs/isEmployerOrAdmin";
import { isEmployerSelfOrAdminJobs } from "../accessControl/jobs/isEmployerSelfOrAdmin";
const CompanyComments: CollectionConfig = {
  slug: "companyComments",
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
      name: "company",
      type:"relationship",
      relationTo:"employers"
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "applicants",
    },
    {
      name:"stars",
      type:"number"
    }
    
   
  

   
  ],
};

export default CompanyComments;
