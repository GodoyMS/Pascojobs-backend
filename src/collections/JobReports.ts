import { CollectionConfig } from "payload/types";
import { isEmployerOrAdminJobs } from "../accessControl/jobs/isEmployerOrAdmin";
import { isEmployerSelfOrAdminJobs } from "../accessControl/jobs/isEmployerSelfOrAdmin";
const JobReports: CollectionConfig = {
  slug: "jobReports",
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
      name: "job",
      type:"relationship",
      relationTo:"jobs"
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

export default JobReports;
