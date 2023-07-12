import type { Access } from "payload/config";





export const isApplicantSelfOrAdmin: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (user.adminRoles && user.adminRoles.some((role) => role === "admin")) {
    return true;
  } else if (user.applicantRole && user.applicantRole==="applicant") {
    
    return{
      id:{
        equals:user.id
      }
    }
  }else {
    return false
  }

};
