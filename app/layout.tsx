import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import { getLocale, getMessages, getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../types/locale';
import Providers from '@/providers/Providers';
import { AppSidebar } from '../components/app-sidebar';
import { SidebarInset, SidebarTrigger } from '../components/ui/sidebar';
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from '../components/ui/breadcrumb';
import { Separator } from '../components/ui/separator';
import Breadcrumbs from '../components/Breadcrumbs';

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
                className={`${geistSans.variable} ${geistMono.variable} h-full bg-background text-foreground antialiased`}
            >
                <Providers messages={messages} locale={locale}>
                    <AppSidebar />
                    <SidebarInset>
                        <header className='sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4'>
                            <SidebarTrigger className='-ml-1' />
                            <Separator orientation='vertical' className='mr-2 h-4' />
                            <Breadcrumbs />
                        </header>
                        <div className='h-full'>{children}</div>
                    </SidebarInset>
                </Providers>
            </body>
        </html>
    );
}
