import { getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../../types';

export async function generateMetadata({ params }: MetaLocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale });
    const title = t('contact.meta.title');
    const description = t('contact.meta.description');

    return {
        title,
        description,
    };
}

export default async function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='h-full w-full'>{children}</div>;
}
