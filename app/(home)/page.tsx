import Bio from './_components/Bio';
import Projects from './_components/Projects';

export default function Home() {
    return (
        <div
            className={`flex min-h-full w-full flex-col items-center gap-8 min-[1024px]:h-full min-[1024px]:flex-row min-[1024px]:py-0`}
        >
            <Bio />
            <Projects />
        </div>
    );
}
