'use client';

import { ExperienceItem } from '../_stores/useExperienceStore';
import IconRenderer from '@/components/IconRenderer';

type TimelineItemProps = {
    experience: ExperienceItem;
    direction?: 'horizontal' | 'vertical';
    isActive?: boolean;
};

export default function TimelineItem({ experience, direction = 'vertical', isActive = false }: TimelineItemProps) {
    return (
        <div
            className={`flex h-full flex-col gap-2 p-2 transition-colors ${
                direction === 'horizontal' ? 'items-center text-center' : 'items-start justify-center'
            } ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}
        >
            <h2 className={`text-xl font-bold ${isActive ? 'text-foreground' : ''}`}>{experience.name}</h2>
            <div className='flex items-center gap-1 text-sm font-semibold'>
                <span>
                    {`${experience.dateRange[0].getFullYear()} ${experience.dateRange[0].toLocaleString('en-US', { month: 'short' })}`}
                </span>
                <span>/</span>
                <span>
                    {`${experience.dateRange[1].getFullYear()} ${experience.dateRange[1].toLocaleString('en-US', { month: 'short' })}`}
                </span>
            </div>
            <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, index) => (
                    <IconRenderer
                        key={index}
                        name={tech.name}
                        className={`h-4 w-4 ${isActive ? 'text-foreground' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}
