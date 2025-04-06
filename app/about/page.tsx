import { useTranslations } from 'next-intl';

export default function AboutPage() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-4'>
            <h1 className='mb-6 text-3xl font-bold'>{t('about.title')}</h1>
            <div>
                <p>{t('about.description')}</p>
            </div>
        </div>
    );
}
