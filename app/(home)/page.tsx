import Bio from './_components/Bio';
import ActiveProjects from './_components/ActiveProjects';

export default function Home() {
    return (
        <div
            className={`flex h-full w-full flex-col gap-4 p-4 [@container(min-width:900px)]:flex-row [@container(min-width:900px)]:items-center [@container(min-width:900px)]:justify-evenly`}
        >
            <Bio />
            <ActiveProjects />
        </div>
    );
}
