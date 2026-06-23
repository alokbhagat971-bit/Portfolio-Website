import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  logger: true,
  debug: true,
  connectionTimeout: 15000,
});

const sendEmail = async ({ to, subject, text, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Hire Form" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text,
      html,
    });

    // IMPORTANT CHECK
    if (!info || !info.messageId) {
      throw new Error("Email not accepted by SMTP server");
    }

    return info;

  } catch (error) {
    console.log("🔥 sendEmail ERROR:", error);
    throw error;
  }
};

export default sendEmail;