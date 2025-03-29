'use client';

import { useExperienceStore } from '../_stores/useExperienceStore';
import IconRenderer from '@/components/IconRenderer';

interface TimelineItemContentProps {
    id?: string;
}

export default function TimelineItemContent({ id }: TimelineItemContentProps) {
    const { experiences } = useExperienceStore();
    const experience = experiences.find((exp) => exp.id === Number(id));

    if (!experience)
        return (
            <div className='flex h-full w-full items-center justify-center rounded-lg bg-muted p-4'>
                <p className='text-muted-foreground'>Please select and item from the timeline</p>
            </div>
        );

    return (
        <div className='flex flex-col gap-4 p-6'>
            <h1 className='text-2xl font-bold'>{experience.name}</h1>
            <div className='flex items-center gap-2 text-sm'>
                <span>{experience.dateRange[0].getFullYear()}</span>
                <span>-</span>
                <span>{experience.dateRange[1].getFullYear()}</span>
            </div>
            <p className='text-muted-foreground'>{experience.description}</p>
            <div className='flex flex-wrap gap-4'>
                {experience.technologies.map((tech, index) => (
                    <div key={index} className='flex flex-col items-center gap-1'>
                        <IconRenderer name={tech.name} className='h-8 w-8' />
                        <span className='text-xs text-muted-foreground'>{tech.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
