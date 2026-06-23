import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass : process.env.GMAIL_APP_PASSWORD,
  },
})

const sendEmail = async ({ to, subject, text, html }) => {
  try{
    const info = await transporter.sendMail({
      from: `"Portfolio Hire Form" <${process.env.GMAIL_USER}>`,
      to,
      subject,
      text,
      ...(html && { html }),
    });

    return info;
  }catch(error){
    console.log("sendEmail error:", error.message);
    throw error;
  }
}

export default sendEmail;