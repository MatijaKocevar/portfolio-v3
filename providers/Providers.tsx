import { PropsWithChildren } from 'react';
import NextIntlProvider from './NextIntlProvider';

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: Record<string, any>;
    locale: string;
};

export default function Providers({ messages, locale, children }: PropsWithChildren<Props>) {
    return (
        <NextIntlProvider messages={messages} locale={locale}>
            {children}
        </NextIntlProvider>
    );
}
