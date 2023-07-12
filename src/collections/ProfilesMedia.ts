import path from 'path';
import type { CollectionConfig } from 'payload/types';

const ProfilesMedia: CollectionConfig = {
  slug: 'profileMedia',

  upload: {
    staticDir: path.resolve(__dirname, '../../media/profiles'),
    // Specify the size name that you'd like to use as admin thumbnail
    adminThumbnail: 'thumbnail',
    imageSizes: [
      {
        height: 400,
        width: 400,
        crop: 'center',
        name: 'thumbnail',
      },
      {
        width: 900,
        height: 450,
        crop: 'center',
        name: 'sixteenByNineMedium',
      },
    ],
  },
  fields: [],
  access:{
    read:()=>true,
    create:()=>true
  }
};

export default ProfilesMedia;
