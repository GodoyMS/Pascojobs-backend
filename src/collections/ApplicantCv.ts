import path from 'path';
import type { CollectionConfig } from 'payload/types';

const ApplicantCvMedia: CollectionConfig = {
  slug: 'applicantCvMedia',
  
  

  upload: {
    staticDir: path.resolve(__dirname, '../../media/applicantCv'),
    // Specify the size name that you'd like to use as admin thumbnail


    adminThumbnail: 'thumbnail',   

  },
  fields: [],
  access:{
    read:()=>true,
    create:()=>true
  }
};

export default ApplicantCvMedia;
