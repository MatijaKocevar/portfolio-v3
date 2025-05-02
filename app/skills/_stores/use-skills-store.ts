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
        react: ['Context API', 'Redux', 'Zustand', 'React Query', 'React Router', 'React Hook Form'],
        nextjs: ['App Router', 'Server Components', 'API Routes', 'Middleware', 'Authentication', 'Edge Runtime'],
        vue: ['Vue Router', 'Vuex', 'Composition API', 'Options API', 'Vue CLI'],
        angular: ['RxJS', 'NgRx', 'Angular Material', 'Angular CLI', 'Angular Universal'],
        typescript: ['Type Systems', 'Generics', 'Decorators', 'Utility Types', 'Module Systems'],
        javascript: ['ES6+', 'Async/Await', 'Web APIs', 'DOM Manipulation', 'Event Handling'],
        html5: ['Semantic HTML', 'SVG', 'Canvas', 'Web Storage', 'Web Workers'],
        cssSass: ['Flexbox', 'Grid', 'Animations', 'Media Queries', 'CSS Modules', 'Sass Mixins'],
        tailwind: ['Custom Themes', 'JIT Mode', 'Responsive Design', 'Dark Mode', 'Plugins'],
        cSharp: ['.NET Core', 'LINQ', 'Entity Framework', 'ASP.NET', 'Dependency Injection'],
        dotnet: ['Web API', 'Middleware', 'Identity', 'SignalR', 'gRPC'],
        nodejs: ['Express.js', 'NestJS', 'GraphQL', 'WebSockets', 'Stream API'],
        php: ['Laravel', 'Symfony', 'Composer', 'PDO', 'REST APIs'],
        python: ['Django', 'Flask', 'FastAPI', 'SQLAlchemy', 'Data Analysis'],
        postgres: ['SQL', 'Indexing', 'Triggers', 'Stored Procedures', 'Replication'],
        mssql: ['T-SQL', 'Stored Procedures', 'Views', 'Performance Tuning', 'Integration Services'],
        docker: ['Compose', 'Swarm', 'Kubernetes', 'Multi-stage Builds', 'Volume Management'],
        git: ['Branching', 'Merging', 'Rebasing', 'Actions', 'Hooks'],
        photoshop: ['Image Editing', 'Digital Art', 'UI Design', 'Photo Manipulation', 'Asset Creation'],
        illustrator: ['Vector Art', 'Logo Design', 'Icon Design', 'Typography', 'Illustrations'],
        figma: ['UI/UX Design', 'Prototyping', 'Components', 'Auto Layout', 'Design Systems'],
        inkscape: ['Vector Graphics', 'SVG Editing', 'Icon Design', 'Logo Design', 'Print Design'],
    },
    skillCategories: {
        webDevelopment: {
            frontend: ['react', 'nextjs', 'vue', 'angular', 'typescript', 'javascript', 'html5', 'cssSass', 'tailwind'],
            backend: ['cSharp', 'dotnet', 'nodejs', 'php', 'python'],
            database: ['postgres', 'mssql'],
            tools: ['docker', 'git'],
        },
        design: ['photoshop', 'illustrator', 'figma', 'inkscape'],
    },
}));
