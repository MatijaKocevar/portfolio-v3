import MobileTimelineDialog from './_components/MobileTimelineDialog';
import Timeline from './_components/Timeline';
import TimelineItemContent from './_components/TimelineItemContent';

interface ExperiencePageProps {
    searchParams: Promise<{ id: string | undefined }>;
}

export default async function ExperiencePage({ searchParams }: ExperiencePageProps) {
    const { id } = await searchParams;

    const verticalTimeline = (
        <div className='flex h-full w-full flex-row'>
            <div className='flex h-full w-full border-l-2 border-muted-foreground lg:w-auto'>
                <div className='flex h-full w-full overflow-auto'>
                    <Timeline direction='vertical' selectedId={id} />
                </div>
            </div>
            <div className='hidden h-full w-full items-center justify-center rounded-lg border-l bg-muted lg:flex'>
                {<TimelineItemContent id={id} />}
            </div>
            <div>
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
            <div className='mt-10 hidden h-full w-full items-center justify-center rounded-lg border-l bg-muted lg:flex'>
                {<TimelineItemContent id={id} />}
            </div>
            <div>
                <MobileTimelineDialog id={id} />
            </div>
        </>
    );

    return (
        <div className='flex h-full w-full flex-col overflow-x-hidden lg:items-center lg:justify-center'>
            <div className='flex h-full w-full flex-col p-5 lg:flex-row lg:items-start lg:justify-evenly lg:p-10'>
                <div className='hidden h-full w-full flex-col lg:flex landscape:flex'>{horizontalTimeline}</div>
                <div className='flex h-full w-full flex-col lg:hidden landscape:hidden'>{verticalTimeline}</div>
            </div>
        </div>
    );
}
