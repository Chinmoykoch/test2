# API Route Fixes - Double /api/v1/ Prefix Resolution

## Issue Identified

The frontend was making API calls with double `/api/v1/` prefixes, resulting in URLs like:
- ❌ `https://backend-rakj.onrender.com/api/v1/api/v1/courses`
- ❌ `https://backend-rakj.onrender.com/api/v1/api/v1/logo/getlogo`

Instead of the correct URLs:
- ✅ `https://backend-rakj.onrender.com/api/v1/courses`
- ✅ `https://backend-rakj.onrender.com/api/v1/logo/getlogo`

## Root Cause

The issue was caused by:
1. **Base URL Configuration**: `API_BASE_URL` was set to `https://backend-rakj.onrender.com/api/v1`
2. **Endpoint Definitions**: API endpoints were also prefixed with `/api/v1/`
3. **Result**: Double prefix when combined

## Solution Implemented

### 1. Updated API Base URL Configuration

**File**: `utils/api.ts`
```typescript
// Before
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://backend-rakj.onrender.com/api/v1';

// After (no change needed - this was correct)
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://backend-rakj.onrender.com/api/v1';
```

### 2. Removed /api/v1/ Prefix from All Endpoints

**File**: `utils/api.ts` - `API_ENDPOINTS` object

**Before**:
```typescript
export const API_ENDPOINTS = {
  LOGIN: '/api/v1/auth/login',
  GET_COURSES: '/api/v1/courses',
  GET_INDUSTRY_PARTNERS: '/api/v1/logo/getlogo',
  // ... all endpoints had /api/v1/ prefix
};
```

**After**:
```typescript
export const API_ENDPOINTS = {
  LOGIN: '/auth/login',
  GET_COURSES: '/courses',
  GET_INDUSTRY_PARTNERS: '/logo/getlogo',
  // ... all endpoints now without /api/v1/ prefix
};
```

### 3. Fixed Hardcoded API Calls

**File**: `utils/api.ts`

**Before**:
```typescript
const FREE_COURSES_API_URL = 'https://backend-rakj.onrender.com/api/v1/free-courses';
const response = await apiClient.get('/api/v1/career-posts/getactivecareerposts');
```

**After**:
```typescript
const FREE_COURSES_API_URL = `${API_BASE_URL}/free-courses`;
const response = await apiClient.get('/career-posts/getactivecareerposts');
```

## Complete List of Fixed Endpoints

### Authentication
- `LOGIN`: `/auth/login`
- `REGISTER`: `/auth/register`
- `LOGOUT`: `/auth/logout`

### User Management
- `PROFILE`: `/user/profile`
- `UPDATE_PROFILE`: `/user/profile`

### Admissions
- `SUBMIT_APPLICATION`: `/admissions/apply`
- `GET_APPLICATION_STATUS`: `/admissions/status`

### Courses
- `GET_COURSES`: `/courses`
- `GET_COURSE_BY_SLUG`: `/courses/slug`
- `GET_COURSE_BY_ID`: `/courses`
- `CREATE_COURSE`: `/courses`
- `UPDATE_COURSE`: `/courses`
- `DELETE_COURSE`: `/courses`
- `GET_COURSE_PROGRAMS`: `/courses/programs`
- `GET_COURSE_PROGRAM_BY_SLUG`: `/courses`
- `GET_COURSE_FEATURES`: `/courses/features`
- `GET_COURSE_TESTIMONIALS`: `/courses/testimonials`
- `GET_COURSE_FAQS`: `/courses/faqs`
- `GET_COURSE_CURRICULUM`: `/courses/curriculum`
- `GET_COURSE_SOFTWARE`: `/courses/software`
- `GET_COURSE_CAREER_PROSPECTS`: `/courses/career-prospects`
- `GENERATE_SLUG`: `/courses/generate-slug`

### Payments
- `CREATE_PAYMENT`: `/payments/create`
- `VERIFY_PAYMENT`: `/payments/verify`

### Contact/Enquiry
- `SUBMIT_ENQUIRY`: `/enquiries`
- `SUBMIT_COUNSELING_REQUEST`: `/contact/counseling`
- `ADD_CONTACT`: `/contact/addcontact`

