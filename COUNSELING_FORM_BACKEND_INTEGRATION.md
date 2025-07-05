# Counseling Form Backend Integration

## Overview
The "Schedule a Free Session" form in the home page has been successfully integrated with the backend API, replacing the previous Formspree implementation.

## Changes Made

### 1. Updated CounselingForm Component (`components/CounselingForm.tsx`)

**Before:**
- Used Formspree service (`https://formspree.io/f/mvgzgpwl`)
- Basic form submission without loading states
- No form reset after submission

**After:**
- Integrated with backend API (`/api/contact`)
- Added loading state with `isSubmitting` state
- Added form reset after successful submission
- Enhanced error handling with backend error messages
- Improved user feedback with loading indicators

### 2. Backend API Integration

The form now uses the existing contact API endpoint:
- **Endpoint:** `/api/contact`
- **Method:** POST
- **Backend URL:** `https://backend-rakj.onrender.com/api/v1/contact/addcontact`

### 3. Form Data Structure

The form submits the following data to the backend:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "phone": "+91XXXXXXXXXX",
  "city": "City Name",
  "course": "selected-course",
  "message": "Schedule a Free Session request for [course] course."
}
```

### 4. Enhanced User Experience

- **Loading State:** Button shows "Submitting..." during form submission
- **Disabled State:** Button is disabled during submission to prevent double-submission
- **Success Message:** Clear confirmation message after successful submission
- **Error Handling:** Displays specific error messages from the backend
- **Form Reset:** Form fields are cleared after successful submission

## Backend API Details

### Contact API Route (`app/api/contact/route.ts`)
- Handles both JSON and multipart/form-data requests
- Validates required fields (name, email, phone)
- Forwards data to backend API
- Returns appropriate success/error responses

### Backend Endpoints Available
1. **Contact Form:** `/contact/addcontact` - For general contact inquiries
2. **Enquiries:** `/enquiries` - For course-specific enquiries
3. **Counseling Requests:** `/contact/counseling` - For counseling-specific requests

## Benefits of Backend Integration

1. **Data Management:** All form submissions are stored in the backend database
2. **Admin Panel:** Submissions can be managed through the admin dashboard
3. **Analytics:** Track form submissions and conversion rates
4. **Customization:** Easy to modify form behavior and validation
5. **Security:** Better control over data handling and validation

## Testing

To test the integration:
1. Fill out the "Schedule a Free Session" form on the home page
2. Submit the form
3. Check the browser console for API responses
4. Verify data appears in the backend admin panel
5. Confirm email notifications (if configured)

## Error Handling

The form handles various error scenarios:
- Network errors
- Backend API errors
- Validation errors
- Server errors

All errors are displayed to the user with appropriate messages.

## Future Enhancements

Potential improvements:
1. Add email notifications for form submissions
2. Implement form validation on the backend
3. Add CAPTCHA for spam protection
4. Create dedicated counseling request endpoint
5. Add appointment scheduling functionality 