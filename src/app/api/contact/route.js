import nodemailer from "nodemailer";

const apiEmail = process.env.APP_EMAIL || "maazharoon897@gmail.com";
const apiPassword = process.env.APP_PASSWORD;

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: apiEmail,
        pass: apiPassword,
      },
    });

   const mailOptions = {
  from: apiEmail, 
  replyTo: email,
  to: apiEmail,
  subject: `${subject} (from ${name})`,
  text: `${message}\n\nSender Email: ${email}`, 
};


    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json(
      { success: true, message: "Message sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Email sending failed:", error);
    return Response.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}
