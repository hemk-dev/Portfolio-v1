export const dynamic = "force-dynamic";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

if (!process.env.N8N_WEBHOOK_URL) {
  throw new Error('N8N_WEBHOOK_URL environment variable is not set');
}

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

// Add OPTIONS handler for CORS preflight requests
export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormValues = await request.json();
    const timestamp = new Date();

    // Prepare contact request object
    const contactRequest = {
      id: timestamp.getTime().toString(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      submittedAt: timestamp.toISOString(),
    };

    // Trigger n8n workflow
    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactRequest),
      });

      if (!response.ok) {
        throw new Error(`Webhook failed with status: ${response.status}`);
      }
    } catch (webhookError) {
      console.error('Error triggering n8n webhook:', webhookError);
      // Continue even if webhook fails
    }

    // Add CORS headers to the response
    return NextResponse.json(
      { message: 'Message sent successfully' },
      {
        status: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error) {
    console.error('Error processing contact request:', error);
    return NextResponse.json(
      { error: 'Failed to process contact request' },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  }
} 