# Environment Variables Setup

This document explains how to set up and use environment variables in the Inframe School project.

## Quick Start

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Update the values in `.env.local` with your actual configuration.

## Environment Files

- `.env.local` - Your local development environment variables (not committed to git)
- `.env.example` - Template file showing all available environment variables

## Required Environment Variables

### Backend Configuration
- `NEXT_PUBLIC_BACKEND_URL` - Your backend server URL (currently set to: https://backend-rakj.onrender.com)
- `NEXT_PUBLIC_API_BASE_URL` - Your API base URL (usually backend URL + /api)

### App Configuration
- `NEXT_PUBLIC_APP_URL` - Your frontend app URL (for callbacks, etc.)

### Razorpay Configuration (for payments)
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` - Your Razorpay public key
- `RAZORPAY_KEY_SECRET` - Your Razorpay secret key (keep this secure!)

### News API (for latest news section)
- `NEXT_PUBLIC_NEWS_API_KEY` - Your News API key from newsapi.org

## Optional Environment Variables

### Database (if using local database)
- `MONGODB_URI` - MongoDB connection string
- `DB_URI` - Alternative MongoDB connection string

### Auth0 (if using Auth0 authentication)
- `AUTH0_SECRET`
- `AUTH0_BASE_URL`
- `AUTH0_ISSUER_BASE_URL`
- `AUTH0_CLIENT_ID`
- `AUTH0_CLIENT_SECRET`

### Email Configuration
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

## Using Environment Variables in Code

### Frontend Components
```typescript
// Use the centralized env utility
import { env } from '@/utils/env';

const backendUrl = env.BACKEND_URL;
```

### API Calls
```typescript
// Use the API utility for backend calls
import { apiClient, apiHelpers } from '@/utils/api';

// Make API calls
const data = await apiHelpers.getCourses();

// Or use the client directly
const response = await apiClient.get('/courses');
```

### Backend/Server Code
```javascript
// Use the config file
import { DB_URI, NODE_ENV } from '../config/env.js';
```

## Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Keep secrets secure** - Don't share API keys or secrets
3. **Use NEXT_PUBLIC_ prefix** only for variables that need to be accessible in the browser
4. **Validate environment variables** - Use the `validateEnv()` function from `utils/env.ts`

## Troubleshooting

### Environment variables not loading
1. Make sure your `.env.local` file is in the root directory
2. Restart your development server after adding new variables
3. Check that variable names are correct (case-sensitive)

### API calls failing
1. Verify `NEXT_PUBLIC_BACKEND_URL` is correct
2. Check if the backend server is running
3. Ensure CORS is configured on the backend

### Payment integration issues
1. Verify Razorpay keys are correct
2. Check if you're using test keys for development
3. Ensure the keys match your Razorpay dashboard

## Development vs Production

- Development: Use `.env.local`
- Production: Set environment variables in your hosting platform (Vercel, Netlify, etc.)

## Example Usage

```typescript
// Check backend health
import { apiHelpers } from '@/utils/api';

const checkBackend = async () => {
  try {
    await apiHelpers.healthCheck();
    console.log('Backend is running!');
  } catch (error) {
    console.error('Backend is not accessible:', error);
  }
};
```
