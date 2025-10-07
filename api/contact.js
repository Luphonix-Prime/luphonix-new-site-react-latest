
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, service, budget, message } = req.body;

  try {
    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Inquiry from Website',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    // Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Luphonix',
      html: `
       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; position: relative; overflow: hidden; background-color: #000;">
    <!-- Background infinity symbol -->
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%; background-image: url('https://ik.imagekit.io/nzsjpnm8w/loop.gif?updatedAt=1743683898622'); background-size: contain; background-position: center; background-repeat: no-repeat; opacity: 0.85; z-index: 0;"></div>

    <!-- Animated infinity symbol -->
    <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%;">
        <svg viewBox="0 0 100 60" style="width: 100%; height: 100%; opacity: 0.2;">
            <path style="stroke: #00c3ff; stroke-width: 3; fill: none; stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: drawInfinity 2s linear infinite; filter: drop-shadow(0 0 10px rgba(0, 195, 255, 0.5));" d="M25,30 C25,15 35,15 50,30 C65,45 75,45 75,30 C75,15 65,15 50,30 C35,45 25,45 25,30"/>
        </svg>
    </div>

    <!-- Content sections -->
    <div style="background-color: rgba(0, 0, 0, 0.8); padding: 20px; text-align: center; position: relative;">
        <h1 style="color: #00c3ff; margin: 0; position: relative; z-index: 2; text-shadow: 0 0 10px rgba(0, 195, 255, 0.5);">New Contact Form Submission</h1>
    </div>

    <div style="padding: 20px; opacity: 100%; background-color: rgba(0, 0, 0, 0.7); position: relative; z-index: 1; border-radius: 10px;">
        <h2 style="text-align: center; color: #00c3ff;">Luphonix</h2>
        <p style="text-align: center; font-style: italic; color: #fff;">Innovating for a Better Tomorrow</p>

        <!-- Submission Details -->
        <div style="background-color: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p style="color: #fff;"><strong>Name:</strong> ${name}</p>
            <p style="color: #fff;"><strong>Email:</strong> ${email}</p>
            <p style="color: #fff;"><strong>Company:</strong> ${company}</p>
            <p style="color: #fff;"><strong>Service:</strong> ${service}</p>
            <p style="color: #fff;"><strong>Budget:</strong> ${budget}</p>
            <p style="color: #fff;"><strong>Message:</strong> ${message}</p>
        </div>

        <!-- Thank You Message -->
        <p style="color: #fff;">Dear ${name},</p>
        <p style="color: #fff;">Thank you for reaching out to us through our website! We truly appreciate your interest and the time you took to share your details. Your submission has been successfully received.</p>
        <p style="color: #fff;">At Luphonix, we are committed to delivering innovative solutions and ensuring the best customer experience. Our team will review your request and get back to you shortly.</p>
        <p style="color: #fff;">If you have any urgent queries or need further assistance, feel free to contact us at <span style="color: #00c3ff;">luphonix.primodial@gmail.com</span>.</p>
        <p style="color: #fff;">We look forward to assisting you and hope to make a positive impact together!</p>

        <!-- Team signature -->
        <div style="color: #fff; display: flex; align-items: center; justify-content: flex-start; margin-top: 20px;">
            <div style="flex: 1;">
                <p style="margin: 0;">Warm regards,<br>The Luphonix Team<br>
                <span style="font-size: 0.9em;">luphonix.primodial@gmail.com</span></p>
            </div>
            <div style="flex: 0 0 70px; margin-left: 15px;">
                <img src="https://ik.imagekit.io/nzsjpnm8w/blue_phoenix_logo.jpg?updatedAt=1743683879054" alt="Luphonix Logo" style="width: 70px;">
            </div>
        </div>
    </div>

    <div style="text-align: center; padding: 20px; color: #9a9797; position: relative; z-index: 1;">
        <p>© 2025 Luphonix. All rights reserved.</p>
        <p>AHMEDABAD, GUJARAT</p>
    </div>
</div>
      `
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send emails' });
  }
};
