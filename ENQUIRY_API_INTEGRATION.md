# Enquiry API Frontend Integration - Complete

## Overview
The enquiry backend API has been successfully integrated with the frontend. The integration maintains all existing UI styling while providing full CRUD functionality for managing enquiries.

## What's Been Implemented

### 1. API Service Layer (`utils/api.ts`)
- ✅ Added Enquiry TypeScript interfaces
- ✅ Added all CRUD operations:
  - `getEnquiries()` - Get all enquiries
  - `getEnquiryById(id)` - Get enquiry by ID
  - `updateEnquiryStatus(id, data)` - Update enquiry status
  - `deleteEnquiry(id)` - Delete enquiry
  - `getEnquiryStats()` - Get enquiry statistics
- ✅ Added comprehensive error handling
- ✅ Added TypeScript type safety

### 2. Custom Hook (`useEnquiries`)
- ✅ Created `useEnquiries()` hook for state management
- ✅ Automatic data fetching on component mount
- ✅ Loading and error states
- ✅ Optimistic updates for better UX

### 3. Updated Components

#### ApplyNowForm (`components/ApplyNowForm.tsx`)
- ✅ **No UI changes** - All styling preserved exactly as before
- ✅ Updated to use enquiries API instead of Formspree
- ✅ Maintains existing form validation and structure
- ✅ Added loading states and error handling
- ✅ Transforms form data to match enquiry API structure

#### EnquiryManagement (`components/EnquiryManagement.tsx`)
- ✅ Full admin interface for managing enquiries
- ✅ Modern card-based layout with status badges
- ✅ Modal dialogs for viewing details and updating status
- ✅ Statistics dashboard with visual indicators
- ✅ Responsive design with proper error handling

## API Endpoints Used

```javascript
// Base URL: https://backend-rakj.onrender.com/api/v1
GET    /enquiries              // Get all enquiries
GET    /enquiries/{id}         // Get enquiry by ID
PATCH  /enquiries/{id}/status  // Update enquiry status
DELETE /enquiries/{id}         // Delete enquiry
GET    /enquiries/stats        // Get enquiry statistics
```

## Data Model

```typescript
interface Enquiry {
  _id: string;
  name: string;                    // required
  phoneNumber: string;             // required
  email: string;                   // required
  city: string;                    // required
  course: string;                  // required
  createdAt: string;
  status: 'new' | 'contacted' | 'enrolled' | 'not-interested';
  message?: string;
  source?: string;
  updatedAt?: string;
}
```

## Form Integration Details

### ApplyNowForm Changes:
- **Field Mapping**: 
  - `name` → `name`
  - `email` → `email`
  - `phoneNumber` → `phoneNumber`
  - `city` → `city`
  - `course` → `course`
- **Added Source Tracking**: `source: 'apply-now-form'`
- **API Integration**: Uses `apiHelpers.submitEnquiry()`
- **Error Handling**: Comprehensive error messages
- **Loading States**: Button shows "Submitting..." during API calls

### Status Management:
- **New**: Fresh enquiry received
- **Contacted**: Customer has been contacted
- **Enrolled**: Customer has enrolled
- **Not Interested**: Customer is not interested

## Usage Examples

### In ApplyNowForm (Submit Only)
```typescript
import { apiHelpers } from "@/utils/api";

const onSubmit = async (values: FormData) => {
  const enquiryData = {
    name: values.name,
    phoneNumber: values.phoneNumber,
    email: values.email,
    city: values.city,
    course: values.course,
    source: 'apply-now-form',
  };
  
  const response = await apiHelpers.submitEnquiry(enquiryData);
};
```

### In Admin Components (Full CRUD)
```typescript
import { useEnquiries } from "@/utils/api";

const AdminComponent = () => {
  const { 
    enquiries, 
    loading, 
    error, 
    updateEnquiryStatus, 
    deleteEnquiry,
    getEnquiryStats 
  } = useEnquiries();

  // Use the functions as needed
  const handleStatusUpdate = async (id, status) => {
    await updateEnquiryStatus(id, { status, notes: '' });
  };
};
```

## Key Features

### ✅ Preserved UI
- All existing styling maintained
- Same visual design and layout
- Same responsive behavior
- Same form validation

### ✅ Enhanced Functionality
- Full CRUD operations for enquiries
- Real-time status updates
- Statistics dashboard
- Source tracking for form submissions
- Comprehensive error handling

### ✅ Admin Interface
- Clean card-based layout
- Status badges with color coding
- Modal forms for status updates
- Statistics visualization
- Responsive design

## Environment Configuration

The integration uses the existing environment variables:
- `NEXT_PUBLIC_BACKEND_URL` - Backend server URL
- `NEXT_PUBLIC_API_BASE_URL` - API base URL

## Error Handling

- Network errors are caught and displayed
- API response errors are handled gracefully
- User-friendly error messages
- Loading states during operations
- Form validation on both client and server side

## Next Steps

1. **Test the integration** with your backend server
2. **Add the EnquiryManagement component** to your admin dashboard
3. **Configure environment variables** if needed
4. **Test all CRUD operations** to ensure they work correctly
5. **Monitor enquiry submissions** through the admin interface

## Files Modified/Created

- ✅ `utils/api.ts` - Updated with enquiry endpoints and hook
- ✅ `components/ApplyNowForm.tsx` - Updated to use new API
- ✅ `components/EnquiryManagement.tsx` - New admin component
- ✅ `ENQUIRY_API_INTEGRATION.md` - This documentation

## Testing Checklist

- [ ] ApplyNow form submits successfully
- [ ] Enquiries appear in admin portal
- [ ] Status updates work correctly
- [ ] Statistics are displayed properly
- [ ] Error handling works as expected
- [ ] Loading states function correctly

The integration is complete and ready for use! 🚀 