import Image from 'next/image';
import { Button } from '../ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ShowcaseProject } from '@/types/showcase';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectShowcaseProps {
    project: ShowcaseProject;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
    return (
        <Card className='overflow-hidden'>
            <div className='relative h-48 w-full'>
                <Image src={project.imageUrl} alt={project.title} fill className='object-cover' />
            </div>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardFooter className='flex gap-2'>
                <Button variant='outline' size='sm' asChild>
                    <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                        <Github className='mr-2 h-4 w-4' />
                        GitHub
                    </a>
                </Button>
                {project.liveUrl && (
                    <Button variant='outline' size='sm' asChild>
                        <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                            <ExternalLink className='mr-2 h-4 w-4' />
                            Live Demo
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
