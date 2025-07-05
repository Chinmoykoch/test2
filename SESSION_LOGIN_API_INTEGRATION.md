# Session Login API Integration

## Overview
The "Schedule a Free Session" form has been successfully integrated with the new Session Login Details API, replacing the previous contact form implementation. This provides a dedicated system for managing session login records.

## Changes Made

### 1. Updated API Configuration (`utils/api.ts`)

**Added Session Login Endpoints:**
```typescript
// Session Login Details
GET_SESSION_LOGINS: '/session/getsessionlogins',
GET_SESSION_LOGIN_BY_ID: '/session/getsessionloginbyid',
CREATE_SESSION_LOGIN: '/session/addsessionlogin',
UPDATE_SESSION_LOGIN: '/session/updatesessionlogin',
DELETE_SESSION_LOGIN: '/session/deletesessionlogin',
```

**Added Session Login Interfaces:**
```typescript
export interface SessionLogin {
  _id: string;
  name: string;
  phoneNumber: string;
  email: string;
  city: string;
  course: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SessionLoginInput {
  name: string;
  phoneNumber: string;
  email: string;
  city: string;
  course: string;
}
```

**Added API Helper Functions:**
- `getSessionLogins()` - Fetch all session logins
- `getSessionLoginById(id)` - Fetch specific session login
- `createSessionLogin(data)` - Create new session login
- `updateSessionLogin(id, data)` - Update session login
- `deleteSessionLogin(id)` - Delete session login

**Added React Hooks:**
- `useSessionLogins()` - Hook for managing session logins list
- `useSessionLogin(id)` - Hook for managing individual session login

### 2. Created Session Login API Route (`app/api/session-login/route.ts`)

**Features:**
- Full CRUD operations (GET, POST, PUT, DELETE)
- Input validation for required fields
- Error handling and proper HTTP status codes
- Backend API forwarding to `https://backend-rakj.onrender.com/api/v1/session/`

**Endpoints:**
- `POST /api/session-login` - Create new session login
- `GET /api/session-login` - Get all session logins
- `GET /api/session-login?id=<id>` - Get specific session login
- `PUT /api/session-login?id=<id>` - Update session login
- `DELETE /api/session-login?id=<id>` - Delete session login

### 3. Updated CounselingForm Component (`components/CounselingForm.tsx`)

**Key Changes:**
- Changed from contact API to session login API
- Updated field name from `phone` to `phoneNumber` to match backend schema
- Removed message field (not required for session login)
- Updated validation schema
- Enhanced error handling

**Form Data Structure:**
```typescript
{
  name: string;
  phoneNumber: string;
  email: string;
  city: string;
  course: string;
}
```

## API Integration Details

### Backend API Endpoints
The frontend now communicates with these backend endpoints:

1. **Create Session Login:**
   - Frontend: `POST /api/session-login`
   - Backend: `POST https://backend-rakj.onrender.com/api/v1/session/addsessionlogin`

2. **Get All Session Logins:**
   - Frontend: `GET /api/session-login`
   - Backend: `GET https://backend-rakj.onrender.com/api/v1/session/getsessionlogins`

3. **Get Session Login by ID:**
   - Frontend: `GET /api/session-login?id=<id>`
   - Backend: `GET https://backend-rakj.onrender.com/api/v1/session/getsessionloginbyid/<id>`

4. **Update Session Login:**
   - Frontend: `PUT /api/session-login?id=<id>`
   - Backend: `PUT https://backend-rakj.onrender.com/api/v1/session/updatesessionlogin/<id>`

5. **Delete Session Login:**
   - Frontend: `DELETE /api/session-login?id=<id>`
   - Backend: `DELETE https://backend-rakj.onrender.com/api/v1/session/deletesessionlogin/<id>`

### Data Flow

1. **Form Submission:**
   ```
   User fills form → Validation → Frontend API → Backend API → Database
   ```

