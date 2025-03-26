import { useTranslations } from 'next-intl';
import Timeline from './_components/Timeline';

export default function Experience() {
    const t = useTranslations();

    return (
        <div className='flex h-full flex-col'>
            <h1 className='text-3xl font-bold'>{t('experience.title')}</h1>
            <div className='mt-8 h-full border px-8'>
                <Timeline direction='vertical' />
                {/* <Timeline direction='horizontal' /> */}
            </div>
        </div>
    );
}
