# Contact Form Backend Integration Complete ✅

## Summary

The ContactUs.tsx component has been successfully updated to integrate with your backend API endpoint `/addcontact` using axios and the centralized API utilities.

## Changes Made

### 1. **API Utilities Updated** (`utils/api.ts`)
- Added `ADD_CONTACT: '/api/v1/contact/addcontact'` endpoint
- Created `submitContact()` helper function for contact form submissions
- Integrated with the existing axios client and error handling

### 2. **ContactUs Component Updated** (`components/ContactUs.tsx`)
- **Replaced Formspree** with backend API integration
- **Added axios import** via API utilities
- **Enhanced error handling** with specific error messages
- **Improved UI feedback** with better success/error styling
- **Added form reset** functionality after successful submission

### 3. **Testing Component Updated** (`components/ExampleBackendUsage.tsx`)
- Added test button for contact form submission
- Includes sample data for testing the `/addcontact` endpoint

## Technical Details

### API Endpoint
- **URL**: `https://backend-rakj.onrender.com/api/v1/contact/addcontact`
- **Method**: POST
- **Content-Type**: application/json

### Data Format Sent to Backend
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "message": "User's message content",
  "name": "John Doe",
  "subject": "Contact Form Submission"
}
```

### Error Handling
- Network errors are caught and displayed to users
- Specific error messages from backend are shown
- Fallback error message for unknown errors
- Form validation errors are displayed inline

### Success Handling
- Success message with checkmark icon
- Form automatically resets after successful submission
- Green styling to indicate success

## How to Test

### 1. **Test the Contact Form**
1. Navigate to `/contact-us` page
2. Fill out the contact form
3. Submit and check for success/error messages
4. Check browser console for API call details

### 2. **Test via Backend Integration Page**
1. Navigate to `/test-backend` page
2. Click "Test Submit Contact Form" button
3. View the API response in the results section

### 3. **Monitor Network Requests**
- Open browser DevTools → Network tab
- Submit the contact form
- Look for POST request to `/addcontact` endpoint
- Check request payload and response

## Expected Backend Response

Your backend should return a JSON response like:
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": { ... }
}
```

Or for errors:
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Code Usage Examples

### Using the API Helper Directly
```typescript
import { apiHelpers } from '@/utils/api';

const contactData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  message: 'Hello from the contact form',
  name: 'John Doe',
  subject: 'Contact Form Submission'
};

try {
  const response = await apiHelpers.submitContact(contactData);
  console.log('Success:', response);
} catch (error) {
  console.error('Error:', error);
}
```

### Using the API Client Directly
```typescript
import { apiClient, API_ENDPOINTS } from '@/utils/api';

const response = await apiClient.post(API_ENDPOINTS.ADD_CONTACT, contactData);
```

## Environment Variables

Make sure your `.env.local` file has:
```env
NEXT_PUBLIC_BACKEND_URL=https://backend-rakj.onrender.com
NEXT_PUBLIC_API_BASE_URL=https://backend-rakj.onrender.com
```

## Files Modified

1. **`utils/api.ts`** - Added contact endpoint and helper function
2. **`components/ContactUs.tsx`** - Complete integration with backend API
3. **`components/ExampleBackendUsage.tsx`** - Added contact form testing

## Next Steps

1. **Test the integration** with your actual backend
2. **Verify the data format** matches what your backend expects
3. **Update field mappings** if your backend expects different field names
4. **Add additional validation** if needed
5. **Monitor error logs** to catch any integration issues

## Troubleshooting

### Common Issues
1. **CORS errors** - Ensure your backend allows requests from your frontend domain
2. **Field name mismatches** - Check if backend expects different field names
3. **Authentication** - Add auth headers if your endpoint requires authentication
4. **Rate limiting** - Handle rate limit responses from your backend

### Debug Steps
1. Check browser console for error messages
2. Verify network requests in DevTools
3. Test the endpoint directly with tools like Postman
4. Check backend logs for incoming requests

The contact form is now fully integrated with your backend! 🚀
