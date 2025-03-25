import { useTranslations } from 'next-intl';
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

export default function Projects() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-4 p-8'>
            <h1 className='mb-6 text-3xl font-bold'>{t('projects.title')}</h1>
            <div>
                <p>{t('projects.description')}.</p>
            </div>
        </div>
    );
}
