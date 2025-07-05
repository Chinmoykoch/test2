# API Base URL Fix Documentation

## Issue Description

When deploying the application to Vercel, API calls were returning 404 errors because the URLs were being constructed incorrectly. The issue was that some API functions were using `${API_BASE_URL}` directly with the `apiClient`, which already has the base URL configured, resulting in double URLs like:

**Incorrect URL (causing 404):**
```
https://backend-rakj.onrender.com/api/v1https://backend-rakj.onrender.com/api/v1/logo/getlogo
```

**Correct URL (working):**
```
https://backend-rakj.onrender.com/api/v1/logo/getlogo
```

## Root Cause

The `apiClient` in `utils/api.ts` was configured with:
```typescript
export const apiClient = axios.create({
  baseURL: API_BASE_URL, // https://backend-rakj.onrender.com/api/v1
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});
```

However, some API functions were still using `${API_BASE_URL}` in their calls:
```typescript
// INCORRECT - Double URL
const response = await apiClient.get(`${API_BASE_URL}/career-posts/getallcareerposts`);

// CORRECT - Single URL
const response = await apiClient.get('/career-posts/getallcareerposts');
```

## Affected API Functions

The following career posts API functions were fixed:

1. `getCareerPosts()`
2. `getCareerPostsWithApplicants()`
3. `getActiveCareerPosts()`
4. `getCareerPostById(id)`
5. `createCareerPost(data)`
6. `updateCareerPost(id, data)`
7. `deleteCareerPost(id)`
8. `toggleCareerPostStatus(id)`
9. `getApplicantsForCareerPost(careerId)`
10. `updateApplicantStatus(careerId, applicantId, status)`

## Fix Implementation

### Before (Incorrect)
```typescript
export async function getCareerPosts(): Promise<CareerPost[]> {
  const response = await apiClient.get(`${API_BASE_URL}/career-posts/getallcareerposts`);
  // ... rest of the function
}
```

### After (Correct)
```typescript
export async function getCareerPosts(): Promise<CareerPost[]> {
  const response = await apiClient.get('/career-posts/getallcareerposts');
  // ... rest of the function
}
```

## Verification

The fix ensures that all API calls now use the correct URL structure:

- **Base URL:** `https://backend-rakj.onrender.com/api/v1`
- **Endpoint:** `/logo/getlogo`
- **Final URL:** `https://backend-rakj.onrender.com/api/v1/logo/getlogo`

## Testing

To verify the fix is working:

1. **Industry Partners API:** [https://backend-rakj.onrender.com/api/v1/logo/getlogo](https://backend-rakj.onrender.com/api/v1/logo/getlogo)
   - Should return industry partners data
   - Status: ✅ Working

2. **Mentors API:** `https://backend-rakj.onrender.com/api/v1/mentor/all`
   - Should return mentors data
   - Status: ✅ Working

3. **Campus Events API:** `https://backend-rakj.onrender.com/api/v1/campusevent/getcampusevents`
   - Should return campus events data
   - Status: ✅ Working

4. **Courses API:** `https://backend-rakj.onrender.com/api/v1/courses`
   - Should return courses data
   - Status: ✅ Working

## Components Using Correct API Patterns

The following components are correctly using local API routes or external APIs:

1. **LatestNews.tsx** - Uses external news API (newsapi.org)
2. **CounselingForm.tsx** - Uses local API route `/api/session-login`
3. **QuickPayment.tsx** - Uses local API routes `/api/order` and `/api/verify`
4. **AdmissionProcess.tsx** - Uses local API routes `/api/order` and `/api/verify`
5. **RazorpayLinkGenerator.tsx** - Uses local API route `/api/create-payment-link`

## API Configuration Summary

### Backend Base URL
```typescript
export const BACKEND_URL = 'https://backend-rakj.onrender.com';
export const API_BASE_URL = `${BACKEND_URL}/api/v1`;
```

### API Client Configuration
```typescript
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});
```

### Correct Usage Pattern
```typescript
// ✅ CORRECT - Use relative paths with apiClient
const response = await apiClient.get('/logo/getlogo');
const response = await apiClient.post('/contact/addcontact', data);
const response = await apiClient.put('/mentor/123', data);

// ❌ INCORRECT - Don't use API_BASE_URL with apiClient
const response = await apiClient.get(`${API_BASE_URL}/logo/getlogo`);
```

## Deployment Impact

This fix resolves the 404 errors that were occurring in production on Vercel. All mapped components should now successfully load data from the backend APIs.

## Monitoring

After deployment, monitor the following:
1. Network requests in browser dev tools
2. API response times
3. Error rates in application logs
4. User feedback on data loading

## Related Files

- `utils/api.ts` - Main API configuration and functions
- `components/Footer.tsx` - Uses industry partners API
- `components/Mentors.tsx` - Uses mentors API
- `components/NewsEvents.tsx` - Uses news and events APIs
- `components/AdvisorsPage.tsx` - Uses advisors API

## Future Considerations

1. **API Endpoint Validation:** Consider adding endpoint validation to catch similar issues early
2. **Environment-Specific URLs:** Ensure all environments use the correct base URL
3. **Error Handling:** Improve error handling for API failures
4. **Caching:** Consider implementing API response caching for better performance 