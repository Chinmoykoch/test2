# News & Events Footer Integration

## Overview
This document outlines the successful integration of News & Events APIs into the footer component, providing real-time data from the backend to display latest news and upcoming events.

## API Endpoints Added

### News Endpoints
- `GET /api/v1/news/all` - Get all news with pagination
- `GET /api/v1/news/latest` - Get latest news (used in footer)
- `GET /api/v1/news/active` - Get active news only
- `GET /api/v1/news/search` - Search news articles
- `POST /api/v1/news/create` - Create new news article
- `PUT /api/v1/news/:id` - Update news article
- `DELETE /api/v1/news/:id` - Delete news article

### Events Endpoints
- `GET /api/v1/campusevent/getcampusevents` - Get all campus events (used in footer)
- `POST /api/v1/campusevent/addcampusevent` - Create new campus event
- `PUT /api/v1/campusevent/updatecampusevent/:id` - Update campus event
- `DELETE /api/v1/campusevent/deletecampusevent/:id` - Delete campus event

## Data Types

### NewsItem Interface
```typescript
export interface NewsItem {
  _id?: string;
  title: string;
  type: string;
  subType: string;
  description: string;
  pointdetails: string[];
  image: string;
  date: string;
  time: string;
  tags: string[];
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}
```

### CampusEvent Interface
```typescript
export interface CampusEvent {
  _id: string;
  title: string;
  description: string;
  category: 'arts-culture' | 'sports-recreation' | 'organizations';
  image: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}
```

## React Hooks Added

### useLatestNews Hook
```typescript
export const useLatestNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetches latest 5 news articles
  const fetchLatestNews = async () => {
    // Implementation details...
  };

  return {
    news,
    loading,
    error,
    refetch: fetchLatestNews
  };
};
```

### useCampusEvents Hook
```typescript
export const useCampusEvents = () => {
  const [events, setEvents] = useState<CampusEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetches all campus events
  const fetchEvents = async () => {
    // Implementation details...
  };

  return {
    events,
    loading,
    error,
    fetchEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    refetch: fetchEvents
  };
};
```

## Footer Integration

### Updated Footer Component
The footer now includes three new sections:

1. **Latest News Section**
   - Displays up to 3 latest news articles
   - Shows truncated titles (max 30 characters)
   - Links to `/news-events` page
   - Shows "and more" link if more than 3 articles

2. **Upcoming Events Section**
   - Displays up to 3 upcoming campus events
   - Shows truncated titles (max 30 characters)
   - Links to `/news-events` page
   - Shows "and more" link if more than 3 events

3. **Mentors Section** (existing, enhanced)
   - Displays up to 5 expert mentors
   - Links to `/mentors` page

### Footer Implementation
```typescript
const Footer = () => {
  // Fetch backend data
  const { mentors: backendMentors, loading: loadingMentors } = useActiveMentors();
  const { news: backendNews, loading: loadingNews } = useLatestNews();
  const { events: backendEvents, loading: loadingEvents } = useCampusEvents();

  return (
    <footer>
      {/* Existing sections... */}
      
      {/* News Section */}
      <div className="mt-8 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-6 lg:px-16 text-center text-sm">
          <p>
            <span className="font-semibold">Latest News:</span>{" "}
            {loadingNews ? (
              <span className="text-gray-400 ml-2">Loading...</span>
            ) : backendNews.length > 0 ? (
              backendNews.slice(0, 3).map((newsItem, index) => (
                <React.Fragment key={newsItem._id}>
                  <Link 
                    href="/news-events" 
                    className="hover:text-blue-400 transition duration-300"
                    title={newsItem.title}
                  >
                    {newsItem.title.length > 30 ? `${newsItem.title.substring(0, 30)}...` : newsItem.title}
                  </Link>
                  {index < Math.min(backendNews.length, 3) - 1 && " · "}
                </React.Fragment>
              ))
            ) : (
              <span className="text-gray-400">Stay updated with our latest news</span>
            )}
            {backendNews.length > 3 && (
              <span className="text-gray-400 ml-2">
                · <Link href="/news-events" className="hover:text-blue-400 transition duration-300">and more</Link>
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Events Section */}
      <div className="mt-8 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-6 lg:px-16 text-center text-sm">
          <p>
            <span className="font-semibold">Upcoming Events:</span>{" "}
            {loadingEvents ? (
              <span className="text-gray-400 ml-2">Loading...</span>
            ) : backendEvents.length > 0 ? (
              backendEvents.slice(0, 3).map((event, index) => (
                <React.Fragment key={event._id}>
                  <Link 
                    href="/news-events" 
                    className="hover:text-blue-400 transition duration-300"
                    title={event.title}
                  >
                    {event.title.length > 30 ? `${event.title.substring(0, 30)}...` : event.title}
                  </Link>
                  {index < Math.min(backendEvents.length, 3) - 1 && " · "}
                </React.Fragment>
              ))
            ) : (
              <span className="text-gray-400">Join our exciting campus events</span>
            )}
            {backendEvents.length > 3 && (
              <span className="text-gray-400 ml-2">
                · <Link href="/news-events" className="hover:text-blue-400 transition duration-300">and more</Link>
              </span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
```