### News/Blog
- `GET_NEWS`: `/news`
- `GET_BLOG_POSTS`: `/blog`

### Gallery
- `GET_GALLERY_IMAGES`: `/gallery`

### Testimonials
- `GET_TESTIMONIALS`: `/testimonials/gettestimonials`

### Blog
- `GET_BLOGS`: `/blog/getblogs`
- `GET_ALL_BLOGS`: `/blog/getallblogs`
- `GET_PUBLISHED_BLOGS`: `/blog/getpublishedblogs`
- `GET_POPULAR_BLOGS`: `/blog/getpopularblogs`
- `GET_BLOG_BY_ID`: `/blog/getblogbyid`
- `GET_BLOG_BY_SLUG`: `/blog/getblogbyslug`
- `GET_BLOGS_BY_CATEGORY`: `/blog/getblogsbycategory`

### Student Clubs
- `GET_STUDENT_CLUBS`: `/studentclub/getstudentclubs`

### Campus Events
- `GET_CAMPUS_EVENTS`: `/campusevent/getcampusevents`

### Membership
- `GET_MEMBERSHIP`: `/membership/getMembership`

### Advisors
- `GET_ADVISORS`: `/advisor/getadvisors`
- `GET_ADVISOR_BY_ID`: `/advisor/getadvisorsbyid`
- `CREATE_ADVISOR`: `/advisor/addadvisor`
- `UPDATE_ADVISOR`: `/advisor/updateadvisor`
- `DELETE_ADVISOR`: `/advisor/deleteadvisor`

### Mentors
- `GET_MENTORS`: `/mentor/all`
- `GET_MENTOR_BY_ID`: `/mentor`
- `CREATE_MENTOR`: `/mentor/create`
- `UPDATE_MENTOR`: `/mentor`
- `DELETE_MENTOR`: `/mentor`

### Enquiries
- `GET_ENQUIRIES`: `/enquiries`
- `GET_ENQUIRY_BY_ID`: `/enquiries`
- `UPDATE_ENQUIRY_STATUS`: `/enquiries`
- `DELETE_ENQUIRY`: `/enquiries`
- `GET_ENQUIRY_STATS`: `/enquiries/stats`

### Industry Partners
- `GET_INDUSTRY_PARTNERS`: `/logo/getlogo`
- `GET_INDUSTRY_PARTNER_BY_ID`: `/logo/getlogoById`
- `CREATE_INDUSTRY_PARTNER`: `/logo/addlogo`
- `UPDATE_INDUSTRY_PARTNER`: `/logo/updatelogo`
- `DELETE_INDUSTRY_PARTNER`: `/logo/deletelogo`

### Career Applications
- `SUBMIT_JOB_APPLICATION`: `/career-posts/apply`

### About Us
- `GET_HERO_IMAGES`: `/about-us/hero-images/getheroimages`
- `ADD_HERO_IMAGE`: `/about-us/hero-images/addheroimage`
- `UPDATE_HERO_IMAGE`: `/about-us/hero-images/updateheroimage`
- `DELETE_HERO_IMAGE`: `/about-us/hero-images/deleteheroimage`
- `GET_CONTENT_BY_TYPE`: `/about-us/content/getcontentbytype`
- `ADD_OR_UPDATE_CONTENT`: `/about-us/content/addorupdatecontent`
- `GET_STATISTICS`: `/about-us/statistics/getstatistics`
- `ADD_STATISTIC`: `/about-us/statistics/addstatistic`
- `UPDATE_STATISTIC`: `/about-us/statistics/updatestatistic`
- `DELETE_STATISTIC`: `/about-us/statistics/deletestatistic`
- `GET_CORE_VALUES`: `/about-us/core-values/getcorevalues`
- `ADD_CORE_VALUE`: `/about-us/core-values/addcorevalue`
- `UPDATE_CORE_VALUE`: `/about-us/core-values/updatecorevalue`
- `DELETE_CORE_VALUE`: `/about-us/core-values/deletecorevalue`
- `GET_CAMPUS_IMAGES`: `/about-us/campus-images/getcampusimages`
- `ADD_CAMPUS_IMAGE`: `/about-us/campus-images/addcampusimage`
- `UPDATE_CAMPUS_IMAGE`: `/about-us/campus-images/updatecampusimage`
- `DELETE_CAMPUS_IMAGE`: `/about-us/campus-images/deletecampusimage`

