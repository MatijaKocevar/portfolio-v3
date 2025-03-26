import Bio from './_components/Bio';
import ActiveProjects from './_components/ActiveProjects';

export default function Home() {
    return (
        <div
            className={`flex min-h-full w-full flex-col items-center justify-between min-[1024px]:h-full min-[1024px]:flex-row min-[1024px]:gap-8 min-[1024px]:py-0`}
        >
            <div className='w-full'>
                <Bio />
            </div>
            <div className='w-full'>
                <ActiveProjects />
            </div>
        </div>
    );
}
