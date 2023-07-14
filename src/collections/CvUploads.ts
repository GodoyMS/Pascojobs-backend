import { CollectionConfig, Access } from "payload/types";
import { UploadImageBucket } from "../hooks/uploadImage";
import { UploadDocumentToBucket } from "../hooks/uploadCV";

const CvUploads: CollectionConfig = {
  slug: "cvuploads",

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
      handler: async (req, res) => {
        const { base64, name } = req.body;
        const { data, url } = await UploadDocumentToBucket(base64, name);

        if (data) {
          res.status(200).send({ message: "CV   Uploaded", url });
        } else {
          res.status(404).send({ error: "not found" });
        }
      },
    },
  ]

};

export default CvUploads;
