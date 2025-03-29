import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../types/locale';
import Providers from '@/providers/Providers';
import { delay } from '../lib/utils';

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
        <html lang={locale} className='h-full' suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} h-full bg-background text-foreground antialiased`}
            >
                <Providers messages={messages} locale={locale}>
                    <div className='flex h-full flex-col'>
                        <Navigation locale={locale} />
                        <main className='flex flex-1 pt-[68px] min-[1024px]:pt-[64px] max-[1023px]:landscape:pt-[40px]'>
                            {children}
                        </main>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
