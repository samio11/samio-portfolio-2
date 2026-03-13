import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // SMTP Configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // true for port 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS?.replace(/"/g, ''), // Remove quotes if present
      },
    });

    // 1. Email to the User (Thank You)
    const userMailOptions = {
      from: `"Samio Hasan" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: `Re: ${subject || "Thank you for reaching out!"}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; padding: 30px; border: 1px solid #e0e0e0; border-radius: 12px; color: #333; line-height: 1.6;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #007bff; margin: 0;">Thank you for reaching out!</h2>
          </div>
          <p>Hi <strong>${name}</strong>,</p>
          <p>I appreciate you taking the time to contact me. I've received your message regarding "<strong>${subject || "General Inquiry"}</strong>" and will get back to you as soon as I can.</p>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 5px solid #007bff; margin: 25px 0;">
            <strong style="color: #007bff; display: block; margin-bottom: 10px;">Your Message Preview:</strong>
            <p style="font-style: italic; color: #555; margin: 0;">"${message}"</p>
          </div>
          <p>In the meantime, feel free to explore more of my work on my portfolio.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 25px 0;" />
          <p style="font-size: 0.9em; color: #777; text-align: center;">
            Best regards,<br>
            <strong style="color: #333;">Samio Hasan</strong><br>
            Full Stack Developer
          </p>
        </div>
      `,
    };

    // 2. Email to Samio (Notification)
    const adminMailOptions = {
      from: `"Portfolio Contact" <${process.env.SMTP_FROM}>`,
      to: "samiohasan6@gmail.com",
      subject: `[Portfolio] ${subject || "New Message"} from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "N/A"}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #007bff; margin-top: 15px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send emails. Please try again later." },
      { status: 500 }
    );
  }
}
