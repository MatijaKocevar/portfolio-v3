import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { create } from 'zustand';
import { Code2, Blocks, Database, LucideProps } from 'lucide-react';

interface TechStack {
    icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
    label: string;
}

export interface BioDataStore {
    techStack: TechStack[];
}

export const useBioData = create<BioDataStore>(() => ({
    techStack: [
        // Frontend & Languages
        { icon: Blocks, label: 'react' },
        { icon: Blocks, label: 'vue' },
        { icon: Blocks, label: 'nextjs' },
        { icon: Code2, label: 'typescript' },

        // Backend
        { icon: Code2, label: 'csharp' },
        { icon: Code2, label: 'php' },

        // Database
        { icon: Database, label: 'postgresql' },
        { icon: Database, label: 'sqlserver' },
    ],
}));