2. **Success Response:**
   ```json
   {
     "message": "Session login created successfully",
     "data": {
       "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
       "name": "John Doe",
       "phoneNumber": "+1234567890",
       "email": "john.doe@example.com",
       "city": "New York",
       "course": "Interior Design",
       "createdAt": "2024-01-15T10:00:00.000Z",
       "updatedAt": "2024-01-15T10:00:00.000Z"
     }
   }
   ```

3. **Error Response:**
   ```json
   {
     "message": "Name, phone number, email, city, and course are required"
   }
   ```

## Benefits of Session Login Integration

### 1. **Dedicated Data Management**
- Session logins are stored separately from general contact forms
- Better organization and tracking of session requests
- Dedicated admin interface for session login management

### 2. **Enhanced User Experience**
- Specific validation for session login requirements
- Clear success/error messages
- Form reset after successful submission
- Loading states during submission

### 3. **Better Data Structure**
- Consistent field naming (`phoneNumber` instead of `phone`)
- Proper data types and validation
- Timestamp tracking for analytics

### 4. **Admin Panel Integration**
- Session logins can be managed through the admin dashboard
- View, edit, and delete session login records
- Track session request trends and analytics

## Validation Rules

### Frontend Validation (Zod Schema)
```typescript
const CounselingFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  city: z.string().nonempty("City is required"),
  course: z.string().nonempty("Please select a course"),
});
```

### Backend Validation
- All fields are required
- Email format validation
- Phone number format validation
- Course selection validation

## Error Handling

### Frontend Error Handling
- Form validation errors displayed inline
- API error messages shown to user
- Network error fallback messages
- Loading states during API calls

### Backend Error Handling
- Input validation with detailed error messages
- HTTP status codes for different error types
- Proper error response format
- Logging for debugging

## Testing

### Manual Testing
1. Fill out the "Schedule a Free Session" form
2. Submit with valid data
3. Verify success message and form reset
4. Test with invalid data to check validation
5. Check browser console for API responses
6. Verify data appears in backend admin panel

### API Testing
```bash
# Test session login creation
curl -X POST http://localhost:3000/api/session-login \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phoneNumber": "+1234567890",
    "email": "test@example.com",
    "city": "Test City",
    "course": "interior-design"
  }'

# Test getting all session logins
curl -X GET http://localhost:3000/api/session-login

# Test getting specific session login
curl -X GET "http://localhost:3000/api/session-login?id=64f8a1b2c3d4e5f6a7b8c9d0"
```

## Future Enhancements

### 1. **Email Notifications**
- Send confirmation emails to users
- Notify administrators of new session requests
- Automated follow-up reminders

### 2. **Appointment Scheduling**
- Integrate with calendar systems
- Allow users to select preferred time slots
- Automated session scheduling

### 3. **Analytics Dashboard**
- Track session request trends
- Course popularity analytics
- Geographic distribution of requests

### 4. **Advanced Validation**
- Phone number format validation
- Course availability checking
- Duplicate submission prevention

### 5. **Integration with CRM**
- Connect with customer relationship management systems
- Lead tracking and follow-up automation
- Sales pipeline integration

## Migration Notes

### From Contact Form to Session Login
- **Data Structure:** Changed from contact form fields to session login fields
- **API Endpoint:** Changed from `/api/contact` to `/api/session-login`
- **Field Mapping:** `phone` → `phoneNumber`
- **Validation:** Enhanced validation for session-specific requirements

### Backward Compatibility
- Existing contact form functionality remains available
- Session login is a new, dedicated system
- No breaking changes to existing features

## Security Considerations

### 1. **Input Validation**
- Server-side validation for all inputs
- SQL injection prevention
- XSS protection

### 2. **Rate Limiting**
- Implement rate limiting for form submissions
- Prevent spam and abuse

### 3. **Data Privacy**
- Secure storage of personal information
- GDPR compliance considerations
- Data retention policies

### 4. **API Security**
- HTTPS for all API communications
- Proper error handling without information leakage
- Authentication for admin operations

This integration provides a robust, scalable solution for managing session login requests with proper validation, error handling, and admin management capabilities. 