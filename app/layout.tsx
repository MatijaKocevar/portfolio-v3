import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../types/locale';
import Providers from '@/providers/Providers';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarInset, SidebarTrigger } from '../components/ui/sidebar';

import { Separator } from '../components/ui/separator';
import Breadcrumbs from '../components/Breadcrumbs';
import { AuthButton } from '../components/AuthButton';

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
        <html lang={locale} suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} flex h-[100dvh] bg-background text-foreground antialiased`}
            >
                <Providers messages={messages} locale={locale}>
                    <AppSidebar />
                    <SidebarInset>
                        <header className='sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background/80 px-4 backdrop-blur'>
                            <div className='flex items-center gap-2 md:flex'>
                                <div className='hidden md:block'>
                                    <SidebarTrigger className='-ml-1' />
                                </div>
                                <Separator orientation='vertical' className='mr-2 hidden h-4 md:block' />
                                <Breadcrumbs />
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='hidden items-center gap-4 lg:flex'>
                                    <AuthButton />
                                </div>
                                <div className='block md:hidden'>
                                    <SidebarTrigger className='-mr-1' />
                                </div>
                            </div>
                        </header>
                        <main className='relative flex-1 overflow-auto'>{children}</main>
                    </SidebarInset>
                </Providers>
            </body>
        </html>
    );
}
