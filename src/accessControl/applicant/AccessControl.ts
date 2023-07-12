import { Access } from "payload/config";

export const isUserSelfOrAdmin:Access=({req:{user}})=>{    
  console.log(user);
    if(!user)return false;
    
    if (user.adminroles && user.adminroles.some(role => role === 'admin')) {
        return true;
      }
      // allow any other users to update only oneself
      return { 
        author: {
            equals: user.id,
      }}
      

      
    };
