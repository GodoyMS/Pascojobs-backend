import type { Access } from "payload/config";

export const isEmployerOrAdminJobs: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (user.adminRoles && user.adminRoles.some((role) => role === "admin")) {
    return true;
  } else if (user.employerRole && user.employerRole==="employer") {
    return true;
  }else {
    return false
  }

};


