import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
    '/',
    '/about',
    '/experience',
    '/interests',
    '/projects',
    '/contact',
    '/skills',
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/api/push(.*)',
    '/api/scores(.*)',
    '/api/tasks(.*)',
]);

function corsMiddleware(request: NextRequest) {
    const origin = request.headers.get('origin') || '';

    const allowedOrigins = [
        'http://localhost:3000',
        'http://localhost:5173',
        'https://localhost:5173',
        'https://matija-kocevar-portfolio.vercel.app',
        'https://matijakprojects.com',
    ];

    const isAllowedOrigin = allowedOrigins.includes(origin) || !origin;

    if (request.method === 'OPTIONS') {
        const response = new NextResponse(null, { status: 204 });
        response.headers.set('Access-Control-Allow-Origin', isAllowedOrigin ? origin : allowedOrigins[0]);
        response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        response.headers.set('Access-Control-Max-Age', '86400');
        return response;
    }

    const response = NextResponse.next();

    response.headers.set('Access-Control-Allow-Origin', isAllowedOrigin ? origin : allowedOrigins[0]);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    response.headers.set('Access-Control-Max-Age', '86400');

    return response;
}

export default clerkMiddleware((auth, req) => {
    if (req.method === 'OPTIONS') {
        return corsMiddleware(req);
    }

    if (!isPublicRoute(req)) {
        auth.protect();
    }

    return corsMiddleware(req);
});

export const config = {
    matcher: ['/api/:path*', '/((?!_next|images|icons|.*\\.[\\w]+$).*)'],
};
