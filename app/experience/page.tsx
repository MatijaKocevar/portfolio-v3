import { useTranslations } from 'next-intl';
import Timeline from './_components/Timeline';

export default function Experience() {
    const t = useTranslations();

    return (
        <div className='flex h-full flex-col'>
            <div className='h-full border p-8'>
                {/* <Timeline direction='vertical' /> */}
                <Timeline direction='horizontal' />
            </div>
        </div>
    );
}
