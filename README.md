# Portfolio V3

My personal portfolio website built with Next.js 15, showcasing my projects, skills, and experience. I've designed it to be a modern, responsive, and user-friendly platform that highlights my work and capabilities.
This version is a complete rewrite of my previous portfolio, with a focus on performance and user experience. It features a clean and modern design, with smooth animations and a responsive layout that works well on all devices.

This project also holds storage for my personal projects. I have a PostgreSQL database connected to the app, which allows me to store and manage my projects efficiently. The database is set up using Prisma, a powerful ORM that simplifies database interactions.

The aim of this project is to use all my knowledge and skills to create a website that covers most of the work developers do. I want it to show what I am capable of and what I can do for others. I also want to use this project to learn new technologies and improve my skills.

## Features

- 🎨 **Modern UI/UX** - Clean and responsive design with smooth animations
- 🌍 **Internationalization** - Support for multiple languages (English and Slovenian)
- 🎭 **Theme System** - Multiple color themes with light/dark mode support
- 📱 **Responsive Design** - Optimized for all screen sizes and orientations
- ⚡ **Fast Performance** - Built with Next.js App Router for optimal performance
- 🔒 **Authentication** - User authentication system using Clerk
- 🗃️ **Sections**
  - Home page with bio and showcase of active projects
  - About section with detailed background and capabilities
  - Experience timeline with work history
  - Projects gallery with live demos
  - Skills overview with categorized competencies
  - Interests section

## Upcoming Features

- ✍️ **Content Management System** - Edit all content (experience, projects, skills, etc.) directly through the UI when authenticated with real-time preview

## Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- mkcert (optional, only needed for testing on devices in your local network)
- PostgreSQL (for database features)

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. (Optional) For testing on devices in your local network:
```bash
mkcert -install
mkcert localhost <network_device_IP>
```
Move the generated certificates to the `certificates` folder:
- `localhost.pem` → `certificates/cert.pem`
- `localhost-key.pem` → `certificates/key.pem`

4. Set up environment variables:
- Copy `.env.example` to `.env.local`
- Fill in the required values in `.env.local`

5. Set up the database:
```bash
npx prisma migrate deploy
npx prisma generate
```

6. Run the development server:
```bash
npm run dev
```

Open [https://localhost:3000](https://localhost:3000) with your browser to see the result.

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, TailwindCSS
- **UI Components**: Shadcn UI
- **State Management**: Zustand
- **Styling**: Tailwind CSS with custom theming
- **Internationalization**: next-intl
- **Authentication**: Clerk
- **Deployment**: Vercel

## Learn More

This project uses several key technologies and patterns:

- [Next.js App Router](https://nextjs.org/docs/app) for routing and layouts
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Shadcn UI](https://ui.shadcn.com/) for re-usable components
- [next-intl](https://next-intl-docs.vercel.app/) for internationalization
- [Clerk](https://clerk.com/) for authentication
- [Zustand](https://github.com/pmndrs/zustand) for state management
