

// Imports your configured client and any necessary S3 commands.
import { ListBucketsCommand, S3Client } from "@aws-sdk/client-s3";
import { CreateBucketCommand } from "@aws-sdk/client-s3";

// Specifies a path within your bucket and the file to upload.


// const bucketParams = { Bucket: "example-second-bucket" };

// Uploads the specified file to the chosen path.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../config/awsBucket/s3Client";
import { config } from "../config/configEnvs";

export async function UploadDocumentToBucket(base64,nameImage){

  

  const base64Data = new Buffer.from(base64.replace(/^data:application\/\w+;base64,/, ""), 'base64');
  const type = base64.split(';')[0].split('/')[1];

 const bucketParams = {
  Bucket:config.S3_BUCKET,
  Key: `${new Date().toISOString()}-${nameImage}.${type}`,
  Body:base64Data,
  ContentEncoding: 'base64', // required
  ContentType: `application/${type}` ,
    ACL: "public-read"  
};
  try {
    const data = await s3Client.send(new PutObjectCommand(bucketParams));
  
    console.log(
      "Successfully uploaded cv: " +
        bucketParams.Bucket + 
        "/" +
        bucketParams.Key +"data:" + data.ETag
    );
    return {data,url:`${config.S3_URL_REPOSITORY}/${bucketParams.Key}`};
  } catch (err) {
    console.log("Error", err);
  }
};

