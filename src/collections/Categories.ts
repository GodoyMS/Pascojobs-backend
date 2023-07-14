import { CollectionConfig,Access } from 'payload/types';



const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    update:()=>true,
    create:()=>true,
    delete:()=>true

  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default Categories;