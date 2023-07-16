import ejs from 'ejs';
import fs from "fs"

class ForgotPasswordTemplate{
   public passwordResetTemplate(username:string,resetLink:string):string{
      return ejs.render(fs.readFileSync(__dirname+'/forgot-password-template.ejs', 'utf8'),{
         username: username,
         resetLink: resetLink,
         image_url: 'https://cdn.midjourney.com/1adc5506-ba20-43c2-b7b8-a46a71d475ca/0_1.png'

      });
      }
   }


export const forgotPasswordTemplate:ForgotPasswordTemplate= new ForgotPasswordTemplate();
