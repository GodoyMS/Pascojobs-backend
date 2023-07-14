import { CollectionConfig,Access } from 'payload/types';



const WorkExperience: CollectionConfig = {
  slug: 'workExperience',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create:()=>true,
    delete:()=>true,
    update:()=>true,

  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default WorkExperience;