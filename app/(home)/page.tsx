import Bio from './components/Bio';
import Projects from './components/Projects';

export default function Home() {
    return (
        <div className='container mx-auto flex h-full items-center justify-center px-4'>
            <div className='grid min-h-[calc(100dvh-60px)] w-full gap-8 md:min-h-0 md:grid-cols-2'>
                <Bio />
                <Projects />
            </div>
        </div>
    );
}
