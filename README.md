# Workout Tracker API

## Run
npm install
cp .env.example .env
npm run dev

## Endpoints (base http://localhost:8000/api/v1)
- Users: /users
- Workouts: /workouts
- Exercises: /exercises
- Progress: /progress

Example:
GET /api/v1/users
POST /api/v1/users  { "name":"Juan", "email":"j@x.com" }

## Postman collection
postman/WorkoutTracker.postman_collection.json
