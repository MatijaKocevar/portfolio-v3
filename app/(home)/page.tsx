import Bio from './_components/bio';
import ActiveProjects from './_components/active-projects';

export default async function Home() {
    return (
        <div className='flex h-full w-full flex-col overflow-auto lg:flex-row'>
            <Bio />
            <ActiveProjects />
        </div>
    );
}
