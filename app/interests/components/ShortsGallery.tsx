'use client';

import { useEffect, useState } from 'react';
import { useYouTubeStore } from '../stores/youtubeStore';
import { usePlayerStore } from '../stores/playerStore';
import { YouTubePlayerComponent } from './YouTubePlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ShortsGallery() {
    const { shorts, isLoading, error } = useYouTubeStore();
    const { isReady, activeVideoId, initializeAPI, initializePlayer } = usePlayerStore();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

    useEffect(() => {
        if (shorts.length > 0) {
            initializeAPI();
        }
    }, [shorts.length, initializeAPI]);

    const nextShort = () => {
        if (isSliding || shorts.length <= 1) return;
        setIsSliding(true);
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % shorts.length);
            setIsSliding(false);
        }, 500);
    };

    const prevShort = () => {
        if (isSliding || shorts.length <= 1) return;
        setIsSliding(true);
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + shorts.length) % shorts.length);
            setIsSliding(false);
        }, 500);
    };

    const slideClass = isSliding
        ? slideDirection === 'right'
            ? 'opacity-0 translate-x-[50px]'
            : 'opacity-0 -translate-x-[50px]'
        : 'opacity-100 translate-x-0';

    if (isLoading) {
        return (
            <section className='h-full'>
                <h2 className='mb-6 text-2xl font-semibold'>Shorts</h2>
                <div className='flex h-64 items-center justify-center'>
                    <p>Loading shorts...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className='h-full'>
                <h2 className='mb-6 text-2xl font-semibold'>Shorts</h2>
                <div className='flex h-64 items-center justify-center'>
                    <p className='text-red-500'>{error}</p>
                </div>
            </section>
        );
    }

    if (shorts.length === 0) {
        return (
            <section className='h-full'>
                <h2 className='mb-6 text-2xl font-semibold'>Shorts</h2>
                <div className='flex h-64 items-center justify-center'>
                    <p>No shorts found</p>
                </div>
            </section>
        );
    }

    const currentShort = shorts[currentIndex];

    return (
        <section className='relative h-full px-16'>
            <h2 className='mb-6 text-2xl font-semibold'>Shorts</h2>

            <button
                onClick={prevShort}
                className='absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20'
                aria-label='Previous short'
                disabled={isSliding || shorts.length <= 1}
            >
                <ChevronLeft className='h-8 w-8' />
            </button>

            <button
                onClick={nextShort}
                className='absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20'
                aria-label='Next short'
                disabled={isSliding || shorts.length <= 1}
            >
                <ChevronRight className='h-8 w-8' />
            </button>

            <div className='relative flex h-full overflow-hidden rounded-xl bg-background/95 p-8'>
                <div
                    className={`flex h-full w-full flex-col items-center justify-between transition-all duration-500 ease-in-out ${slideClass}`}
                >
                    <div className='w-full text-center'>
                        <h3 className='mb-2 overflow-hidden text-ellipsis whitespace-nowrap text-xl font-semibold'>
                            {currentShort.title}
                        </h3>
                    </div>

                    <div className='relative my-4 h-full w-full'>
                        <YouTubePlayerComponent
                            video={currentShort}
                            index={currentIndex}
                            playerState={{ isReady, activeVideoId }}
                            initializePlayer={(videoId) => initializePlayer(videoId, `player-${videoId}`)}
                        />
                    </div>

                    <div className='w-full'>
                        <div className='text-center text-sm text-foreground/50'>
                            {currentIndex + 1} of {shorts.length}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
