# Mentor API Integration Documentation

This document provides a complete overview of the mentor API integration implemented in the frontend application.

## Overview

The mentor API integration allows the frontend to fetch mentor data from the backend and display it in both the Mentors page and the Footer component. The integration includes fallback data to ensure the application works even when the backend is unavailable.

## Backend API Endpoints

### Base URL
```
https://backend-rakj.onrender.com/api/v1/mentor
```

### Available Endpoints

1. **Get All Mentors**
   - **Endpoint:** `GET /all`
   - **Description:** Retrieves all mentors with optional pagination
   - **Query Parameters:**
     - `page`: Page number (default: 1)
     - `limit`: Items per page (default: 10)
     - `search`: Search term for name/role/description
     - `tags`: Filter by specific tags (comma-separated)

2. **Get Mentor by ID**
   - **Endpoint:** `GET /:id`
   - **Description:** Retrieves a specific mentor by their ID

3. **Create Mentor**
   - **Endpoint:** `POST /create`
   - **Description:** Creates a new mentor

4. **Update Mentor**
   - **Endpoint:** `PUT /:id`
   - **Description:** Updates an existing mentor

5. **Delete Mentor**
   - **Endpoint:** `DELETE /:id`
   - **Description:** Deletes a mentor

## Frontend Implementation

### API Interfaces

The following TypeScript interfaces are defined in `utils/api.ts`:

```typescript
export interface Mentor {
  _id?: string;
  name: string;
  role: string;
  description: string;
  image: string;
  tags: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface MentorResponse {
  success: boolean;
  message: string;
  data: Mentor;
  statusCode: number;
  timestamp: string;
}

export interface MultipleMentorsResponse {
  success: boolean;
  message: string;
  data: {
    mentors: Mentor[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalMentors: number;
      hasNextPage: boolean;
      hasPrevPage: boolean;
    };
  };
  statusCode: number;
  timestamp: string;
}
```

### API Functions

Two main hooks are provided for mentor data management:

#### 1. `useMentors()`
A comprehensive hook for full CRUD operations:

```typescript
const {
  mentors,
  loading,
  error,
  fetchMentors,
  createMentor,
  updateMentor,
  deleteMentor,
  getMentorById
} = useMentors();
```

**Features:**
- Fetch all mentors
- Create new mentor
- Update existing mentor
- Delete mentor
- Get mentor by ID
- Loading and error states

#### 2. `useActiveMentors()`
A simplified hook for displaying mentors in UI components:

```typescript
const {
  mentors,
  loading,
  error,
  refetch
} = useActiveMentors();
```

**Features:**
- Automatically fetches mentors on component mount
- Provides loading and error states
- Includes refetch function for manual updates
- Optimized for UI display

### API Endpoints Configuration

The mentor endpoints are configured in the `API_ENDPOINTS` object:

```typescript
export const API_ENDPOINTS = {
  // ... other endpoints
  
  // Mentors
  GET_MENTORS: '/api/v1/mentor/all',
  GET_MENTOR_BY_ID: '/api/v1/mentor',
  CREATE_MENTOR: '/api/v1/mentor/create',
  UPDATE_MENTOR: '/api/v1/mentor',
  DELETE_MENTOR: '/api/v1/mentor',
  
  // ... other endpoints
};
```

## Component Integration

### 1. Mentors Page (`components/Mentors.tsx`)

The Mentors page has been updated to use backend data with fallback support:

**Key Features:**
- Fetches mentors from backend using `useActiveMentors()`
- Displays loading spinner while fetching data
- Shows error message if API call fails
- Falls back to hardcoded mentor data if backend is unavailable
- Displays mentor information including:
  - Name and role
  - Expertise tags
  - Description
  - Profile image

**Code Structure:**
```typescript
const MentorsPage = () => {
  const { mentors, loading, error } = useActiveMentors();
  
  // Fallback mentors if backend data is not available
  const fallbackMentors: Mentor[] = [...];
  
  // Use backend mentors if available, otherwise use fallback
  const displayMentors = mentors.length > 0 ? mentors : fallbackMentors;
  
  return (
    // JSX with loading, error, and content states
  );
};
```

### 2. Footer Component (`components/Footer.tsx`)

The Footer component now displays a list of expert mentors:

**Key Features:**
- Fetches mentors using `useActiveMentors()`
- Displays up to 5 mentor names
- Shows "and more" link if there are more than 5 mentors
- Links to the main mentors page
- Graceful fallback if no mentors are available

