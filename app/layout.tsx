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
        <html lang='en' className='h-full'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} h-full bg-background text-foreground antialiased`}
            >
                <div className='flex h-full flex-col'>
                    <Navigation />
                    <main className='flex flex-1'>{children}</main>
                </div>
            </body>
        </html>
    );
}
