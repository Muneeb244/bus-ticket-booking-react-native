## Screen Shots
<img src="https://github.com/user-attachments/assets/d70b20d6-2dc6-4932-bcba-768b500ea134" alt="Logo" width="250" />
<img src="https://github.com/user-attachments/assets/439ba16e-0983-4f84-8e74-d03960f3c2c5" alt="Logo" width="250" />
<img src="https://github.com/user-attachments/assets/6c9bc54f-cdf7-408c-85ad-df3d53123b75" alt="Logo" width="250" />

## Full-Stack Bus Ticket Booking System
A complete full-stack web application for booking bus tickets, featuring real-time seat selection, secure authentication, an admin dashboard, and a responsive UI. Built using the MERN stack, AdminJS, and TanStack Query.

### Key Features
- Bus ticket booking with real-time seat selection and availability  
- Complete authentication flow using access and refresh tokens  
- Admin dashboard built with AdminJS for managing routes, bookings, and users  
- Backend powered by Node.js, Express.js, and MongoDB  
- Fully responsive and clean UI for both users and admin  
- RESTful APIs for all major operations  
- Structured codebase with clean and maintainable architecture  

### Technologies Used
- **Frontend:** React.js, Tailwind CSS, TanStack Query  
- **Backend:** Node.js, Express.js, MongoDB  
- **Admin Panel:** AdminJS  
- **Auth:** JWT (Access + Refresh tokens)

## Installation
1. Clone the Repository
git clone https://github.com/your-username/bus-ticket-booking.git
cd bus-ticket-booking

3. Setup Backend
cd backend
npm install

## Create a `.env` file in the backend directory:

```env
MONGO_URL=mongodb://localhost:27017/
ACCESS_TOKEN_SECRET=ticket-book
ACCESS_TOKEN_EXPIRY=10d
REFRESH_TOKEN_SECRET=bus-book
REFRESH_TOKEN_EXPIRY=30d
COOKIE_PASSWORD=el433kksjolqmsddffd453dsdsdg45232znxckal
ADMIN_LOGIN_EMAIL=muneeb244@gmail.com
ADMIN_LOGIN_PASSWORD=12340987
```


## Then run the backend server:
npm start

3. Setup Frontend
cd ../frontend
npm install
npm start

  
## Authentication Flow
Uses Access Tokens (short-lived) and Refresh Tokens (long-lived)

Tokens are stored in HTTP-only cookies for secure client-server communication

## State Management
TanStack Query is used for data fetching and caching, improving performance and UX
