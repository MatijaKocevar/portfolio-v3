import { useTranslations } from 'next-intl';

export default function InterestsPage() {
    const t = useTranslations();

    return (
        <div className='scrollable-element flex flex-col gap-5 p-5 lg:p-10'>
            <h1 className='mb-6 text-3xl font-bold'>{t('interests.title')}</h1>
            <div>
                <p>{t('interests.description')}.</p>
            </div>
        </div>
    );
}
