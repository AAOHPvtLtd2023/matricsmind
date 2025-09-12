// server/email/sendMail.js
import nodemailer from "nodemailer";

export async function sendMail(to, subject, text, link) {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or use SMTP provider
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Your App" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: `
      <p>${text}</p>
      <a href="${link}" style="padding:10px 20px;background:#007bff;color:#fff;text-decoration:none;border-radius:5px;">
        Fill the Form
      </a>
    `,
  };

  await transporter.sendMail(mailOptions);
}
