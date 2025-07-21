import Bio from './_components/bio';
import ActiveProjects from './_components/active-projects';
import { Separator } from '@/components/ui/separator';

export default async function Home() {
    return (
        <div className='flex w-full flex-col overflow-x-hidden'>
            <Bio />
            <Separator className='mx-auto w-[95%]' />
            <ActiveProjects />
        </div>
    );
}
