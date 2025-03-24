import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
    const cookieLocale = (await cookies()).get('MATIJAKOCEVARPORTFOLIO_LOCALE')?.value ?? 'en';

    console.log('cookieLocale:', cookieLocale);

    return {
        locale: cookieLocale,
        messages: (await import(`../messages/${cookieLocale}.json`)).default,
    };
});
