# Vercel Deployment API Fix Guide

## Issue Description

After deploying to Vercel, API calls are returning 404 errors because they're missing the `/api/v1` prefix. The URLs being called are:

**❌ Incorrect URLs (causing 404):**
- `https://backend-rakj.onrender.com/mentor/all`
- `https://backend-rakj.onrender.com/logo/getlogo`
- `https://backend-rakj.onrender.com/news/latest?limit=5`
- `https://backend-rakj.onrender.com/membership/getMembership`

**✅ Correct URLs (should work):**
- `https://backend-rakj.onrender.com/api/v1/mentor/all`
- `https://backend-rakj.onrender.com/api/v1/logo/getlogo`
- `https://backend-rakj.onrender.com/api/v1/news/latest?limit=5`
- `https://backend-rakj.onrender.com/api/v1/membership/getMembership`

## Root Cause

The issue is that environment variables are not set in Vercel, causing the API_BASE_URL to fall back to the default value, but there might be a caching or build issue.

## Solution Steps

### Step 1: Set Environment Variables in Vercel

1. **Go to your Vercel dashboard**
2. **Select your project**
3. **Go to Settings → Environment Variables**
4. **Add the following environment variables:**

```
NEXT_PUBLIC_BACKEND_URL = https://backend-rakj.onrender.com
NEXT_PUBLIC_API_BASE_URL = https://backend-rakj.onrender.com/api/v1
```

### Step 2: Redeploy the Application

After setting the environment variables:

1. **Go to Deployments tab in Vercel**
2. **Click "Redeploy" on your latest deployment**
3. **Or push a new commit to trigger a new deployment**

### Step 3: Verify Environment Variables

The application now includes debug logging that will show in the browser console:

```javascript
console.log('API Client Configuration:', {
  baseURL: API_BASE_URL,
  backendURL: BACKEND_URL,
  apiBaseURL: API_BASE_URL,
  nodeEnv: process.env.NODE_ENV,
  hasBackendUrl: !!process.env.NEXT_PUBLIC_BACKEND_URL,
  hasApiBaseUrl: !!process.env.NEXT_PUBLIC_API_BASE_URL
});
```

**Expected output in production:**
```javascript
{
  baseURL: "https://backend-rakj.onrender.com/api/v1",
  backendURL: "https://backend-rakj.onrender.com",
  apiBaseURL: "https://backend-rakj.onrender.com/api/v1",
  nodeEnv: "production",
  hasBackendUrl: true,
  hasApiBaseUrl: true
}
```

### Step 4: Test the APIs

1. **Visit your deployed site**
2. **Open browser console (F12)**
3. **Check for the debug log message**
4. **Visit `/test-api-fix` to test all APIs**
5. **Verify that API calls are now working**

## Alternative Solution (If Environment Variables Don't Work)

If setting environment variables doesn't resolve the issue, we can hardcode the URLs temporarily:

```typescript
// In utils/api.ts, replace lines 526-527 with:
export const BACKEND_URL = 'https://backend-rakj.onrender.com';
export const API_BASE_URL = 'https://backend-rakj.onrender.com/api/v1';
```

## Verification Checklist

- [ ] Environment variables set in Vercel
- [ ] Application redeployed
- [ ] Debug logs show correct URLs
- [ ] `/test-api-fix` page shows successful API calls
- [ ] No more 404 errors in console
- [ ] Components load data from backend

## Common Issues and Solutions

### Issue 1: Environment Variables Not Loading
**Solution:** Make sure to redeploy after setting environment variables

### Issue 2: Cached Build
**Solution:** Clear Vercel cache and redeploy

### Issue 3: Wrong Environment Variable Names
**Solution:** Ensure variable names start with `NEXT_PUBLIC_` for client-side access

### Issue 4: Backend Server Down
**Solution:** Verify backend server is running at `https://backend-rakj.onrender.com`

## Testing Commands

You can test the backend directly:

```bash
# Test industry partners
curl https://backend-rakj.onrender.com/api/v1/logo/getlogo

# Test mentors
curl https://backend-rakj.onrender.com/api/v1/mentor/all

# Test news
curl https://backend-rakj.onrender.com/api/v1/news/latest?limit=5

# Test membership
curl https://backend-rakj.onrender.com/api/v1/membership/getMembership
```

## Expected Results

After implementing the fix:

1. **All API calls should use the correct URLs with `/api/v1` prefix**
2. **No more 404 errors in the console**
3. **Components should load data from the backend**
4. **The test page should show successful API calls**

## Monitoring

After deployment, monitor:

1. **Browser console for any remaining 404 errors**
2. **Network tab in DevTools to verify correct URLs**
3. **Application functionality to ensure data is loading**
4. **Backend server status and response times**

## Support

If issues persist after following these steps:

1. **Check Vercel deployment logs**
2. **Verify backend server is accessible**
3. **Test API endpoints directly**
4. **Review environment variable configuration** 