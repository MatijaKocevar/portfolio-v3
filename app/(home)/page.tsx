import Bio from './_components/Bio';
import ActiveProjects from './_components/ActiveProjects';

export default async function Home() {
    return (
        <div className='flex h-full w-full flex-col overflow-x-hidden lg:items-center lg:justify-center'>
            <div className='flex w-full flex-col lg:flex-row lg:items-start lg:justify-evenly'>
                <Bio />
                <ActiveProjects />
            </div>
        </div>
    );
}
