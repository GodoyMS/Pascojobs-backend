import { CollectionConfig,Access } from 'payload/types';
import { isEmployeeSelfOrAdminApplications } from '../accessControl/application/isEmployeeSelfOrAdminApplications';



const Applications: CollectionConfig = {
  slug: 'applications',
  admin: {
    useAsTitle: 'applicant',
  },
  access: {
    // read: isEmployeeSelfOrAdminApplications,
    read:()=>true,
    create:()=>true,
    delete:()=>true


  },
  fields: [
    {
      name: 'applicant',
      type: "relationship",
      relationTo:"applicants",
      hasMany:false,
    },
    {
        name:"job",
        type:"relationship",
        relationTo:"jobs",
        hasMany:false,
        maxDepth:1
    },
    {
        name:"author",
        type:"relationship",
        relationTo:"employers",
        hasMany:false,
        maxDepth:0
    },
    {
        name:"finalist",
        type:"text",
        defaultValue:"no"
    }

  ],

}

export default Applications;