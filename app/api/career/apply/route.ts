import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const careerid = searchParams.get('careerid');
    if (!careerid) {
      return NextResponse.json({ message: 'Missing careerid' }, { status: 400 });
    }
    const contentType = request.headers.get('content-type');
    if (contentType?.includes('multipart/form-data')) {
      // Forward FormData to backend
      const formData = await request.formData();
      // Build a new FormData for the backend
      const backendFormData = new FormData();
      for (const [key, value] of formData.entries()) {
        if (value instanceof Blob) {
          backendFormData.append(key, value);
        } else {
          backendFormData.append(key, String(value));
        }
      }
      const response = await fetch(`http://localhost:5500/api/v1/career-posts/apply/${careerid}`, {
        method: 'POST',
        body: backendFormData,
      });
      if (response.ok) {
        const data = await response.json();
        return NextResponse.json({ message: 'Job application submitted successfully', data }, { status: 200 });
      } else {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json({ message: errorData.message || 'Failed to submit job application' }, { status: response.status });
      }
    } else {
      // Handle JSON data (no file uploads)
      const body = await request.json();
      const response = await fetch(`http://localhost:5500/api/v1/career-posts/apply/${careerid}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        const data = await response.json();
        return NextResponse.json({ message: 'Job application submitted successfully', data }, { status: 200 });
      } else {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json({ message: errorData.message || 'Failed to submit job application' }, { status: response.status });
      }
    }
  } catch (error) {
    console.error('Career application API error:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
} 