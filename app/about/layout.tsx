import { getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../../types';

export async function generateMetadata({ params }: MetaLocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale });

    const title = t('about.meta.title');
    const description = t('about.meta.description');

    return {
        title,
        description,
    };
}

export default async function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='container p-8'>{children}</div>;
}
