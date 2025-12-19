import Bio from './_components/bio';
import ActiveProjects from './_components/active-projects';

export default async function Home() {
    return (
        <div className='flex h-full flex-col gap-5 overflow-auto landscape:flex-row landscape:gap-0'>
            <Bio />
            <ActiveProjects />
        </div>
    );
}
