import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface RequestBody {
  name: string;
  email: string;
  message: string;
}
// In Next.js 13+, if we're using the app directory (instead of the pages directory), the routing mechanism is slightly different, and you need to export each HTTP method as a named export in the API route file.
export async function POST(req: Request) {
  console.log('email', process.env.EMAIL_USER);
  try {
    const { name, email, message }: RequestBody = await req.json();

    // Validate request body
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with your email provider
      auth: {
        user: process.env.EMAIL_USER, // Use environment variables for sensitive data
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${email}>`, // Sender's email
      to: process.env.EMAIL_USER, // Your email where messages are sent
      subject: `New Message from ${name}`,
      text: message,
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send message. Please try again later.' }, { status: 500 });
  }
}
