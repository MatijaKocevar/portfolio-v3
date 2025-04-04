import { getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../../types/locale';

export async function generateMetadata({ params }: MetaLocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale });

    const title = t('home.meta.title');
    const description = t('home.meta.description');

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
    return (
        <div className='h-full' style={{ containerType: 'inline-size', containerName: 'home' }}>
            {children}
        </div>
    );
}
