import { useTranslations } from 'next-intl';
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

export default function Experience() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-4 p-8'>
            <h1 className='mb-6 text-3xl font-bold'>{t('experience.title')}</h1>
            <div>
                <p>{t('experience.description')}.</p>
            </div>
        </div>
    );
}
