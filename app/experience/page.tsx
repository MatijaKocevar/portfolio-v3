import MobileTimelineDialog from './_components/MobileTimelineDialog';
import Timeline from './_components/Timeline';
import TimelineItemContent from './_components/TimelineItemContent';

interface ExperiencePageProps {
    searchParams: { id: string | undefined };
}

export default async function ExperiencePage({ searchParams }: ExperiencePageProps) {
    const { id } = await searchParams;

    const verticalTimeline = (
        <div className='flex h-full w-full flex-row gap-8'>
            <div className='flex h-full w-full border-l-2 border-muted-foreground lg:w-auto'>
                <div className='flex h-full w-full overflow-auto'>
                    <Timeline direction='vertical' selectedId={id} />
                </div>
            </div>
            <div className='hidden h-full w-full items-center justify-center rounded-lg border-l bg-muted lg:flex'>
                {<TimelineItemContent id={id} />}
            </div>
            <div >
                <MobileTimelineDialog id={id} />
            </div>
        </div>
    );

    const horizontalTimeline = (
        <>
            <div className='h-full border-t-2 border-muted-foreground lg:h-auto'>
                <div className='h-full w-full overflow-auto'>
                    <Timeline direction='horizontal' selectedId={id} />
                </div>
            </div>
            <div className='mt-8 hidden h-full w-full items-center justify-center rounded-lg border-l bg-muted lg:flex'>
                {<TimelineItemContent id={id} />}
            </div>
            <div >
                <MobileTimelineDialog id={id} />
            </div>
        </>
    );

    return (
        <div className='flex h-[calc(100vh-68px)] flex-col p-8 min-[1024px]:min-h-[calc(100vh-65px)] max-[1023px]:landscape:min-h-[calc(100vh-40px)]'>
            <div className='hidden h-full w-full flex-col lg:flex landscape:flex'>{horizontalTimeline}</div>
            <div className='flex h-full w-full flex-col lg:hidden landscape:hidden'>{verticalTimeline}</div>
        </div>
    );
}
