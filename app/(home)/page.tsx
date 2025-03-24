'use client';

import Bio from './_components/Bio';
import Projects from './_components/Projects';
import { useDeviceType } from '@/hooks/useDeviceType';

export default function Home() {
    const { isMobile, isPortrait } = useDeviceType();
    const isMobileLandscape = isMobile && !isPortrait;

    return (
        <div className='flex h-full items-center justify-center'>
            <div className={`grid w-full gap-8 ${isMobileLandscape ? 'grid-cols-1' : 'md:grid-cols-2'}`}>
                <Bio />
                <Projects />
            </div>
        </div>
    );
}