### Life at Inframe Sections
- `GET_LIFE_AT_INFRAME_SECTIONS`: `/lifeatinframesection/getlifeatinframesections`
- `ADD_LIFE_AT_INFRAME_SECTION`: `/lifeatinframesection/addlifeatinframesection`
- `UPDATE_LIFE_AT_INFRAME_SECTION`: `/lifeatinframesection/updatelifeatinframesection`
- `DELETE_LIFE_AT_INFRAME_SECTION`: `/lifeatinframesection/deletelifeatinframesection`

### Student Services
- `GET_STUDENT_SERVICES`: `/studentservice/getstudentservices`
- `ADD_STUDENT_SERVICE`: `/studentservice/addstudentservice`
- `UPDATE_STUDENT_SERVICE`: `/studentservice/updatestudentservice`
- `DELETE_STUDENT_SERVICE`: `/studentservice/deletestudentservice`

### Sports Facilities
- `GET_SPORTS_FACILITIES`: `/sportsfacility/getsportsfacilities`
- `ADD_SPORTS_FACILITY`: `/sportsfacility/addsportsfacility`
- `UPDATE_SPORTS_FACILITY`: `/sportsfacility/updatesportsfacility`
- `DELETE_SPORTS_FACILITY`: `/sportsfacility/deletesportsfacility`

### Life at Inframe Gallery Images
- `GET_LIFE_AT_INFRAME_GALLERY`: `/galleryimage/getgalleryimages`
- `ADD_LIFE_AT_INFRAME_GALLERY_IMAGE`: `/galleryimage/addgalleryimage`
- `UPDATE_LIFE_AT_INFRAME_GALLERY_IMAGE`: `/galleryimage/updategalleryimage`
- `DELETE_LIFE_AT_INFRAME_GALLERY_IMAGE`: `/galleryimage/deletegalleryimage`

### Downloads
- `GET_DOWNLOADS`: `/download/getdownloads`
- `GET_DOWNLOAD_BY_ID`: `/download/getdownloadbyid`
- `CREATE_DOWNLOAD`: `/download/adddownload`
- `UPDATE_DOWNLOAD`: `/download/updatedownload`
- `DELETE_DOWNLOAD`: `/download/deletedownload`
- `GET_DOWNLOAD_CATEGORIES`: `/download/getcategories`
- `DELETE_DOWNLOAD_CATEGORY`: `/download/deletecategory`

### General
- `HEALTH_CHECK`: `/health`

## Verification

### Before Fix
```javascript
// Console would show:
GET https://backend-rakj.onrender.com/api/v1/api/v1/logo/getlogo
GET https://backend-rakj.onrender.com/api/v1/api/v1/courses
```

### After Fix
```javascript
// Console now shows:
GET https://backend-rakj.onrender.com/api/v1/logo/getlogo
GET https://backend-rakj.onrender.com/api/v1/courses
```

## Testing

To verify the fix is working:

1. **Check Browser Console**: Look for API calls without double `/api/v1/` prefixes
2. **Test Industry Partners**: Verify `https://backend-rakj.onrender.com/api/v1/logo/getlogo` works
3. **Test Courses**: Verify `https://backend-rakj.onrender.com/api/v1/courses` works
4. **Test All Endpoints**: Ensure all API calls are working correctly

## Impact

- ✅ **Fixed**: All API calls now use correct URLs
- ✅ **Improved**: Better error handling and debugging
- ✅ **Consistent**: All endpoints follow the same pattern
- ✅ **Maintainable**: Easier to update and manage API endpoints

## Files Modified

1. **`utils/api.ts`** - Updated all API endpoint definitions
2. **`utils/api.ts`** - Fixed hardcoded API URLs
3. **Documentation** - Updated to reflect correct endpoint structure

## Next Steps

1. **Deploy Changes**: Deploy the updated code to production
2. **Monitor Logs**: Watch for any remaining API errors
3. **Test Functionality**: Verify all features work correctly
4. **Update Documentation**: Ensure all documentation reflects the correct endpoints 