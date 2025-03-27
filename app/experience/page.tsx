import { useTranslations } from 'next-intl';
import Timeline from './_components/Timeline';

export default function Experience() {
    const t = useTranslations();

    const verticalTimeline = (
        <div className='flex h-full w-full flex-row gap-8'>
            <div className='flex h-full border-l-2 border-muted-foreground'>
                <div className='h-full overflow-auto'>
                    <Timeline direction='vertical' />
                </div>
            </div>
            <div className='flex h-full w-full items-center justify-center rounded-lg border-l bg-muted'>TBD</div>
        </div>
    );

    const horizontalTimeline = (
        <>
            <div className='border-t-2 border-muted-foreground'>
                <div className='w-full overflow-auto'>
                    <Timeline direction='horizontal' />
                </div>
            </div>
            <div className='mt-8 flex h-full w-full items-center justify-center rounded-lg border-l bg-muted'>TBD</div>
        </>
    );

    return (
        <div className='flex h-[calc(100vh-68px)] flex-col p-8 min-[1024px]:min-h-[calc(100vh-65px)] max-[1023px]:landscape:min-h-[calc(100vh-40px)]'>
            {/* {verticalTimeline} */}
            {horizontalTimeline}
        </div>
    );
}
