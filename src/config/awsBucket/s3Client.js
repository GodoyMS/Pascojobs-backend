
import { S3 } from "@aws-sdk/client-s3";
import { config } from "../configEnvs";

const s3Client = new S3({
    forcePathStyle: false, // Configures to use subdomain/virtual calling format.
    endpoint: config.S3_ENDPOINT,
    region: config.S3_REGION,
    credentials: {
      accessKeyId: config.S3_ACCESSKEYID,
      secretAccessKey: config.S3_SECRETACCESSKEY
    }
});

export { s3Client };