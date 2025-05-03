'use client';

import Image from 'next/image';
import { Button } from '../../../components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../../components/ui/dialog';
import { ShowcaseProject } from '@/types/showcase';
import { Github, ExternalLink, Info } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ProjectShowcaseProps {
    project: ShowcaseProject;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
    const t = useTranslations();

    return (
        <Card className='flex h-full flex-col overflow-hidden'>
            <div className='relative h-48 w-full'>
                <Image src={project.imageUrl} alt={project.title} fill className='object-cover' />
            </div>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{t(project.description)}</CardDescription>
            </CardHeader>
            <CardFooter className='mt-auto flex flex-wrap items-center gap-2'>
                <div className='flex flex-wrap gap-2'>
                    <Button variant='outline' size='sm' asChild>
                        <a href={project.githubUrl} target='_blank' rel='noopener noreferrer'>
                            <Github className='mr-2 h-4 w-4' />
                            {t('projects.showcase.github')}
                        </a>
                    </Button>
                    {project.liveUrl && (
                        <Button variant='outline' size='sm' asChild>
                            <a href={project.liveUrl} target='_blank' rel='noopener noreferrer'>
                                <ExternalLink className='mr-2 h-4 w-4' />
                                {t('projects.showcase.liveDemo')}
                            </a>
                        </Button>
                    )}
                </div>
                <div className='ml-auto'>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant='outline' size='sm'>
                                <Info className='h-4 w-4' />
                            </Button>
                        </DialogTrigger>
                        <DialogTitle></DialogTitle>
                        <DialogContent>Description component in progress</DialogContent>
                    </Dialog>
                </div>
            </CardFooter>
        </Card>
    );
}
