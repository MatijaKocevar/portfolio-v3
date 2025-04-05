import { PropsWithChildren } from 'react';
import NextIntlProvider from './NextIntlProvider';
import { ThemeProvider } from './ThemeProvider';
import { SidebarProvider } from '../components/ui/sidebar';
import { ClerkProvider } from '@clerk/nextjs';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: Record<string, any>;
    locale: string;
};

export default function Providers({ messages, locale, children }: PropsWithChildren<Props>) {
    return (
        <ClerkProvider>
            <SidebarProvider>
                <ThemeProvider attribute='class' defaultTheme='violet-dark' enableSystem disableTransitionOnChange>
                    <NextIntlProvider messages={messages} locale={locale}>
                        {children}
                    </NextIntlProvider>
                </ThemeProvider>
            </SidebarProvider>
        </ClerkProvider>
    );
}
