import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, text, html }) => {
  console.log("📧 Attempting to send email to:", to);
  
  const { data, error } = await resend.emails.send({
    from: 'Portfolio Hire Form <onboarding@resend.dev>',
    to,
    subject,
    text,
    html,
  });

  console.log("📧 Resend response - data:", data, "error:", error);

  if (error) {
    console.log("🔥 EMAIL SEND FAILED:", error);
    throw error;
  }

  console.log("📧 EMAIL SENT SUCCESS:", data.id);
  return data;
};

export default sendEmail;