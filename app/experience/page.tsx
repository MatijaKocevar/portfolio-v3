import { useTranslations } from 'next-intl';
import Timeline from './_components/Timeline';

export default function ExperiencePage() {
    const t = useTranslations();

    const verticalTimeline = (
        <div className='flex h-full w-full flex-row gap-8'>
            <div className='flex h-full w-full border-l-2 border-muted-foreground lg:w-auto'>
                <div className='flex h-full w-full overflow-auto'>
                    <Timeline direction='vertical' />
                </div>
            </div>
            <div className='hidden h-full w-full items-center justify-center rounded-lg border-l bg-muted lg:flex'>
                TBD
            </div>
        </div>
    );

    const horizontalTimeline = (
        <>
            <div className='h-full border-t-2 border-muted-foreground lg:h-auto'>
                <div className='h-full w-full overflow-auto'>
                    <Timeline direction='horizontal' />
                </div>
            </div>
            <div className='mt-8 hidden h-full w-full items-center justify-center rounded-lg border-l bg-muted lg:flex'>
                TBD
            </div>
        </>
    );

    return (
        <div className='flex h-[calc(100vh-68px)] flex-col p-8 min-[1024px]:min-h-[calc(100vh-65px)] max-[1023px]:landscape:min-h-[calc(100vh-40px)]'>
            <div className='hidden lg:contents portrait:hidden landscape:contents'>{horizontalTimeline}</div>
            <div className='contents lg:hidden landscape:hidden'>{verticalTimeline}</div>
        </div>
    );
}
