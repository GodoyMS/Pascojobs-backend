import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Admins from "./collections/Admins";
import Jobs from "./collections/Jobs";
import Applicant from "./collections/Applicant";
import ProfilesMedia from "./collections/ProfilesMedia";
import Employer from "./collections/Employer";
import Categories from "./collections/Categories";
import WorkShifts from "./collections/WorkShifts";
import WorkExperience from "./collections/WorkExperience";
import Contracts from "./collections/Contracts";
import FavoriteJobs from "./collections/FavoriteJobs";
import ApplicantCvMedia from "./collections/ApplicantCv";
import ProfilesUpload from "./collections/ProfilesUpload";
import CvUploads from "./collections/CvUploads";
import Applications from "./collections/Applications";
import { config } from "./config/configEnvs";
export default buildConfig({
  serverURL: config.BACKEND_URL,
  admin: {
    user: Admins.slug,
  },
  collections: [
    Applicant,
    Admins,
    Jobs,
    Applications,

    Employer,
    Categories,
    ProfilesMedia,
    ApplicantCvMedia,
    Contracts,
    WorkShifts,
    WorkExperience,
    FavoriteJobs,
    ProfilesUpload,
    CvUploads,
    // Add Collections here
    // Examples,
  ],
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
  },
  express: {
    json: {
      limit: 5 * 1024 * 1024,
    },
  },
});