**Code Structure:**
```typescript
const Footer = () => {
  const { mentors: backendMentors, loading: loadingMentors } = useActiveMentors();
  
  return (
    <footer>
      {/* Other footer content */}
      
      {/* Mentors Section */}
      <div className="mt-8 border-t border-gray-700 pt-8">
        <div className="container mx-auto px-6 lg:px-16 text-center text-sm">
          <p>
            <span className="font-semibold">Our Expert Mentors:</span>{" "}
            {loadingMentors ? (
              <span className="text-gray-400 ml-2">Loading...</span>
            ) : backendMentors.length > 0 ? (
              backendMentors.slice(0, 5).map((mentor, index) => (
                <React.Fragment key={mentor._id}>
                  <Link 
                    href="/mentors" 
                    className="hover:text-blue-400 transition duration-300"
                    title={`${mentor.name} - ${mentor.role}`}
                  >
                    {mentor.name}
                  </Link>
                  {index < Math.min(backendMentors.length, 5) - 1 && " · "}
                </React.Fragment>
              ))
            ) : (
              <span className="text-gray-400">Meet our industry experts</span>
            )}
            {backendMentors.length > 5 && (
              <span className="text-gray-400 ml-2">
                · <Link href="/mentors" className="hover:text-blue-400 transition duration-300">and more</Link>
              </span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};
```

## Error Handling

### API Error Handling

The API functions include comprehensive error handling:

1. **Network Errors:** Caught and logged with descriptive messages
2. **API Errors:** Response errors are handled with proper error messages
3. **Validation Errors:** Backend validation errors are displayed to users
4. **Fallback Data:** Hardcoded mentor data is used when backend is unavailable

### User Experience

- **Loading States:** Spinners and loading text during API calls
- **Error Messages:** Clear error messages when API calls fail
- **Graceful Degradation:** Application continues to work with fallback data
- **Retry Mechanisms:** Users can retry failed operations

## Data Flow

1. **Component Mount:** `useActiveMentors()` automatically fetches mentor data
2. **API Call:** Request sent to backend mentor endpoints
3. **Response Handling:** Data processed and stored in component state
4. **UI Update:** Component re-renders with mentor data
5. **Fallback:** If API fails, fallback data is displayed

## Backend Requirements

### Expected Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Mentors retrieved successfully",
  "data": {
    "mentors": [
      {
        "_id": "507f1f77bcf86cd799439011",
        "name": "Dr. John Smith",
        "role": "Senior Software Engineer",
        "description": "Experienced software engineer...",
        "image": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/mentor-profile.jpg",
        "tags": ["JavaScript", "React", "Node.js"],
        "createdAt": "2024-01-15T10:30:00.000Z",
        "updatedAt": "2024-01-15T10:30:00.000Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalMentors": 50,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  },
  "statusCode": 200,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here",
  "error": "Detailed error information",
  "statusCode": 400,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Required Fields

Each mentor object must include:
- `name`: Mentor's full name
- `role`: Professional role/title
- `description`: Detailed description/bio
- `image`: Cloudinary image URL
- `tags`: Array of expertise areas/skills

## Testing

### Manual Testing

1. **Backend Available:**
   - Navigate to `/mentors` page
   - Verify mentors load from backend
   - Check footer displays mentor names
   - Test loading states

2. **Backend Unavailable:**
   - Disconnect from backend
   - Verify fallback data displays
   - Check error messages appear
   - Ensure application continues to work

3. **API Errors:**
   - Test with invalid API responses
   - Verify error handling works
   - Check fallback mechanisms

### Automated Testing

Consider implementing tests for:
- API function calls
- Component rendering with different data states
- Error handling scenarios
- Loading state management

## Future Enhancements

1. **Pagination:** Implement pagination controls for large mentor lists
2. **Search/Filter:** Add search and filtering capabilities
3. **Caching:** Implement client-side caching for better performance
4. **Real-time Updates:** Add WebSocket support for real-time mentor updates
5. **Admin Interface:** Create admin panel for mentor management
6. **Image Optimization:** Implement image optimization and lazy loading

## Troubleshooting

### Common Issues

1. **Mentors Not Loading:**
   - Check backend API availability
   - Verify API endpoints are correct
   - Check network connectivity
   - Review browser console for errors

2. **Images Not Displaying:**
   - Verify Cloudinary URLs are valid
   - Check image accessibility
   - Review CORS settings

3. **API Errors:**
   - Check backend logs
   - Verify request format
   - Review authentication requirements

### Debug Information

Enable debug logging by checking browser console for:
- API request/response logs
- Error messages
- Loading state changes
- Fallback data usage

## Conclusion

The mentor API integration provides a robust, user-friendly way to display mentor information throughout the application. With comprehensive error handling, fallback mechanisms, and loading states, the integration ensures a smooth user experience regardless of backend availability.

The implementation follows best practices for React/Next.js applications and provides a solid foundation for future enhancements and scaling. 