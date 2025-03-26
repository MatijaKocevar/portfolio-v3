import { useTranslations } from 'next-intl';

export default function InterestsPage() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-4 p-8'>
            <h1 className='mb-6 text-3xl font-bold'>{t('interests.title')}</h1>
            <div>
                <p>{t('interests.description')}.</p>
            </div>
        </div>
    );
}
