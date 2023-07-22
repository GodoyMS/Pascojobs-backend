import { CollectionConfig } from "payload/types";
import { UploadImagePostBucket } from "../hooks/uploadPostImage";
const PostsImagesUpload: CollectionConfig = {
  slug: "postsImagesUpload",
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

        try {
          const { base64, name } = req.body;
          const { data, url } = await UploadImagePostBucket(base64, name);
  
          if (data) {
            res.status(200).send({ message: "Uploaded", url });
          } else {
            res.status(404).send({ error: "not found" });
          }
          
        } catch (error) {
          console.log(error)
        }
    
      },
    },
  ]

};

export default PostsImagesUpload;
