import { getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../../types/locale';

export async function generateMetadata({ params }: MetaLocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale });

    const title = t('interests.meta.title');
    const description = t('interests.meta.description');

    return {
        title,
        description,
    };
}

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='container mx-auto px-4 py-8'>{children}</div>;
}
