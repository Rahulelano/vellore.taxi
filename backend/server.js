import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post('/api/send-email', async (req, res) => {
  const { 
    tripType, 
    pickup, 
    drop, 
    distance, 
    vehicleName, 
    totalPrice, 
    date, 
    time, 
    returnDate, 
    returnTime, 
    name,
    phone, 
    email,
    rate,
    batta
  } = req.body;

  const bookingId = Math.random().toString(36).substring(2, 11).toUpperCase();
  const finalTripType = tripType === 'oneway' ? 'Outstation' : 'Round Trip';

  const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; line-height: 1.6; color: #333;">
      <p style="font-weight: bold;">Taxis are available 24/7 in Tamil Nadu, Karnataka, Andhra Pradesh and Kerala</p>
      
      <h2 style="margin: 20px 0 10px 0;">Booking Confirmed</h2>
      
      <p><strong>Trip Type:</strong> ${finalTripType}</p>
      
      <p><strong>Pickup Date:</strong> ${date}</p>
      
      <p><strong>Pickup Time:</strong> ${time}</p>
      
      <p><strong>Customer Name:</strong> ${name}</p>
      
      <p><strong>Customer Mobile:</strong> ${phone}</p>
      
      <p><strong>Email:</strong> ${email}</p>
      
      <p><strong>Pickup Location:</strong> ${pickup}</p>
      
      <p><strong>Drop Location:</strong> ${drop}</p>
      
      <p><strong>Vehicle Type:</strong> ${vehicleName}</p>
      
      <p><strong>Approximate Total km:</strong> ${distance} km</p>
      
      <p><strong>Driver Allowance:</strong> ₹ ${batta}</p>
      
      <p><strong>Estimate:</strong> ₹ ${totalPrice}</p>
      
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      
      <p style="margin-top: 20px;">Toll, State Tax, Permit, Parking, Additional KM Charges are extra.</p>
      
      <p style="margin-top: 20px;"><a href="https://vellore.taxi" style="color: #0066cc; text-decoration: none;">https://vellore.taxi</a></p>
      
      <p><strong>Support:</strong> +91 94420 30725</p>
    </div>
  `;

  // Email to Admin
  const adminMailOptions = {
    from: `"VELLORE.TAXI Booking" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `[NEW BOOKING] ${finalTripType} - ${pickup} to ${drop}`,
    html: emailContent,
  };

  // Email to Customer
  const customerMailOptions = {
    from: `"VELLORE.TAXI Booking" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: `Booking Confirmed - VELLORE.TAXI`,
    html: emailContent,
  };

  try {
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);
    res.status(200).json({ message: 'Booking emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send emails', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
