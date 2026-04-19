# Mindful Social App

## Project Overview
The Mindful Social App is designed to promote mental well-being through an anti-algorithmic approach, featuring a chronological feed and mood-aware functionalities. The focus is on fostering genuine connections and allowing users to engage with content at their own pace.

## Tech Stack
- **Backend:** Node.js, Express, PostgreSQL  
- **Frontend:** React Native

## Directory Structure

### Backend
```
/backend
├── controllers/       # Logic for handling requests  
├── models/            # Database models  
├── routes/            # API routes  
├── middleware/        # Middleware functions  
├── config/           # Configuration files  
├── .env               # Environment variables  
└── package.json       # Node package dependencies
```

### Frontend
```
/frontend
├── components/       # Reusable components  
├── screens/          # Screen components  
├── navigation/       # Navigation setup  
├── services/         # External services (API calls)  
├── App.js            # Main app file  
└── package.json      # Node package dependencies
```

## Installation Instructions

### Backend
1. Navigate to the backend directory:  
   `cd backend`  
2. Install dependencies:  
   `npm install`  
3. Set up environment variables:  
   Create a `.env` file and add your configuration settings.

### Frontend
1. Navigate to the frontend directory:  
   `cd frontend`  
2. Install dependencies:  
   `npm install`  
3. To run the app, use:  
   - Android: `npm run android`  
   - iOS: `npm run ios`

## Database Setup Instructions
1. Ensure PostgreSQL is installed on your machine.
2. Create a database for the Mindful Social App.
3. Run database migrations to set up the necessary tables.

## API Endpoints Documentation
- **Authentication**  
  - `POST /api/auth/login`  
  - `POST /api/auth/signup`  

- **Posts**  
  - `GET /api/posts`  
  - `POST /api/posts`  

- **Check-in**  
  - `GET /api/checkin`  
  - `POST /api/checkin`

## Screen Descriptions
- **Login:** Users can log in to their account with their credentials.
- **Signup:** Users can create a new account.
- **Check-In:** Users can log their mood and experiences.
- **Feed:** Users can view posts in a chronological order without any algorithmic sorting.

## Running the Project Locally
- **Backend:** Runs on `http://localhost:5000`.  
- **Frontend:** Access through your mobile device or simulator.

## Future Features
- Reflection prompts to encourage users to think deeply about their experiences.
- Batched notifications to help users stay updated without being overwhelmed.
