'use client';

import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from './ThemeProvider';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: Record<string, any>;
    locale: string;
};

export default function NextIntlProvider({ messages, locale, children }: PropsWithChildren<Props>) {
    return (
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <NextIntlClientProvider messages={messages} locale={locale}>
                {children}
            </NextIntlClientProvider>
        </ThemeProvider>
    );
}
