'use client';

import Image from 'next/image';
import { Button } from '../../../components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';
import { ShowcaseProject } from '@/types/showcase';
import { Github, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Skeleton } from '@/components/ui/skeleton';
import { useState } from 'react';

interface ProjectShowcaseProps {
    project: ShowcaseProject;
}

export function ProjectShowcase({ project }: ProjectShowcaseProps) {
    const t = useTranslations();
    const [imageLoading, setImageLoading] = useState(true);

    return (
        <Card className='flex h-full flex-col overflow-hidden'>
            <div className='relative h-48 w-full'>
                {imageLoading && <Skeleton className='absolute inset-0 h-full w-full' />}
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className='object-cover'
                    onLoadingComplete={() => setImageLoading(false)}
                    priority
                />
            </div>
            <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{t(project.description)}</CardDescription>
            </CardHeader>
            <CardFooter className='mt-auto flex flex-wrap items-center gap-2'>
                <div className='flex flex-wrap items-center gap-2'>
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
                    {project.badges && project.badges.length > 0 && (
                        <div className='flex flex-wrap gap-1.5'>
                            {project.badges.map((badge) => (
                                <span
                                    key={badge}
                                    className='rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary'
                                >
                                    {t(`projects.showcase.${badge}`)}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}
