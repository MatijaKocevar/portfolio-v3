import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../types/locale';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export async function generateMetadata({ params }: MetaLocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale });

    const title = t('app.meta.title');
    const description = t('app.meta.description');

    return {
        title,
        description,
    };
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const messages = await getMessages();
    const locale = await getLocale();

    return (
        <html lang={locale} className='dark h-full'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} h-full bg-background text-foreground antialiased`}
            >
                <NextIntlClientProvider messages={messages}>
                    <div className='flex h-full flex-col'>
                        <Navigation locale={locale} />
                        <main className='flex flex-1'>{children}</main>
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
