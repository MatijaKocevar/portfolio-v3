import Bio from './_components/bio';
import ActiveProjects from './_components/active-projects';

export default async function Home() {
    return (
        <div className='flex w-full flex-col overflow-x-hidden'>
            <Bio />
            <ActiveProjects />
        </div>
    );
}
