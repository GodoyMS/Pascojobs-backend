import type { Access } from "payload/config";
export const isEmployeeSelfOrAdminApplications: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (user.adminRoles && user.adminRoles.some((role) => role === "admin")) {
    return true;
  }

  if(user.employerRole && user.employerRole=== "employer"){
    return {
      author: {
        equals: user.id,
      },
    };

  }

  if(user.applicantRole && user.applicantRole=== "applicant"){
    return {
      applicant: {
        equals: user.id,
      },
    };

  }


};
