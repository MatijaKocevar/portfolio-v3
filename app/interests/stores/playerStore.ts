import { create } from 'zustand';
import type { YouTubePlayer } from '../components/YouTubePlayer';
import { loadYouTubeAPI } from '../components/YouTubePlayer';

interface PlayerState {
    players: Record<string, YouTubePlayer | null>;
    isReady: boolean;
    activeVideoId: string | null;
    initializeAPI: () => void;
    initializePlayer: (videoId: string, elementId: string) => void;
    cleanupPlayers: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get) => ({
    players: {},
    isReady: false,
    activeVideoId: null,

    initializeAPI: () => {
        loadYouTubeAPI(() => {
            set({ isReady: true });
        });
    },

    initializePlayer: (videoId, elementId) => {
        const { isReady, players } = get();

        if (!isReady || !window.YT) return;

        set({ activeVideoId: videoId });

        setTimeout(() => {
            const container = document.getElementById(elementId);
            if (!container) {
                console.error(`Container ${elementId} not found`);
                return;
            }

            try {
                if (players[videoId]) {
                    players[videoId]?.destroy();
                }

                new window.YT.Player(elementId, {
                    height: '360',
                    width: '640',
                    videoId: videoId,
                    playerVars: {
                        autoplay: 1,
                        controls: 1,
                        modestbranding: 1,
                        rel: 0,
                        origin: window.location.origin,
                    },
                    events: {
                        onReady: (event) => {
                            console.log(`Player ready for video ${videoId}`);
                            set((state) => ({
                                players: { ...state.players, [videoId]: event.target },
                            }));
                        },
                        onError: (event) => {
                            console.error(`Error loading video ${videoId}:`, event);
                        },
                    },
                });
            } catch (error) {
                console.error(`Error creating player for video ${videoId}:`, error);
            }
        }, 0);
    },

    cleanupPlayers: () => {
        const { players } = get();
        Object.values(players).forEach((player) => {
            player?.destroy();
        });
        delete window.onYouTubeIframeAPIReady;
        set({ players: {}, activeVideoId: null });
    },
}));
