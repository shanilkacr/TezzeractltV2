// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.NEXT_PUBLIC_BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

if (!BREVO_API_KEY) {
  throw new Error('Brevo API key is not set in environment variables');
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

async function sendEmail(emailData: any) {
  const headers = new Headers({
    accept: 'application/json',
    'content-type': 'application/json',
  });

  // Use type assertion since we know BREVO_API_KEY is defined due to the check above
  headers.append('api-key', BREVO_API_KEY!); // Non-null assertion operator

  const response = await fetch(BREVO_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to send email');
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    const formData: FormData = await request.json();

    // Basic server-side validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    const senderEmail = 'info@tezzeract.lt'; // Your verified Brevo sender email
    const adminEmail = 'wehan@tezzeract.com'; // Your admin email

    // Email to admin
    const emailToAdmin = {
      sender: { name: 'Tezzeract LT', email: senderEmail },
      to: [{ email: adminEmail, name: 'Admin' }],
      subject: 'New Contact Form Submission',
      htmlContent: `
        <html>
          <body>
            <h2>New Submission</h2>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </body>
        </html>
      `,
    };

    await sendEmail(emailToAdmin);

    // Email to customer
    const emailToCustomer = {
      sender: { name: 'Tezzeract LT', email: senderEmail },
      to: [{ email: formData.email, name: formData.name }],
      subject: 'Thank You for Your Submission',
      htmlContent: `
        <html>
          <body>
            <h2>Thank You, ${formData.name}!</h2>
            <p>We received your message and will get back to you soon.</p>
            <p><strong>Your Details:</strong></p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Subject:</strong> ${formData.subject}</p>
            <p><strong>Message:</strong> ${formData.message}</p>
          </body>
        </html>
      `,
    };

    await sendEmail(emailToCustomer);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error in API route:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}