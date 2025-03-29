import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
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
