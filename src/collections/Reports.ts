import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Reports: CollectionConfig = {
  slug: 'reports',
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'email',
      type: 'text',
    },
    {
      name:"message",
      type:"textarea"
    },
    {
      name:"phone",
      type:"text"
    }
  ],
}

export default Reports;