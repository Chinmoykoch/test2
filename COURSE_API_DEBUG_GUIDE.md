# Course API Debug Guide

## Problem Statement
The course and course program data is not being fetched from the backend admin panel. Changes made in the admin panel are not reflecting in the frontend UI.

## Root Cause Analysis

### 1. API Endpoint Issues
Based on the API documentation and current implementation, there are several potential issues:

#### Current API Endpoints Being Used:
- **Course by Slug**: `/api/v1/courses/slug/{slug}`
- **All Courses**: `/api/v1/courses`
- **Course Programs**: `/api/v1/courses/programs`

#### Expected Backend Structure:
According to the API documentation, the backend should return:
```json
{
  "success": true,
  "data": {
    "_id": "course_id",
    "slug": "interior-design",
    "title": "Interior Design",
    "programs": [
      {
        "_id": "program_id",
        "slug": "3-year-diploma-in-interior-design",
        "title": "3 Year Diploma in Interior Design",
        "duration": "3 Years Full-Time",
        "isActive": true
      }
    ]
  }
}
```

### 2. Potential Issues Identified

#### A. Backend Data Not Saved
- Admin panel changes might not be properly saved to the database
- Database connection issues
- Validation errors preventing data persistence

#### B. API Endpoint Mismatch
- Frontend calling wrong endpoints
- Backend endpoints not implemented correctly
- URL structure mismatch

#### C. Data Structure Mismatch
- Frontend expecting different data structure than backend provides
- Missing required fields
- Type mismatches

#### D. Caching Issues
- Browser caching old data
- CDN caching
- Backend caching

#### E. Authentication/Authorization
- API endpoints requiring authentication
- CORS issues
- Network connectivity problems

## Debugging Steps

### Step 1: Test Backend Connectivity
Visit: `http://localhost:3000/test-course-api-debug`

1. **Click "Test Direct API Calls"**
   - Tests all major API endpoints
   - Shows HTTP status codes
   - Displays raw API responses

2. **Check Browser Console**
   - Look for network errors
   - Check API response structure
   - Identify authentication issues

### Step 2: Verify Backend Data Structure
1. **Click "Test Backend Structure"**
   - Shows detailed course structure
   - Lists all programs in the course
   - Displays field counts

2. **Expected Output:**
```javascript
Backend course structure: {
  id: "course_id",
  slug: "interior-design",
  title: "Interior Design",
  programsCount: 4,
  programs: [
    {
      id: "program_id",
      title: "3 Year Diploma in Interior Design",
      slug: "3-year-diploma-in-interior-design",
      duration: "3 Years Full-Time",
      isActive: true
    }
  ]
}
```

### Step 3: Debug Program Matching
1. **Click "Test Program Matching"**
   - Shows how program slugs are being matched
   - Displays slug transformation logic
   - Identifies matching issues

2. **Expected Output:**
```javascript
Program "3 Year Diploma in Interior Design": {
  originalSlug: "3-year-diploma-in-interior-design",
  titleSlug: "3-year-diploma-in-interior-design",
  slugClean: "3-year-diploma-in-interior-design",
  frontendSlug: "3-year-diploma-in-interior-design",
  requestedSlug: "three-year-diploma-in-interior-design",
  requestedClean: "three-year-diploma-in-interior-design",
  matches: false
}
```

### Step 4: Compare React Hooks vs Direct API
1. **Check React Hook Results**
   - Compare with direct API results
   - Identify data transformation issues
   - Check for fallback data usage

## Common Issues and Solutions

### Issue 1: Backend Not Responding
**Symptoms:**
- HTTP 500 errors
- Network timeouts
- CORS errors

**Solutions:**
1. Check backend server status
2. Verify database connectivity
3. Check backend logs for errors
4. Test backend endpoints directly

### Issue 2: Wrong API Endpoints
**Symptoms:**
- HTTP 404 errors
- Empty data responses
- Wrong data structure

**Solutions:**
1. Verify API endpoint URLs
2. Check backend route definitions
3. Update frontend API calls
4. Test endpoints with Postman/curl

### Issue 3: Data Structure Mismatch
**Symptoms:**
- React hooks returning fallback data
- Missing program information
- Wrong field names

**Solutions:**
1. Update frontend data interfaces
2. Fix backend data structure
3. Add data transformation logic
4. Handle missing fields gracefully

### Issue 4: Program Slug Matching Issues
**Symptoms:**
- Programs not found
- Wrong program displayed
- Slug transformation errors

**Solutions:**
1. Fix slug generation logic
2. Update program matching algorithm
3. Standardize slug formats
4. Add debugging for slug matching

### Issue 5: Caching Issues
**Symptoms:**
- Old data showing
- Changes not reflecting
- Inconsistent data

**Solutions:**
1. Add cache busting parameters
2. Clear browser cache
3. Check CDN settings
4. Implement proper cache headers

## Testing Checklist

### Backend Tests
- [ ] Backend server is running
- [ ] Database is connected
- [ ] API endpoints are accessible
- [ ] Data is being saved correctly
- [ ] Authentication is working (if required)

### Frontend Tests
- [ ] API calls are reaching backend
- [ ] Response data structure is correct
- [ ] React hooks are working
- [ ] Data transformation is correct
- [ ] Error handling is working

### Integration Tests
- [ ] Admin panel saves data
- [ ] Frontend fetches updated data
- [ ] Program matching works correctly
- [ ] Cache busting is effective
- [ ] Real-time updates work

## Debug Commands

### Test Backend Health
```bash
curl https://backend-rakj.onrender.com/api/v1/health
```

### Test Course API
```bash
curl https://backend-rakj.onrender.com/api/v1/courses/slug/interior-design
```

### Test All Courses
```bash
curl https://backend-rakj.onrender.com/api/v1/courses
```

### Test with Cache Busting
```bash
curl "https://backend-rakj.onrender.com/api/v1/courses/slug/interior-design?_t=$(date +%s)"
```

## Next Steps

1. **Run the debug test page** and check results
2. **Identify the specific issue** from the test results
3. **Fix the root cause** (backend, frontend, or integration)
4. **Test the fix** with real admin panel changes
5. **Monitor for recurring issues**

## Files to Check

### Frontend Files
- `utils/api.ts` - API configuration and helpers
- `app/(main)/[category]/page.tsx` - Category page
- `app/(main)/[category]/[degree]/page.tsx` - Degree page
- `app/test-course-api-debug/page.tsx` - Debug test page

### Backend Files (if accessible)
- Course routes
- Course controller
- Database models
- Authentication middleware

## Support

If issues persist after following this guide:
1. Check backend logs for detailed error messages
2. Verify database contains the expected data
3. Test API endpoints with external tools
4. Check network connectivity and CORS settings 