# Terminal 1: Backend
cd backend
npm install
cp .env.example .env
# Edit .env with your PostgreSQL password

# Create database
psql -U postgres -c "CREATE DATABASE mindful_db;"
psql -U postgres -d mindful_db -f ../schema.sql

node index.js
# Should show: ✅ Server running on port 5000

# Terminal 2: Frontend
cd frontend
npm install
npx react-native run-android
# or: npx react-native run-ios
