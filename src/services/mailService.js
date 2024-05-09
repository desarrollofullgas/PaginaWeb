import {createTransport} from 'nodemailer';
export default class MailService {
    construct(){
        //this.nodemailer= require('nodemailer');
    }
    async sendMail(){
        const mail= createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 587,
            secure: false, // upgrade later with STARTTLS
            auth: {
              user: "33d4ee0a0f0164",
              pass: "deb314fc3a88e3",
            },
          });
          const info =await mail.sendMail({
            from:'prueba@gmail.com',
            to:'prueba3@gmail.com',
            subject:'correo de prueba',
            text:hola
          });
          console.log(info);
    }
}