import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.phoneNumber || !body.email || !body.city || !body.course) {
      return NextResponse.json(
        { message: 'Name, phone number, email, city, and course are required' },
        { status: 400 }
      );
    }

    // Forward to backend API
    const response = await fetch('https://backend-rakj.onrender.com/api/v1/session/addsessionlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        phoneNumber: body.phoneNumber,
        email: body.email,
        city: body.city,
        course: body.course,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(
        { message: 'Session login created successfully', data },
        { status: 200 }
      );
    } else {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || 'Failed to create session login' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Session login API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Get specific session login by ID
      const response = await fetch(`https://backend-rakj.onrender.com/api/v1/session/getsessionloginbyid/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
      } else {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json(
          { message: errorData.message || 'Session login not found' },
          { status: response.status }
        );
      }
    } else {
      // Get all session logins
      const response = await fetch('https://backend-rakj.onrender.com/api/v1/session/getsessionlogins', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return NextResponse.json(data, { status: 200 });
      } else {
        const errorData = await response.json().catch(() => ({}));
        return NextResponse.json(
          { message: errorData.message || 'Failed to fetch session logins' },
          { status: response.status }
        );
      }
    }
  } catch (error) {
    console.error('Session login API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { message: 'Session login ID is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.phoneNumber || !body.email || !body.city || !body.course) {
      return NextResponse.json(
        { message: 'Name, phone number, email, city, and course are required' },
        { status: 400 }
      );
    }

    // Forward to backend API
    const response = await fetch(`https://backend-rakj.onrender.com/api/v1/session/updatesessionlogin/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        phoneNumber: body.phoneNumber,
        email: body.email,
        city: body.city,
        course: body.course,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(
        { message: 'Session login updated successfully', data },
        { status: 200 }
      );
    } else {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || 'Failed to update session login' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Session login API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { message: 'Session login ID is required' },
        { status: 400 }
      );
    }

    // Forward to backend API
    const response = await fetch(`https://backend-rakj.onrender.com/api/v1/session/deletesessionlogin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return NextResponse.json(
        { message: 'Session login deleted successfully' },
        { status: 200 }
      );
    } else {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || 'Failed to delete session login' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Session login API error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
} 