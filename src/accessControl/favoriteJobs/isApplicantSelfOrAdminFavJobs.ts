import { Access } from "payload/config";
import { AccessArgs } from "payload/config";
import { AccessResult } from "payload/config";
export const isApplicantSelfOrAdminFavJobs:Access = ({ req: { user },id })=> {
    if (!user) return false;
  
    if (user.adminRoles && user.adminRoles.some((role) => role === "admin")) {
      return true;
    } else if (user.applicantRole && user.applicantRole==="applicant") {
        return{
            user:{
                equals:user.id
            }
        }
      
      
    }else {
      return false
    }
  
  };
  