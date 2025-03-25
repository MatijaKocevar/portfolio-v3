'use client';

import { NextIntlClientProvider } from 'next-intl';
import { PropsWithChildren } from 'react';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: Record<string, any>;
    locale: string;
};

export default function NextIntlProvider({ messages, locale, children }: PropsWithChildren<Props>) {
    return (
        <NextIntlClientProvider messages={messages} locale={locale} timeZone='UTC'>
            {children}
        </NextIntlClientProvider>
    );
}
