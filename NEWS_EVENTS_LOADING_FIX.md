# News & Events Loading Fix

## Issue Description
The news and events components were stuck in a loading state and not fetching data from the backend APIs.

## Root Cause
The `useNews` hook in `utils/api.ts` was missing the `useEffect` hook to automatically fetch data when the component mounts. While the `useCampusEvents` hook had the `useEffect`, the `useNews` hook did not.

## Fix Applied

### Before (Broken)
```typescript
export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchNews = async (page: number = 1, limit: number = 10) => {
    // ... fetch logic
  };

  // ❌ Missing useEffect - data never fetched automatically
  return {
    news,
    loading,
    error,
    pagination,
    fetchNews,
    // ... other methods
  };
};
```

### After (Fixed)
```typescript
export const useNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const fetchNews = async (page: number = 1, limit: number = 10) => {
    // ... fetch logic
  };

  // ✅ Added useEffect - data fetched automatically on mount
  useEffect(() => {
    fetchNews();
  }, []);

  return {
    news,
    loading,
    error,
    pagination,
    fetchNews,
    // ... other methods
  };
};
```

## API Status Verification

### News API
- **Endpoint:** `GET /api/v1/news/all`
- **Status:** ✅ Working
- **Response:** Returns empty array (no news added yet)
- **Expected:** This is normal when no news has been added through admin panel

### Events API
- **Endpoint:** `GET /api/v1/campusevent/getcampusevents`
- **Status:** ✅ Working
- **Response:** Returns actual event data
- **Data:** Contains events like "Spring Festival"

## Components Affected

1. **NewsEvents Component** (`components/NewsEvents.tsx`)
   - Now properly loads news and events data
   - Shows loading states correctly
   - Displays data when available

2. **Footer Component** (`components/Footer.tsx`)
   - News and events sections now load properly
   - Uses `useLatestNews()` and `useCampusEvents()` hooks

## Expected Behavior Now

1. **Loading State:** Components show loading spinner while fetching data
2. **Data Display:** News and events are displayed when available from backend
3. **Empty State:** Shows appropriate message when no data is available
4. **Error Handling:** Shows error message if API calls fail

## Next Steps

1. **Add Content:** Use the admin panel to add news articles and events
2. **Test Display:** Verify that added content appears on the frontend
3. **Monitor Performance:** Ensure API response times are acceptable

## Files Modified

- `utils/api.ts` - Added `useEffect` to `useNews` hook

The fix ensures that both news and events data are automatically fetched when components mount, resolving the infinite loading issue. 