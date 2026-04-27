import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, service, date, message } = await req.json();

    const data = await resend.emails.send({
      from: "Smilez Dental <noreply@drsusheelinvisalignprovider.com>",
      to: ["smilezdental8@gmail.com"],

      cc: ["wassay@compumaxllc.com"], // ✅ added CC

      replyTo: "smilezdental8@gmail.com",
      subject: `New Appointment - ${name}`,

     html: `
<div style="font-family: Arial, sans-serif; background: linear-gradient(135deg, #78cbbd 0%, #4fb3a5 100%); padding:40px 20px;">
  
  <!-- MAIN CARD -->
  <div style="
    max-width:600px;
    margin:0 auto;
    background:#ffffff;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 10px 30px rgba(0,0,0,0.08);
  ">

    <!-- TOP BANNER -->
    <div style="
      background:#78cbbd;
      padding:24px;
      text-align:center;
      color:white;
    ">
      <h1 style="margin:0; font-size:20px; font-weight:600;">
        New Appointment Request
      </h1>
      <p style="margin-top:6px; font-size:13px; opacity:0.9;">
        Invisalign Clinic • Hyderabad
      </p>
    </div>

    <!-- BODY -->
    <div style="padding:26px;">
      
      <p style="
        font-size:14px;
        color:#667085;
        margin-bottom:20px;
      ">
        A new patient has requested an appointment from your website.
      </p>

      <!-- DETAILS CARD -->
      <div style="
        border:1px solid #e6f4f1;
        border-radius:12px;
        padding:18px;
        background:#f8fdfc;
      ">

        <table style="width:100%; font-size:14px; color:#101828;">
          
          <tr>
            <td style="padding:8px 0; color:#667085;">Full Name</td>
            <td style="padding:8px 0; font-weight:600;">${name}</td>
          </tr>

          <tr>
            <td style="padding:8px 0; color:#667085;">Phone</td>
            <td style="padding:8px 0; font-weight:600;">+91 ${phone}</td>
          </tr>

          <tr>
            <td style="padding:8px 0; color:#667085;">Service</td>
            <td style="padding:8px 0; font-weight:600;">${service}</td>
          </tr>

          <tr>
            <td style="padding:8px 0; color:#667085;">Preferred Date</td>
            <td style="padding:8px 0; font-weight:600;">
              ${date || "Not provided"}
            </td>
          </tr>

          <tr>
            <td style="padding:8px 0; color:#667085;">Message</td>
            <td style="padding:8px 0; font-weight:600;">
              ${message || "None"}
            </td>
          </tr>

        </table>
      </div>

      <!-- HIGHLIGHT STRIP -->
      <div style="
        margin-top:20px;
        padding:14px;
        background:#78cbbd15;
        border-left:4px solid #78cbbd;
        border-radius:8px;
        font-size:13px;
        color:#065f46;
      ">
        Quick action recommended: Contact the patient to confirm the appointment.
      </div>

    </div>

    <!-- FOOTER -->
    <div style="
      padding:16px;
      text-align:center;
      font-size:12px;
      color:#98a2b3;
      border-top:1px solid #f1f1f1;
    ">
      Smilez Dental • Hyderabad
    </div>

  </div>
</div>
`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json({ success: false, error });
  }
}
