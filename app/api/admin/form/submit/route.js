import clientPromise from "../../../../../lib/mongodb";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // 1️⃣ Save to MongoDB
    const client = await clientPromise;
    const db = client.db("mywebsite");

    await db.collection("formResponses").insertOne({
      ...data,
      createdAt: new Date(),
    });

    // 2️⃣ Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Optional: verify SMTP connection
    await transporter.verify();
    console.log("SMTP server is ready to send emails");

    // 3️⃣ Send email to user
    const userMailInfo = await transporter.sendMail({
      from: `"MatricsMind" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "Thank you for submitting your details!",
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; font-size: 14px;">
      <p>Dear ${data.contactPerson},</p>
      
      <p>Thank you for sharing your business details with us. We appreciate your interest in <strong>MatricsMind</strong> and are excited to explore how we can support your goals. A member of our team will reach out to you shortly to discuss the next steps and ensure you receive the best guidance.</p>
      
      <p>Warm regards,<br/>
      <strong>MatricsMind Team</strong></p>
    </div>
  `,
    });

    console.log("User email sent:", userMailInfo.messageId);

    // 4️⃣ Send admin notification email
    const adminMailInfo = await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Form Submission: ${data.businessName}`,
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
      <h2 style="color: #1E40AF;">New Form Submission Received</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tbody>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Business Name</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.businessName || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Contact Person</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.contactPerson || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Email</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.email || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Phone</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.phone || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Interest</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.interest || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Industry</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.industry || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Years in Business</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.yearsInBusiness || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Target Audience</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.targetAudience || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Competitors</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.competitors || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Running Ads</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.runningAds || "-"
            }</td>
          </tr>
          ${
            data.runningAds === "Yes"
              ? `
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Ad Platforms</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.adPlatforms || "-"
            }</td>
          </tr>`
              : ""
          }
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Marketing Goals</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              (data.marketingGoals && data.marketingGoals.join(", ")) || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Budget</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.budget || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Timeline</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.timeline || "-"
            }</td>
          </tr>
          <tr>
            <td style="font-weight: bold; padding: 6px; border: 1px solid #ddd;">Additional Notes</td>
            <td style="padding: 6px; border: 1px solid #ddd;">${
              data.additionalNotes || "-"
            }</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
    });

    console.log("Admin email sent:", adminMailInfo.messageId);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
