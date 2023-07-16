import { CollectionConfig } from "payload/types";
import { forgotPasswordTemplate } from "../services/email/templates/forgot-password/forgot-password-template";

const Applicant: CollectionConfig = {
  slug: "applicants",
  
  auth: {
    forgotPassword: {
      generateEmailSubject: ({ req, user }) => {
        return `Hey ${user.email}, restablece tu contraseña`;
      },

      generateEmailHTML: ({ req, token, user }) => {
        const resetPasswordURL = `https://pascojobsperu.com/restablecer-contraseña?token=${token}`;

        return forgotPasswordTemplate.passwordResetTemplate(
          user?.email,
          resetPasswordURL
        );
      },
    },
  },
  admin: {
    useAsTitle: "name",    
  },
  
  access: {
    read: () => true,
    create: () => true,
    update: ()=>true,
    delete: ()=>true,
  },
  fields: [
    // Email added by default
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "position",
      type: "text",
      required: false,
    },
    {
      name: "description",
      type: "text",
      required: false,
    },
    {
      name: "region",
      type: "text",
      required: false,
    },
    {
      name: "province",
      type: "text",
      required: false,
    },
    {
      name: "district",
      type: "text",
      required: false,
    },
    {
      name: "sex",
      type: "text",
      required: false,
    },
    {
      name: "age",
      type: "number",
      required: false,
    },
    {
      name: "profile",
      type: "text"    
    },
    {
      name: "cv",
      type: "text"   
    },

    {
      name: "applicantRole",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "text",
      defaultValue: "applicant",
    },
  ],
};

export default Applicant;
