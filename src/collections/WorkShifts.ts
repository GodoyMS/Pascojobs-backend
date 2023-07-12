import { CollectionConfig,Access } from 'payload/types';



const WorkShifts: CollectionConfig = {
  slug: 'workShifts',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,

  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default WorkShifts;