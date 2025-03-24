import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../../types/locale';

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

export default function About() {
    const t = useTranslations();
    return (
        <div className='flex flex-col gap-4 p-16'>
            <h1 className='mb-6 text-3xl font-bold'>{t('about.title')}</h1>
            <div>
                <p>{t('about.description')}.</p>
            </div>
        </div>
    );
}
