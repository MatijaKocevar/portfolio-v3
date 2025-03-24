'use client';

import Image from 'next/image';

export interface Video {
    id: string;
    title: string;
    description: string;
    thumbnail: string | undefined;
    publishedAt: string;
}

export interface YouTubePlayer {
    playVideo(): void;
    pauseVideo(): void;
    loadVideoById(videoId: string): void;
    destroy(): void;
}

export interface YouTubeEvent {
    target: YouTubePlayer;
    data: number;
}

export interface YouTubeThumbnail {
    url: string;
    width: number;
    height: number;
}

export interface YouTubeThumbnails {
    default?: YouTubeThumbnail;
    medium?: YouTubeThumbnail;
    high?: YouTubeThumbnail;
    standard?: YouTubeThumbnail;
    maxres?: YouTubeThumbnail;
}

export interface YouTubeResourceId {
    kind: string;
    videoId: string;
}

export interface YouTubeSnippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: YouTubeThumbnails;
    channelTitle: string;
    playlistId: string;
    position: number;
    resourceId: YouTubeResourceId;
}

export interface YouTubePlaylistItem {
    kind: string;
    etag: string;
    id: string;
    snippet: YouTubeSnippet;
}

export interface YouTubePlaylistResponse {
    kind: string;
    etag: string;
    items: YouTubePlaylistItem[];
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
}

declare global {
    interface Window {
        YT: {
            Player: new (
                elementId: string,
                config: {
                    height?: string | number;
                    width?: string | number;
                    videoId: string;
                    playerVars?: {
                        autoplay?: 0 | 1;
                        controls?: 0 | 1;
                        modestbranding?: 0 | 1;
                        rel?: 0 | 1;
                        origin?: string;
                    };
                    events?: {
                        onReady?: (event: YouTubeEvent) => void;
                        onStateChange?: (event: YouTubeEvent) => void;
                        onError?: (event: YouTubeEvent) => void;
                    };
                },
            ) => YouTubePlayer;
        };
        onYouTubeIframeAPIReady?: () => void;
    }
}

export const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || '';
export const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID || '';

export const loadYouTubeAPI = (callback: () => void) => {
    if (window.YT) {
        callback();
        return;
    }

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
        callback();
    };
};

interface YouTubePlayerProps {
    video: Video;
    index: number;
    playerState: {
        isReady: boolean;
        activeVideoId: string | null;
    };
    initializePlayer: (videoId: string) => void;
}

export function YouTubePlayerComponent({ video, index, playerState, initializePlayer }: YouTubePlayerProps) {
    return (
        <div className='w-full'>
            <div className='relative aspect-video w-full'>
                {playerState.activeVideoId === video.id ? (
                    <div id={`player-${video.id}`} className='absolute inset-0' />
                ) : (
                    <div
                        className='absolute inset-0 cursor-pointer'
                        onClick={() => initializePlayer(video.id)}
                        data-video-id={video.id}
                    >
                        {video.thumbnail && (
                            <div className='relative h-full w-full'>
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    priority={index === 0}
                                    className='object-cover'
                                />
                                <div className='absolute inset-0 flex items-center justify-center'>
                                    <div className='flex h-16 w-16 items-center justify-center rounded-full bg-red-600'>
                                        <svg
                                            xmlns='http://www.w3.org/2000/svg'
                                            className='h-8 w-8 text-white'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                        >
                                            <path
                                                fillRule='evenodd'
                                                d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                                                clipRule='evenodd'
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
