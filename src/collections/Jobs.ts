import { CollectionConfig } from "payload/types";
import { isEmployerOrAdminJobs } from "../accessControl/jobs/isEmployerOrAdmin";
import { isEmployerSelfOrAdminJobs } from "../accessControl/jobs/isEmployerSelfOrAdmin";
const Jobs: CollectionConfig = {
  slug: "jobs",
  admin: {
    defaultColumns: ["title", "author", "category", "salary", "status"],
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
      relationTo: "employers",
    },
    {
      name: "publishedDate",
      type: "date",
    },
    {
      name: "category",
      type: "relationship",
      hasMany: false,
      relationTo: "categories",
    },

    {
      name: "workShift",
      type: "relationship",
      hasMany: false,
      relationTo: "workShifts",
    },
    {
      name: "contract",
      type: "relationship",
      hasMany: false,
      relationTo: "contracts",
    },
    {
      name: "workExperience",
      type: "relationship",
      hasMany: false,
      relationTo: "workExperience",
    },
   
    // {
    //   name: "description",
    //   type: "array",
    //   label: "Descripción",
    //   required: true,
    //   access: {
    //     read: () => true,
    //   },
    //   minRows: 1,
    //   maxRows: 15,
    //   labels: {
    //     singular: "Parrafo",
    //     plural: "Parrafos",
    //   },
    //   fields: [
    //     {
    //       name: "Item",
    //       type: "text",
    //     },
    //   ],
    // },
    { name: "description", type: "textarea", required: true},
    {
      name: "salary",
      type: "number",
    },

    {
      name: "responsabilities",
      type: "array",
      label: "Responsabilidades",
      required: false,
      minRows: 0,
      maxRows: 15,
      labels: {
        singular: "Responsabilidad",
        plural: "Responsabilidades",
      },
      fields: [
        {
          name: "item",
          type: "text",
        },
      ],
    },
    {
      name: "requirements",
      type: "array",
      label: "Requisitos",
      required: false,
      minRows: 0,
      maxRows: 15,
      labels: {
        singular: "Requisito",
        plural: "Requisitos",
      },
      fields: [
        {
          name: "item",
          type: "text",
        },
      ],
    },
    {
      name: "benefits",
      type: "array",
      label: "Beneficios",
      required: false,
      minRows: 0,
      maxRows: 15,
      labels: {
        singular: "Beneficio",
        plural: "Beneficios",
      },
      fields: [
        {
          name: "item",
          type: "text",
        },
      ],
    },
    {
      name: "applicants",
      type: "array",
      maxRows: 900,
      fields: [
        {
          name: "applicant",
          type: "relationship",
          relationTo: "applicants",
        },
      ],
    },
    {
      name: "province",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type:"text",
     
      access: {
        // Only admins can create or update a value for this field
        create: () => true,
        update: () => true,
      },
     
    },
    {
      name:"featured",
      type:"select",
      options:["si","no"],
      defaultValue:"no"
      },
    {
      name:"district",
      type:"text"
    },
    {
      name:"expired",
      type:"text",
      defaultValue:"no"
    }
  ],
};

export default Jobs;
