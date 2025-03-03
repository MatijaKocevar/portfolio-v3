import { Code2, Blocks, Database } from 'lucide-react';
import Image from 'next/image';
import Banner from '@/components/Banner';

const techStack = [
    // Frontend & Languages
    { icon: Blocks, label: 'React' },
    { icon: Blocks, label: 'Vue' },
    { icon: Blocks, label: 'Next.js' },
    { icon: Code2, label: 'TypeScript' },

    // Backend
    { icon: Code2, label: 'C#' },
    { icon: Code2, label: 'PHP' },

    // Database
    { icon: Database, label: 'PostgreSQL' },
    { icon: Database, label: 'Sql Server' },
];

export default function Bio() {
    return (
        <section className='flex min-h-[calc(100dvh-60px)] flex-col justify-around rounded-xl bg-background/95 p-4 md:min-h-0 md:p-8'>
            <div>
                <div className='mb-8 flex justify-center'>
                    <div className='relative h-48 w-48 overflow-hidden rounded-full border-4 border-foreground/10'>
                        <Image
                            src='/images/me.png'
                            alt='Profile'
                            width={192}
                            height={192}
                            className='object-cover'
                            unoptimized
                        />
                    </div>
                </div>

                <div className='mb-12 text-center'>
                    <h1 className='mb-4 text-4xl font-bold'>Software Developer</h1>
                    <p className='text-lg text-foreground/80'>
                        Passionate about creating elegant solutions to complex problems.
                    </p>
                </div>

                <Banner />
            </div>

            <div className='flex justify-center'>
                <div className='flex w-full max-w-xl flex-wrap justify-center gap-4 md:flex-nowrap md:justify-between md:gap-6'>
                    {techStack.map((tech) => (
                        <div key={tech.label} className='flex w-[20%] flex-col items-center gap-2 md:w-auto'>
                            <tech.icon className='h-8 w-8 transition-colors hover:text-foreground/80 md:h-10 md:w-10' />
                            <span className='text-xs md:text-sm'>{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
