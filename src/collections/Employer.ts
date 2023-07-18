import { CollectionConfig,PayloadRequest } from "payload/types";
import { isEmployerOrAdmin } from "../accessControl/employer/isEmployerOrdAdmin";
import { forgotPasswordTemplate } from "../services/email/templates/forgot-password/forgot-password-template";
import { User } from "payload/dist/auth";
interface GenerateEmailHTMLParams {
  req: PayloadRequest; // Replace 'any' with the appropriate type for the 'req' object
  token: string;
  user: User; // Assuming 'User' is the type of your user object and has an 'email' property
}
const Employer: CollectionConfig = {
  slug: "employers",
  auth: {
    forgotPassword: {
      generateEmailSubject: ({ req, user }) => {
        return `Hey ${user.email}, restablece tu contraseña`;
      },

      generateEmailHTML: ({ req, token, user }:GenerateEmailHTMLParams) => {
        const resetPasswordURL = `https://pascojobsperu.com/empresas/restablecer-contraseña?token=${token}`;

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
    update: () => true,
    delete: () => true,
  },
  fields: [
    // Email added by default
    {
      name: "name",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name:"descriptionhtml",
      type:"text"
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
      name:"address",
      type:"text"
    },
    {
      name:"phone",
      type:"text"
    },
    {
      name:"whatsapp",
      type:"text"
    },
    {
      name:"website",
      type:"text"
    },
    {
      name:"contactEmail",
      type:"text"
    },
    {
      name: "profile",
      type: "text",
    },
    { name: "verified", type: "text", defaultValue: "no" },
    {
      name:"featured",
      type:"text",
      defaultValue:"no"
    },
    {
      name:"banned",
      type:"text",
      defaultValue:"no"
    },
    {
      name:"public",
      type:"text",
      defaultValue:"yes"
    },   
    {
      name: "employerRole",
      // Save this field to JWT so we can use from `req.user`
      saveToJWT: true,
      type: "text",
      defaultValue: "employer",
    },
  ],
};

export default Employer;
