import { PropsWithChildren } from 'react';
import NextIntlProvider from './next-intl-provider';
import { ThemeProvider } from './theme-provider';
import { SidebarProvider } from '../components/ui/sidebar';
import { ClerkProvider } from '@clerk/nextjs';
import { PullToRefresh } from '../components/pull-to-refresh';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: Record<string, any>;
    locale: string;
    isSidebarOpen?: boolean;
};

export default function Providers({ messages, locale, children, isSidebarOpen }: PropsWithChildren<Props>) {
    return (
        <ClerkProvider>
            <SidebarProvider defaultOpen={isSidebarOpen}>
                <ThemeProvider attribute='class' defaultTheme='blue-dark' enableSystem disableTransitionOnChange>
                    <NextIntlProvider messages={messages} locale={locale}>
                        <PullToRefresh />
                        {children}
                    </NextIntlProvider>
                </ThemeProvider>
            </SidebarProvider>
        </ClerkProvider>
    );
}
