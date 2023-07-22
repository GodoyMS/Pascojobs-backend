import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Admins from "./collections/Admins";
import Jobs from "./collections/Jobs";
import Applicant from "./collections/Applicant";
import Employer from "./collections/Employer";
import Categories from "./collections/Categories";
import WorkShifts from "./collections/WorkShifts";
import WorkExperience from "./collections/WorkExperience";
import Contracts from "./collections/Contracts";
import FavoriteJobs from "./collections/FavoriteJobs";
import ProfilesUpload from "./collections/ProfilesUpload";
import CvUploads from "./collections/CvUploads";
import Applications from "./collections/Applications";
import { config } from './config/configEnvs';
import Reports from "./collections/Reports";
import JobReports from "./collections/JobReports";
import CompanyComments from "./collections/CompanyComments";
import CompanyRecommendations from "./collections/CompanyRecommendations";
import AdsReports from "./collections/AdsReports";
import UserAds from "./collections/UserAds";
import Ads from "./collections/Ads";
import PostsImagesUpload from "./collections/PostsImagesUpload";


export default buildConfig({
  serverURL: config.BACKEND_URL,
  admin: {
    user: Admins.slug,
//     webpack:(config)=>{
//       config.resolve.fallback={
//         "fs": false,
//         "os": false,
//        "path": false,

//       }
//     return config
// }
 
},
  collections: [
    Applicant,
    Admins,
    Jobs,
    Applications,
    Employer,
    Categories,
    Contracts,
    WorkShifts,
    WorkExperience,
    FavoriteJobs,
    ProfilesUpload,
    PostsImagesUpload,
    CvUploads,
    Reports,
    JobReports,
    CompanyComments,
    CompanyRecommendations,
    AdsReports,
    UserAds,
    Ads
    
    // Add Collections here
    // Examples,
  ],

  email: {
    transportOptions: {
      host: 'smtp-relay.brevo.com',
      auth: {
        user: 'pascojobsperu@gmail.com',
        pass: 'SyJcUfrXA97dVhCD'
    },
    secure:false,
      port: 587,
      tls: {
        rejectUnauthorized: false 
      },
    },
    fromName: "Pasco Jobs",
    fromAddress: "pascojobsperu@gmail.com",
  },
  // email: {
  //   transportOptions: {
  //     host: 'smtp.sendgrid.net',
  //     auth: {
  //       user: 'apikey',
  //       pass: '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'
  //   },
  //   secure:false,
  //     port: 587,
  //     tls: {
  //       rejectUnauthorized: false 
  //     },
  //   },
  //   fromName: "Pasco Jobs",
  //   fromAddress: "pascojobsperu@gmail.com",
  // },  
  csrf: [
    // whitelist of domains to allow cookie auth from
    "http://localhost:19006",
    "https://your-other-frontend-app.com",
    "http://192.168.1.4:19000",
    "127.0.0.1:5555",
    "http://127.0.0.1:5555",
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
    disable:false,
    disablePlaygroundInProduction:false
  },
  express: {
    json: {
      limit: 5 * 1024 * 1024,
    },
  },
});
