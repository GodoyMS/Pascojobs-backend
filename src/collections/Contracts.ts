import { CollectionConfig,Access } from 'payload/types';



const Contracts: CollectionConfig = {
  slug: 'contracts',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create:()=>true,
    update:()=>true

  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default Contracts;