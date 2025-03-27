import { useTranslations } from 'next-intl';
import Timeline from './_components/Timeline';

export default function Experience() {
    const t = useTranslations();

    return (
        <div className='flex h-[calc(100vh-68px)] flex-col p-8 min-[1024px]:min-h-[calc(100vh-65px)] max-[1023px]:landscape:min-h-[calc(100vh-40px)]'>
            <div className='h-full border-t-2 border-muted-foreground'>
                <div className='h-1/2 w-full overflow-auto'>
                    <Timeline direction='horizontal' />
                </div>
                <div className='h-1/2 w-full border-l bg-muted' />
            </div>
            {/* <div className='flex h-full flex-row border-l-2 border-muted-foreground'>
                <div className='h-full w-1/2 overflow-auto'>
                    <Timeline direction='vertical' />
                </div>
                <div className='h-full w-1/2 border-l bg-muted' />
            </div> */}
        </div>
    );
}
