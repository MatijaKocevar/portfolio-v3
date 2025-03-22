import { create } from 'zustand';
import { API_KEY, CHANNEL_ID } from '../_components/YouTubePlayer';
import type { Video, YouTubePlaylistResponse } from '../_components/YouTubePlayer';

interface YouTubeVideoDetails {
    id: string;
    contentDetails: {
        duration: string;
    };
}

interface YouTubeState {
    videos: Video[];
    shorts: Video[];
    isLoading: boolean;
    error: string | null;
    fetchVideos: () => Promise<void>;
}

export const useYouTubeStore = create<YouTubeState>((set) => ({
    videos: [],
    shorts: [],
    isLoading: false,
    error: null,
    fetchVideos: async () => {
        try {
            set({ isLoading: true, error: null });
            const uploadsPlaylistId = `UU${CHANNEL_ID.substring(2)}`;

            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${uploadsPlaylistId}&key=${API_KEY}`,
            );

            if (!response.ok) {
                throw new Error(`Failed to fetch videos: ${response.status}`);
            }

            const data = (await response.json()) as YouTubePlaylistResponse;

            const videoIds = data.items.map((item) => item.snippet.resourceId.videoId).join(',');
            const videoDetailsResponse = await fetch(
                `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoIds}&key=${API_KEY}`,
            );

            if (!videoDetailsResponse.ok) {
                throw new Error(`Failed to fetch video details: ${videoDetailsResponse.status}`);
            }

            const videoDetails = await videoDetailsResponse.json();

            const allVideos = data.items.map((item) => {
                const details = videoDetails.items.find(
                    (v: YouTubeVideoDetails) => v.id === item.snippet.resourceId.videoId,
                );
                const duration = details?.contentDetails?.duration || '';

                return {
                    id: item.snippet.resourceId.videoId,
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
                    publishedAt: item.snippet.publishedAt,
                    duration: duration,
                    isShort: isYouTubeShort(item.snippet.title, item.snippet.description, duration),
                };
            });

            const regularVideos = allVideos
                .filter((video) => {
                    const lowerTitle = video.title.toLowerCase();
                    const lowerDescription = video.description.toLowerCase();

                    if (video.isShort) return false;

                    if (
                        lowerTitle.includes('live') ||
                        lowerTitle.includes('stream') ||
                        lowerDescription.includes('live stream')
                    ) {
                        return false;
                    }

                    return true;
                })

                .sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());

            const shortsVideos = allVideos
                .filter((video) => video.isShort)
                .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

            set({
                videos: regularVideos,
                shorts: shortsVideos,
                isLoading: false,
            });
        } catch (error) {
            console.error('Error fetching videos:', error);
            set({
                error: error instanceof Error ? error.message : 'An unknown error occurred',
                isLoading: false,
            });
        }
    },
}));

function isYouTubeShort(title: string, description: string, duration: string): boolean {
    const lowerTitle = title.toLowerCase();
    const lowerDescription = description.toLowerCase();

    if (lowerTitle.includes('live') || lowerTitle.includes('stream') || lowerDescription.includes('live stream')) {
        return false;
    }

    if (lowerTitle.includes('#short') || lowerDescription.includes('#short')) {
        return true;
    }

    if (duration) {
        const minutes = duration.match(/(\d+)M/);
        const minutesValue = minutes ? parseInt(minutes[1]) : 0;

        if (minutesValue < 1) {
            return true;
        }
    }

    return false;
}
