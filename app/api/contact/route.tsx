// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  const { name, email, message } = data;

  // 💡 Here is where you integrate your email sending logic 💡
  // You would use a library like 'nodemailer' or an API like 'resend' or 'sendgrid'
  // using environment variables for security.
  
  console.log('Received contact form submission:');
  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Example using a placeholder email library call:
  /*
  try {
    await sendEmail({
      to: 'generationsintune@gmail.com',
      subject: 'New Contact Form Submission',
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
     return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
  */

  // Return a success response for now
  return NextResponse.json({ message: 'Form submitted (Email logic pending)' }, { status: 200 });
}
