import { getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../../types/locale';

export async function generateMetadata({ params }: MetaLocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale });
    const title = t('projects.meta.title');
    const description = t('projects.meta.description');

    return {
        title,
        description,
    };
}

export default async function ProjectsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='h-full'>{children}</div>;
}
