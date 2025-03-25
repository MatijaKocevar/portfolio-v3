import Bio from './_components/Bio';
import Projects from './_components/Projects';

export default function Home() {
    return (
        <div
            className={`flex min-h-full w-full flex-col items-center justify-between min-[1024px]:h-full min-[1024px]:flex-row min-[1024px]:py-0`}
        >
            <Bio />
            <Projects />
        </div>
    );
}
