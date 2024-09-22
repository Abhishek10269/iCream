import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { firstName, lastName, email, phone, message } = await req.json();

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // use TLS for secure email
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Mail options for sending to you
  const mailOptionsToYou = {
    from: process.env.FROM_EMAIL, // Your email
    to: process.env.TO_EMAIL, // Your email (to receive user messages)
    subject: `New message from ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
    replyTo: email,
  };

  // Mail options for sending confirmation to the user
  const mailOptionsToUser = {
    from: process.env.FROM_EMAIL, // Your email
    to: email, // User's email
    subject: 'Thank you for contacting me',
    text: `
      Hi ${firstName},

      Thank you for reaching out! I have received your message and will get back to you soon.

      Best regards,
      Abhishek Kumar
    `,
  };

  try {
    // Send email to you
    await transporter.sendMail(mailOptionsToYou);
    // Send confirmation email to the user
    await transporter.sendMail(mailOptionsToUser);
    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), { status: 500 });
  }
}
