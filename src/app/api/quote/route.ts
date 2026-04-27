import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, company, email, phone, category, specifications } = await request.json();

    // Validate required environment variables
    const requiredEnvVars = [
      "EMAIL_HOST",
      "EMAIL_PORT",
      "EMAIL_USER",
      "EMAIL_PASS",
      "EMAIL_FROM",
      "EMAIL_TO",
    ];
    const missingEnvVars = requiredEnvVars.filter((v) => !process.env[v]);

    if (missingEnvVars.length > 0) {
      console.error(
        `Missing environment variables: ${missingEnvVars.join(", ")}`,
      );
      return NextResponse.json(
        { message: "Email service not configured correctly" },
        { status: 500 },
      );
    }

    // Create a transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_PORT === "465",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content for the site owner
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Quote Request: ${category} - ${company}`,
      text: `
        Name: ${name}
        Company: ${company}
        Email: ${email}
        Phone: ${phone}
        Category: ${category}
        
        Specifications:
        ${specifications}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #2563eb; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Quote Request</h1>
          </div>
          <div style="padding: 24px; color: #334155;">
            <div style="display: grid; grid-template-columns: 120px 1fr; gap: 8px; margin-bottom: 20px;">
              <p><strong>Name:</strong></p><p>${name}</p>
              <p><strong>Company:</strong></p><p>${company}</p>
              <p><strong>Email:</strong></p><p>${email}</p>
              <p><strong>Phone:</strong></p><p>${phone || "Not provided"}</p>
              <p><strong>Category:</strong></p><p style="color: #2563eb; font-weight: bold;">${category}</p>
            </div>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Specifications:</strong></p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 4px; border: 1px solid #e2e8f0; white-space: pre-wrap; line-height: 1.6;">${specifications}</div>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
            Sent from Amico Engineering Website Quote Form
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Quote request sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending quote request:", error);
    return NextResponse.json(
      {
        message:
          "We regret to inform you that the quote request could not be sent at this moment.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
