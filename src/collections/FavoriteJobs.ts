import { CollectionConfig } from "payload/types";
import { isApplicantSelfOrAdmin } from "../accessControl/applicant/isApplicantSelfOrAdmin";
import { isApplicantSelfOrAdminFavJobs } from "../accessControl/favoriteJobs/isApplicantSelfOrAdminFavJobs";
const FavoriteJobs: CollectionConfig = {
  slug: "favoriteJobs",
  admin: {
    defaultColumns: ["job", "user"],
    useAsTitle: "job",
  },
  access: {
    read: isApplicantSelfOrAdminFavJobs,
    create:isApplicantSelfOrAdmin,
    delete:isApplicantSelfOrAdminFavJobs,
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
