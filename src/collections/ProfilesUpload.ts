import { CollectionConfig, Access } from "payload/types";
import { UploadImageBucket } from "../hooks/uploadImage";

const ProfilesUpload: CollectionConfig = {
  slug: "profilesupload",

  access: {
    read: () => true,
    create:()=>true,
    delete:()=>true,
    update:()=>true,
  },
  fields: [
 
  ],
  endpoints: [
    {
      path: "/upload",
      method: "post",
      handler: async (req, res, next) => {
        const { base64, name } = req.body;
        const { data, url } = await UploadImageBucket(base64, name);

        if (data) {
          res.status(200).send({ message: "Uploaded", url });
        } else {
          res.status(404).send({ error: "not found" });
        }
      },
    },
  ]

};

export default ProfilesUpload;
