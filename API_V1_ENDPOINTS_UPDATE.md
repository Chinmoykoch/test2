# API v1 Endpoints Update Summary

## Overview
Updated all API endpoints in the application to include the `/api/v1` prefix for consistency and proper API versioning.

## Changes Made

### 1. Updated API_ENDPOINTS Configuration
- **File**: `utils/api.ts`
- **Action**: Added `/api/v1` prefix to all endpoint definitions
- **Total Endpoints Updated**: 80+ endpoints

### 2. Updated API_BASE_URL
- **File**: `utils/api.ts`
- **Before**: `https://backend-rakj.onrender.com/api/v1`
- **After**: `https://backend-rakj.onrender.com`
- **Reason**: Since all endpoints now include `/api/v1`, the base URL no longer needs it

### 3. Endpoint Categories Updated

#### Authentication
- `/auth/login` → `/api/v1/auth/login`
- `/auth/register` → `/api/v1/auth/register`
- `/auth/logout` → `/api/v1/auth/logout`

#### User Management
- `/user/profile` → `/api/v1/user/profile`
- `/user/profile` → `/api/v1/user/profile` (UPDATE_PROFILE)

#### Admissions
- `/admissions/apply` → `/api/v1/admissions/apply`
- `/admissions/status` → `/api/v1/admissions/status`

#### Courses
- `/courses` → `/api/v1/courses`
- `/courses/slug` → `/api/v1/courses/slug`
- `/courses/programs` → `/api/v1/courses/programs`
- `/courses/features` → `/api/v1/courses/features`
- `/courses/testimonials` → `/api/v1/courses/testimonials`
- `/courses/faqs` → `/api/v1/courses/faqs`
- `/courses/curriculum` → `/api/v1/courses/curriculum`
- `/courses/software` → `/api/v1/courses/software`
- `/courses/career-prospects` → `/api/v1/courses/career-prospects`
- `/courses/generate-slug` → `/api/v1/courses/generate-slug`

#### Payments
- `/payments/create` → `/api/v1/payments/create`
- `/payments/verify` → `/api/v1/payments/verify`

#### Contact/Enquiry
- `/enquiries` → `/api/v1/enquiries`
- `/contact/counseling` → `/api/v1/contact/counseling`
- `/contact/addcontact` → `/api/v1/contact/addcontact`

#### Blog
- `/blog/getblogs` → `/api/v1/blog/getblogs`
- `/blog/getallblogs` → `/api/v1/blog/getallblogs`
- `/blog/getpublishedblogs` → `/api/v1/blog/getpublishedblogs`
- `/blog/getpopularblogs` → `/api/v1/blog/getpopularblogs`
- `/blog/getblogbyid` → `/api/v1/blog/getblogbyid`
- `/blog/getblogbyslug` → `/api/v1/blog/getblogbyslug`
- `/blog/getblogsbycategory` → `/api/v1/blog/getblogsbycategory`

#### Student Clubs
- `/studentclub/getstudentclubs` → `/api/v1/studentclub/getstudentclubs`

#### Campus Events
- `/campusevent/getcampusevents` → `/api/v1/campusevent/getcampusevents`
- `/campusevent/addcampusevent` → `/api/v1/campusevent/addcampusevent`
- `/campusevent/updatecampusevent` → `/api/v1/campusevent/updatecampusevent`
- `/campusevent/deletecampusevent` → `/api/v1/campusevent/deletecampusevent`

#### Membership
- `/membership/getMembership` → `/api/v1/membership/getMembership`

#### Advisors
- `/advisor/getadvisors` → `/api/v1/advisor/getadvisors`
- `/advisor/getadvisorsbyid` → `/api/v1/advisor/getadvisorsbyid`
- `/advisor/addadvisor` → `/api/v1/advisor/addadvisor`
- `/advisor/updateadvisor` → `/api/v1/advisor/updateadvisor`
- `/advisor/deleteadvisor` → `/api/v1/advisor/deleteadvisor`

#### Mentors
- `/mentor/all` → `/api/v1/mentor/all`
- `/mentor` → `/api/v1/mentor`
- `/mentor/create` → `/api/v1/mentor/create`

#### Industry Partners
- `/logo/getlogo` → `/api/v1/logo/getlogo`
- `/logo/getlogoById` → `/api/v1/logo/getlogoById`
- `/logo/addlogo` → `/api/v1/logo/addlogo`
- `/logo/updatelogo` → `/api/v1/logo/updatelogo`
- `/logo/deletelogo` → `/api/v1/logo/deletelogo`

