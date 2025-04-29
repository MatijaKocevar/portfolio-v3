import { ShowcaseProject } from '@/types/showcase';
import { ProjectShowcase } from './ProjectShowcase';

interface ProjectShowcaseGridProps {
    projects: ShowcaseProject[];
}

export function ProjectShowcaseGrid({ projects }: ProjectShowcaseGridProps) {
    return (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project) => (
                <ProjectShowcase key={project.id} project={project} />
            ))}
        </div>
    );
}
