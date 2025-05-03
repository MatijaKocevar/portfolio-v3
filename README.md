# Portfolio V3

My personal portfolio website built with Next.js 15, showcasing my projects, skills, and experience.

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
- **UI Components**: Radix UI with custom themed components
- **State Management**: Zustand
- **Styling**: Tailwind CSS with custom theming
- **Internationalization**: next-intl
- **Authentication**: Clerk
- **Deployment**: Vercel

## Learn More

This project uses several key technologies and patterns:

- [Next.js App Router](https://nextjs.org/docs/app) for routing and layouts
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [next-intl](https://next-intl-docs.vercel.app/) for internationalization
- [Clerk](https://clerk.com/) for authentication
- [Zustand](https://github.com/pmndrs/zustand) for state management
