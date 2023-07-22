import dotenv from "dotenv";
dotenv.config({});

class Config {
  // public PAYLOAD_ADMIN: string | undefined;
  // public CLIENT_URL: string | undefined;
  // public SERVER_URL:string | undefined;
  // public PORT: string | undefined;

  public S3_ENDPOINT: string | undefined;
  public S3_ACCESSKEYID: string | undefined;
  public S3_SECRETACCESSKEY: string | undefined;
  public S3_REGION: string | undefined;
  public S3_BUCKET: string | undefined;
  public S3_URL_REPOSITORY: string | undefined;
  public BACKEND_URL: string | undefined;
  public FRONTEND_URL: string | undefined;
  public S3_BUCKET_POSTS: string | undefined;
  public S3_POSTS_URL_REPOSITORY: string | undefined;

  
  constructor() {
    // this.PAYLOAD_ADMIN = process.env.PAYLOAD_ADMIN;
    // this.CLIENT_URL = process.env.CLIENT_URL;
    // this.SERVER_URL= process.env.SERVER_URL;
    // this.PORT = process.env.PORT;

    this.S3_ENDPOINT = process.env.S3_ENDPOINT;
    this.S3_ACCESSKEYID = process.env.S3_ACCESSKEYID;
    this.S3_SECRETACCESSKEY = process.env.S3_SECRETACCESSKEY;
    this.S3_REGION = process.env.S3_REGION;
    this.S3_BUCKET = process.env.S3_BUCKET;
    this.S3_URL_REPOSITORY = process.env.S3_URL_REPOSITORY;
    this.BACKEND_URL = process.env.BACKEND_URL;
    this.FRONTEND_URL = process.env.FRONTEND_URL;
    this.S3_BUCKET_POSTS = process.env.S3_BUCKET_POSTS;
    this.S3_POSTS_URL_REPOSITORY = process.env.S3_POSTS_URL_REPOSITORY;

  }

  public validateConfig(): void {
    console.log(this);
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined`);
      }
    }
  }
}

export const config: Config = new Config();
