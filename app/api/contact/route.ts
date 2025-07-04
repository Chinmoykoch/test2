import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type');
    
    if (contentType?.includes('multipart/form-data')) {
      // Handle file uploads (FormData)
      const formData = await request.formData();
      
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const phone = formData.get('phone') as string;
      const course = formData.get('course') as string;
      const city = formData.get('city') as string;
      const message = formData.get('message') as string;
      const resume = formData.get('resume') as File;
      
      // Validate required fields
      if (!name || !email || !phone) {
        return NextResponse.json(
          { message: 'Name, email, and phone are required' },
          { status: 400 }
        );
      }

      // For now, we'll include resume info in the message since backend doesn't support file uploads yet
      let fullMessage = message || '';
      if (resume) {
        fullMessage += `\n\nResume File: ${resume.name} (${resume.size} bytes)`;
      }

      // Forward to backend API
      const response = await fetch('https://backend-rakj.onrender.com/api/v1/contact/addcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          course: course || 'General Inquiry',
          city: city || 'Not specified',
          message: fullMessage
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return NextResponse.json(
          { message: 'Contact form submitted successfully', data },
          { status: 200 }
        );
      } else {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json(
          { message: errorData.message || 'Failed to submit contact form' },
          { status: response.status }
        );
      }
    } else {
      // Handle JSON data (no file uploads)
      const body = await request.json();
      
      // Validate required fields
      if (!body.name || !body.email || !body.phone) {
        return NextResponse.json(
          { message: 'Name, email, and phone are required' },
          { status: 400 }
        );
      }

      // Forward to backend API
      const response = await fetch('https://backend-rakj.onrender.com/api/v1/contact/addcontact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: body.name,
          email: body.email,
          phone: body.phone,
          course: body.course || 'General Inquiry',
          city: body.city || 'Not specified',
          message: body.message || ''
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return NextResponse.json(
          { message: 'Contact form submitted successfully', data },
          { status: 200 }
        );
      } else {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json(
          { message: errorData.message || 'Failed to submit contact form' },
          { status: response.status }
        );
      }
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 