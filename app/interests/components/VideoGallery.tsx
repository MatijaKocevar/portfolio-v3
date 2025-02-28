'use client';

import { useEffect, useState } from 'react';
import { useYouTubeStore } from '../stores/youtubeStore';
import { usePlayerStore } from '../stores/playerStore';
import { YouTubePlayerComponent } from './YouTubePlayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function VideoGallery() {
    const { videos, isLoading, error, fetchVideos } = useYouTubeStore();
    const { isReady, activeVideoId, initializeAPI, initializePlayer } = usePlayerStore();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

    useEffect(() => {
        fetchVideos();
    }, [fetchVideos]);

    useEffect(() => {
        if (videos.length > 0) {
            initializeAPI();
        }

        return () => {
            usePlayerStore.getState().cleanupPlayers();
        };
    }, [videos.length, initializeAPI]);

    const nextVideo = () => {
        if (isSliding || videos.length <= 1) return;
        setIsSliding(true);
        setSlideDirection('right');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % videos.length);
            setIsSliding(false);
        }, 500);
    };

    const prevVideo = () => {
        if (isSliding || videos.length <= 1) return;
        setIsSliding(true);
        setSlideDirection('left');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
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
                <h2 className='mb-6 text-2xl font-semibold'>Music Videos</h2>
                <div className='flex h-64 items-center justify-center'>
                    <p>Loading videos...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className='h-full'>
                <h2 className='mb-6 text-2xl font-semibold'>Music Videos</h2>
                <div className='flex h-64 items-center justify-center'>
                    <p className='text-red-500'>{error}</p>
                </div>
            </section>
        );
    }

    if (videos.length === 0) {
        return (
            <section className='h-full'>
                <h2 className='mb-6 text-2xl font-semibold'>Music Videos</h2>
                <div className='flex h-64 items-center justify-center'>
                    <p>No videos found</p>
                </div>
            </section>
        );
    }

    const currentVideo = videos[currentIndex];

    return (
        <section className='relative h-full px-16'>
            <h2 className='mb-6 text-2xl font-semibold'>Music Videos</h2>

            <button
                onClick={prevVideo}
                className='absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20'
                aria-label='Previous video'
                disabled={isSliding || videos.length <= 1}
            >
                <ChevronLeft className='h-8 w-8' />
            </button>

            <button
                onClick={nextVideo}
                className='absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-foreground/10 p-3 text-foreground transition-all hover:scale-110 hover:bg-foreground/20'
                aria-label='Next video'
                disabled={isSliding || videos.length <= 1}
            >
                <ChevronRight className='h-8 w-8' />
            </button>

            <div className='relative flex h-full overflow-hidden rounded-xl bg-background/95 p-8'>
                <div
                    className={`flex h-full w-full flex-col items-center justify-between transition-all duration-500 ease-in-out ${slideClass}`}
                >
                    <div className='text-center'>
                        <h3 className='mb-2 text-xl font-semibold'>{currentVideo.title}</h3>
                    </div>

                    <div className='relative my-4 h-full w-full max-w-2xl'>
                        <YouTubePlayerComponent
                            video={currentVideo}
                            index={currentIndex}
                            playerState={{ isReady, activeVideoId }}
                            initializePlayer={(videoId) => initializePlayer(videoId, `player-${videoId}`)}
                        />
                    </div>

                    <div className='w-full max-w-2xl'>
                        <p className='mb-4 text-center text-sm text-foreground/70'>{currentVideo.description}</p>
                        <div className='text-center text-sm text-foreground/50'>
                            {currentIndex + 1} of {videos.length}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
