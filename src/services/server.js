import express from 'express';
import  json  from 'body-parser';
import { createTransport } from 'nodemailer';

const app = express();
const PORT = 3000;

app.use(json());

app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  const transporter = createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "33d4ee0a0f0164",
      pass: "deb314fc3a88e3",
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
