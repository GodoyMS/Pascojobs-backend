import type { Access } from "payload/config";





export const isApplicantOrAdmin: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (user.adminRoles && user.adminRoles.some((role) => role === "admin")) {
    return true;
  } else if (user.applicantRole && user.applicantRole==="applicant") {
    
    return true
  }else {
    return false
  }

};
