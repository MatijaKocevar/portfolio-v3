import { create } from 'zustand';
import { Project } from '../../../types';

export interface ActiveProjectsStore {
    currentIndex: number;
    isSliding: boolean;
    slideDirection: 'left' | 'right' | null;
    imageLoading: boolean;
    showcaseProjects: Project[];
    setImageLoading: (loading: boolean) => void;
    nextProject: () => void;
    prevProject: () => void;
}

export const useActiveProjects = create<ActiveProjectsStore>((set) => ({
    currentIndex: 0,
    isSliding: false,
    slideDirection: null,
    imageLoading: true,
    showcaseProjects: [
        {
            key: 'timeManager',
            image: '/images/time-manager/time-manager.webp',
            liveUrl: 'https://time-management-app-phi.vercel.app/demo',
            githubUrl: 'https://github.com/MatijaKocevar/time-management-app',
            wip: true,
        },
        {
            key: 'zelda',
            image: '/images/zelda-clone/zelda_clone.webp',
            liveUrl: 'https://matijakocevar.github.io/zelda-clone/',
            githubUrl: 'https://github.com/MatijaKocevar/zelda-clone',
            wip: true,
        },
        {
            key: 'spaceInvaders',
            image: '/images/space-invaders/space-invaders.webp',
            liveUrl: 'https://matijakprojects.com/space-invaders/',
            githubUrl: 'https://github.com/MatijaKocevar/space-invaders',
            wip: true,
        },
    ],
    setImageLoading: (loading) => set({ imageLoading: loading }),
    nextProject: () => {
        set((state) => {
            if (state.isSliding) return state;
            return { isSliding: true, slideDirection: 'right' };
        });

        setTimeout(() => {
            set((state) => ({
                currentIndex: (state.currentIndex + 1) % state.showcaseProjects.length,
                isSliding: false,
                slideDirection: null,
            }));
        }, 500);
    },
    prevProject: () => {
        set((state) => {
            if (state.isSliding) return state;
            return { isSliding: true, slideDirection: 'left' };
        });

        setTimeout(() => {
            set((state) => ({
                currentIndex: (state.currentIndex - 1 + state.showcaseProjects.length) % state.showcaseProjects.length,
                isSliding: false,
                slideDirection: null,
            }));
        }, 500);
    },
}));
