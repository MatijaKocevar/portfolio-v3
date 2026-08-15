import { create } from 'zustand';

interface TechStack {
    name: string;
    title: string;
}

export interface BioDataStore {
    techStack: TechStack[];
}

export const useBioData = create<BioDataStore>(() => ({
    techStack: [
        // Frontend & Languages
        { name: 'react', title: 'React' },
        { name: 'vue', title: 'Vue.js' },
        { name: 'nextjs', title: 'Next.js' },
        { name: 'typescript', title: 'TypeScript' },

        // Backend & Database
        { name: 'cSharp', title: 'C#' },
        { name: 'postgres', title: 'PostgreSQL' },

        // AI
        { name: 'opencode', title: 'OpenCode' },
        { name: 'agents', title: 'AI Agents' },
    ],
}));
