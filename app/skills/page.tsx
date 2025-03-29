import { useTranslations } from 'next-intl';

export default function SkillsPage() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-4 p-8'>
            <h1 className='mb-6 text-3xl font-bold'>{t('skills.title')}</h1>
            <div>
                <p>{t('skills.description')}.</p>
            </div>
        </div>
    );
}
