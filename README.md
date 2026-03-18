# KRONOS Event Website

## Overview

KRONOS is a tech event featuring various workshops, hackathons, and competitions. This project is a Next.js-based website designed to provide event details, schedules, speaker information, registration, and sponsor details.

## Features

- **Event Details Page**: Overview of the event, themes, and schedules.
- **Speaker Profiles**: Detailed information on speakers and panelists.
- **Workshop & Hackathon Listings**: Description, rules, and registration links.
- **Sponsor Section**: Showcase sponsors and partners.



## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: NextAuth.js
- **Hosting**: Vercel (Frontend), Railway/Heroku (Backend)

## Installation

### Prerequisites

- Node.js >= 16.x
- MySQL database setup

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/Kuldeep-bhadouriya/Kronos-2026.git
   cd kronos-event
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:
   Create a `.env.local` file and add:
   ```env
   DATABASE_URL=mysql://user:password@localhost:3306/kronos
   NEXTAUTH_SECRET=your-secret-key
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

- **Frontend**: Deploy using [Vercel](https://vercel.com/)
- **Backend**: Deploy using [Railway](https://railway.app/) or [Heroku](https://www.heroku.com/)

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push the branch:
   ```bash
   git push origin feature-branch
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.