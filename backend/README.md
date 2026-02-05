# Portfolio Backend

Node.js + Express backend service for handling contact form emails.

## Setup

1. Install dependencies: `npm install`
2. Configure `.env`:
   ```env
   PORT=5000
   EMAIL_USER=...
   EMAIL_PASS=...
   ```
3. Run dev server: `npm run dev`

## API Endpoints

- `POST /api/contact`: Sends an email.
  - Body: `{ name, email, message }`
