import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  logger: true,
  debug: true,
});

// 🔥 verify connection at startup (VERY IMPORTANT)
transporter.verify((error, success) => {
  if (error) {
    console.log("🔥 SMTP CONNECTION FAILED:");
    console.log(error);
  } else {
    console.log("✅ SMTP READY TO SEND EMAILS");
  }
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

    console.log("📧 EMAIL SENT SUCCESS:", info.messageId);

    return info;
  } catch (error) {
    console.log("🔥 EMAIL SEND FAILED:");
    console.log("CODE:", error.code);
    console.log("MESSAGE:", error.message);
    console.log(error);

    throw error;
  }
};

export default sendEmail;