import { getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../../types/locale';

export async function generateMetadata({ params }: MetaLocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale });

    const title = t('experience.meta.title');
    const description = t('experience.meta.description');

    return {
        title,
        description,
    };
}

export default async function ExperienceLayout({
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
