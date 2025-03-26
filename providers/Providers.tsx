import { PropsWithChildren } from 'react';
import NextIntlProvider from './NextIntlProvider';
import { ThemeProvider } from './ThemeProvider';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: Record<string, any>;
    locale: string;
};

export default function Providers({ messages, locale, children }: PropsWithChildren<Props>) {
    return (
        <ThemeProvider attribute='class' defaultTheme='violet-dark' enableSystem disableTransitionOnChange>
            <NextIntlProvider messages={messages} locale={locale}>
                {children}
            </NextIntlProvider>
        </ThemeProvider>
    );
}