#### Career Applications
- `/career-posts/apply` → `/api/v1/career-posts/apply`
- `/career-posts/getallcareerposts` → `/api/v1/career-posts/getallcareerposts`
- `/career-posts/getactivecareerposts` → `/api/v1/career-posts/getactivecareerposts`
- `/career-posts/getcareerpostbyid` → `/api/v1/career-posts/getcareerpostbyid`
- `/career-posts/addcareerpost` → `/api/v1/career-posts/addcareerpost`
- `/career-posts/updatecareerpost` → `/api/v1/career-posts/updatecareerpost`
- `/career-posts/deletecareerpost` → `/api/v1/career-posts/deletecareerpost`
- `/career-posts/togglecareerpoststatus` → `/api/v1/career-posts/togglecareerpoststatus`
- `/career-posts/applicants` → `/api/v1/career-posts/applicants`

#### About Us
- `/about-us/hero-images/getheroimages` → `/api/v1/about-us/hero-images/getheroimages`
- `/about-us/content/getcontentbytype` → `/api/v1/about-us/content/getcontentbytype`
- `/about-us/statistics/getstatistics` → `/api/v1/about-us/statistics/getstatistics`
- `/about-us/core-values/getcorevalues` → `/api/v1/about-us/core-values/getcorevalues`
- `/about-us/campus-images/getcampusimages` → `/api/v1/about-us/campus-images/getcampusimages`

#### Life at Inframe
- `/lifeatinframesection/getlifeatinframesections` → `/api/v1/lifeatinframesection/getlifeatinframesections`
- `/studentservice/getstudentservices` → `/api/v1/studentservice/getstudentservices`
- `/sportsfacility/getsportsfacilities` → `/api/v1/sportsfacility/getsportsfacilities`
- `/galleryimage/getgalleryimages` → `/api/v1/galleryimage/getgalleryimages`

#### Downloads
- `/download/getdownloads` → `/api/v1/download/getdownloads`
- `/download/getdownloadbyid` → `/api/v1/download/getdownloadbyid`
- `/download/adddownload` → `/api/v1/download/adddownload`
- `/download/updatedownload` → `/api/v1/download/updatedownload`
- `/download/deletedownload` → `/api/v1/download/deletedownload`
- `/download/getcategories` → `/api/v1/download/getcategories`
- `/download/deletecategory` → `/api/v1/download/deletecategory`

#### News & Events
- `/news/all` → `/api/v1/news/all`
- `/news` → `/api/v1/news`
- `/news/create` → `/api/v1/news/create`
- `/news/type` → `/api/v1/news/type`
- `/news/subtype` → `/api/v1/news/subtype`
- `/news/search` → `/api/v1/news/search`
- `/news/latest` → `/api/v1/news/latest`
- `/news/active` → `/api/v1/news/active`
- `/news/types/all` → `/api/v1/news/types/all`
- `/news/subtypes/all` → `/api/v1/news/subtypes/all`
- `/news/tags/all` → `/api/v1/news/tags/all`
- `/news/toggle-status` → `/api/v1/news/toggle-status`

#### Session Login
- `/session/getsessionlogins` → `/api/v1/session/getsessionlogins`
- `/session/getsessionloginbyid` → `/api/v1/session/getsessionloginbyid`
- `/session/addsessionlogin` → `/api/v1/session/addsessionlogin`
- `/session/updatesessionlogin` → `/api/v1/session/updatesessionlogin`
- `/session/deletesessionlogin` → `/api/v1/session/deletesessionlogin`

#### Free Courses
- `/free-courses` → `/api/v1/free-courses`

#### General
- `/health` → `/api/v1/health`

## Testing

### Test Page Created
- **File**: `app/test-api-v1-endpoints/page.tsx`
- **Purpose**: Test all API endpoints with the new `/api/v1` prefix
- **Features**:
  - Tests 25+ different endpoint categories
  - Shows real-time results with status indicators
  - Displays full URLs being tested
  - Provides summary statistics

### How to Test
1. Navigate to `/test-api-v1-endpoints`
2. Click "Test All Endpoints"
3. Review results for each endpoint
4. Check summary statistics

## Benefits

1. **Consistency**: All API calls now use the same versioning pattern
2. **Future-Proofing**: Easy to upgrade to v2 when needed
3. **Clarity**: Clear separation between API versions
4. **Maintainability**: Centralized endpoint management
5. **Debugging**: Easier to identify API-related issues

## Impact

- **No Breaking Changes**: All existing functionality remains intact
- **Backward Compatibility**: The `apiClient` automatically handles the URL construction
- **Performance**: No performance impact, just URL structure changes
- **Deployment**: Changes are ready for immediate deployment

## Verification

After deployment, verify that:
1. All API calls are working correctly
2. No 404 errors are occurring
3. All components are loading data properly
4. Forms are submitting successfully

## Files Modified

1. `utils/api.ts` - Updated API_ENDPOINTS and API_BASE_URL
2. `app/test-api-v1-endpoints/page.tsx` - Created test page (new file)
3. `API_V1_ENDPOINTS_UPDATE.md` - This documentation (new file)

## Next Steps

1. Deploy the changes to production
2. Run the test page to verify all endpoints
3. Monitor application logs for any API-related errors
4. Update any external documentation if needed 