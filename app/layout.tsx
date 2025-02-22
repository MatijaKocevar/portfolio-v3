import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Matija Kočevar | Portfolio',
    description: 'Personal portfolio showcasing my projects, experience, and skills',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased`}
            >
                <Navigation />
                <main className='mx-auto max-w-6xl px-4 py-8'>{children}</main>
            </body>
        </html>
    );
}
