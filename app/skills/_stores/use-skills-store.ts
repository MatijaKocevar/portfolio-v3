import { create } from 'zustand';

export interface SkillDetail {
    name: string;
    capabilities: string[];
}

interface SkillsStore {
    selectedSkill: string | null;
    setSelectedSkill: (skill: string | null) => void;
    skillDetails: Record<string, string[]>;
    skillCategories: {
        webDevelopment: {
            frontend: string[];
            backend: string[];
            database: string[];
            tools: string[];
        };
        design: string[];
    };
}

export const useSkillsStore = create<SkillsStore>((set) => ({
    selectedSkill: null,
    setSelectedSkill: (skill) => set({ selectedSkill: skill }),
    skillDetails: {
        react: ['Mobx', 'Zustand', 'Tanstack Query', 'Tanstack/React Router', 'React Hooks', 'Responsive Design'],
        nextjs: [
            'App Router',
            'Server Components',
            'API Routes',
            'Middleware',
            'Authentication',
            'Edge Runtime',
            'Static Generation',
        ],
        vue: ['Tanstack/Vue Router', 'Vuex/Pinia', 'Composition API', 'Options API', 'Vue CLI', 'SF Components'],
        angular: ['RxJS', 'NgRx', 'Angular Material', 'Angular CLI', 'Angular Universal'],
        typescript: ['Type Systems', 'Generics', 'Decorators', 'Utility Types', 'Module Systems'],
        javascript: ['ES6+', 'Async/Await', 'Web APIs', 'DOM Manipulation', 'Event Handling'],
        html5: ['Semantic HTML', 'SVG', 'Canvas', 'Web Storage', 'Web Workers'],
        cssSass: ['Flexbox', 'Grid', 'Animations', 'Media Queries', 'CSS Modules', 'Sass Mixins', 'Bootstrap'],
        tailwind: ['Custom Themes', 'Responsive Design', 'Dark Mode', 'Plugins'],
        cSharp: ['.NET/.NET Core', 'LINQ', 'Entity Framework', 'ASP.NET', 'Dependency Injection'],
        nodejs: ['Express.js', 'WebSockets'],
        php: ['Laravel', 'Symfony', 'REST APIs'],
        postgres: ['SQL', 'Timescale'],
        mssql: ['T-SQL', 'Stored Procedures', 'Views', 'Triggers'],
        docker: ['Compose', 'Multi-stage Builds'],
        git: ['Branching', 'Merging', 'Actions', 'Hooks'],
        photoshop: ['Image Editing', 'Digital Art', 'UI Design', 'Photo Manipulation', 'Asset Creation'],
        illustrator: ['Vector Art', 'Logo Design', 'Icon Design', 'Typography', 'Illustrations'],
        figma: ['UI/UX Design', 'Prototyping', 'Design Systems'],
        inkscape: ['Vector Graphics', 'SVG Editing', 'Icon Design', 'Logo Design', 'Print Design'],
    },
    skillCategories: {
        webDevelopment: {
            frontend: ['react', 'nextjs', 'vue', 'angular', 'typescript', 'javascript', 'html5', 'cssSass', 'tailwind'],
            backend: ['cSharp', 'nodejs', 'php'],
            database: ['postgres', 'mssql'],
            tools: ['docker', 'git'],
        },
        design: ['photoshop', 'illustrator', 'figma', 'inkscape'],
    },
}));
