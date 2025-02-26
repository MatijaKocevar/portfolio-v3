import { Code2, Blocks, Boxes, Database } from 'lucide-react';
import Image from 'next/image';
import Banner from '@/components/Banner';

const techStack = [
    // Frontend & Languages
    { icon: Blocks, label: 'React' },
    { icon: Code2, label: 'TypeScript' },
    { icon: Blocks, label: 'Vue' },
    { icon: Boxes, label: 'Next.js' },

    // Backend
    { icon: Code2, label: 'C#' },
    { icon: Code2, label: 'PHP' },

    // Database
    { icon: Database, label: 'PostgreSQL' },
];

export default function Bio() {
    return (
        <section className='rounded-xl bg-background/95 p-8'>
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

            <div className='flex justify-center'>
                <div className='flex w-full max-w-xl justify-between gap-6'>
                    {techStack.map((tech) => (
                        <div key={tech.label} className='flex flex-col items-center gap-2'>
                            <tech.icon className='h-10 w-10 transition-colors hover:text-foreground/80' />
                            <span className='text-sm'>{tech.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            <Banner />
        </section>
    );
}
