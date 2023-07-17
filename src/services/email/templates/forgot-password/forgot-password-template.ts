
class ForgotPasswordTemplate{
   public passwordResetTemplate(username:string,resetLink:string):string{
      return   `   <html>
      <head>
        <style>
          /* Add your CSS styles here */
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .logo {
            display: block;
            margin: 0 auto;
            max-width: 200px;
            padding-bottom: 20px;
            border-radius:1000px
          }
          h1 {
            text-align: center;
            color: #333;
            margin-bottom: 20px;
          }
          p {
            color: #555;
            line-height: 1.5;
            margin-bottom: 10px;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 3px;
          }
          .button:hover {
            background-color: #0056b3;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="https://cdn.midjourney.com/1adc5506-ba20-43c2-b7b8-a46a71d475ca/0_1.png" alt="Logo" class="logo">
          <h1>Recuperación de contraseña</h1>
          <p>¡Hola!, ${username}</p>
          <p>Hemos recibido una solicitud para restablecer la contraseña de tu cuenta. Haz clic en el siguiente enlace para cambiar tu contraseña:</p>
          <p>
            <a href="${resetLink}" class="button">Restablecer contraseña</a>
          </p>
          <p>Si no solicitaste el restablecimiento de contraseña, puedes ignorar este mensaje.</p>
          <p>Gracias,</p>
          <p>El equipo de Pasco Jobs</p>
        </div>
      </body>
    </html>`
      
      // ejs.render(fs.readFileSync(__dirname+'/forgot-password-template.ejs', 'utf8'),{
      //    username: username,
      //    resetLink: resetLink,
      //    image_url: 'https://cdn.midjourney.com/1adc5506-ba20-43c2-b7b8-a46a71d475ca/0_1.png'

      // });
      }
   }


export const forgotPasswordTemplate:ForgotPasswordTemplate= new ForgotPasswordTemplate();