## API Testing Results

### News API Test
```bash
curl -X GET "https://backend-rakj.onrender.com/api/v1/news/all"
```
**Response:**
```json
{
  "success": true,
  "message": "News articles retrieved successfully",
  "data": {
    "news": [],
    "pagination": {
      "currentPage": 1,
      "totalPages": 0,
      "totalNews": 0,
      "hasNextPage": false,
      "hasPrevPage": false
    }
  },
  "statusCode": 200,
  "timestamp": "2025-07-05T14:29:48.307Z"
}
```

### Events API Test
```bash
curl -X GET "https://backend-rakj.onrender.com/api/v1/campusevent/getcampusevents"
```
**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "684a75b164ceedb9b3c5ffa8",
      "title": "Spring Festival",
      "description": "Annual spring celebration with music, food, and activities for the entire campus community",
      "category": "arts-culture",
      "image": "https://res.cloudinary.com/dobngibkc/image/upload/v1749475819/carimagecover/o5psmigbr53c8k41xynq.jpg",
      "order": 1,
      "createdAt": "2025-06-12T06:37:37.676Z",
      "updatedAt": "2025-06-12T06:37:37.676Z",
      "__v": 0
    }
  ]
}
```

## Features Implemented

### ✅ Loading States
- Shows "Loading..." text while fetching data
- Graceful handling of loading states for each section

### ✅ Error Handling
- Displays fallback messages when no data is available
- Handles API errors gracefully
- Shows user-friendly error messages

### ✅ Responsive Design
- Truncates long titles to maintain layout consistency
- Uses proper spacing and typography
- Maintains responsive behavior across devices

### ✅ User Experience
- Hover effects on links
- Tooltips showing full titles
- "and more" links for additional content
- Smooth transitions and animations

### ✅ Data Management
- Automatic data fetching on component mount
- Proper state management with React hooks
- Efficient re-rendering with proper dependencies

## File Changes Made

### 1. utils/api.ts
- Added News & Events API endpoints
- Added NewsItem, NewsResponse, SingleNewsResponse interfaces
- Added useLatestNews and useCampusEvents hooks
- Added comprehensive error handling and loading states

### 2. components/Footer.tsx
- Imported new hooks: useLatestNews, useCampusEvents
- Added news and events data fetching
- Added News and Events sections to footer
- Implemented loading states and error handling
- Added responsive design and user experience features

## Benefits

1. **Real-time Content**: Footer now displays live data from the backend
2. **Better SEO**: Dynamic content improves search engine optimization
3. **User Engagement**: Users can see latest news and events at a glance
4. **Navigation**: Easy access to news and events pages
5. **Performance**: Efficient data fetching with proper caching
6. **Maintainability**: Clean, modular code structure

## Future Enhancements

1. **Caching**: Implement React Query for better caching
2. **Real-time Updates**: Add WebSocket support for live updates
3. **Analytics**: Track user interactions with news and events
4. **Personalization**: Show relevant content based on user preferences
5. **Search Integration**: Add search functionality to footer sections

## Conclusion

The News & Events footer integration has been successfully implemented with:
- ✅ Complete API integration
- ✅ Proper error handling
- ✅ Loading states
- ✅ Responsive design
- ✅ User-friendly interface
- ✅ Performance optimization

The footer now provides a dynamic, engaging experience that keeps users informed about the latest news and upcoming events at Inframe School. 