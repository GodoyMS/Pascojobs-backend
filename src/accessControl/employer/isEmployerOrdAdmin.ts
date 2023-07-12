import type { Access } from "payload/config";
export const isEmployerOrAdmin: Access = ({ req: { user } }) => {
  if (!user) return false;

  if (user.adminRoles && user.adminRoles.some((role) => role === "admin")) {
    return true;
  }

  return {
    id: {
      equals: user.id,
    },
  };
};
