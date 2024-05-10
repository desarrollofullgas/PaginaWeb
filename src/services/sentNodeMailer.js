import nodemailer from 'nodemailer';
const server=import.meta.env.MAIL_SERVER_SMTP;
const user=import.meta.env.MAIL_USER;
const userPass=import.meta.env.MAIL_USER_PASS;

export async function main(data) {
  const transporter = nodemailer.createTransport({
    host: server,
    secure: true,
    port: 465,
    auth: {
      user: user,
      pass: userPass,
    },
  });

  const info = await transporter.sendMail({
    from: user,
    to: 'jestrella.fullgas@gmail.com',
    subject: 'Mensaje desde página Web',
    html: `<div>
                <p><strong>Nombre: </strong>${data.get('Cliente')}</p>
                <p><strong>Correo electrónico: </strong><em>${data.get('Correo')}</em></p>
                <p><strong>Motivo: </strong>${data.get('option')}</p>
                <p><strong>Mensaje: </strong>${data.get('Mensaje')}</p>
            </div>`,
  });

  console.log('Message sent: %s', info.messageId);
}

main().catch(console.error);