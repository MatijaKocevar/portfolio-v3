'use client';

import { CodeIcon } from 'lucide-react';
import { ExperienceItem } from '../_stores/useExperienceStore';

type TimelineItemProps = {
    experience: ExperienceItem;
    direction?: 'horizontal' | 'vertical';
};

export default function TimelineItem({ experience, direction = 'vertical' }: TimelineItemProps) {
    return (
        <div
            className={`flex h-full flex-col gap-2 p-2 ${direction === 'horizontal' ? 'items-center text-center' : 'items-start justify-center'}`}
        >
            <h2 className='text-xl font-bold'>{experience.name}</h2>
            <div className='flex items-center gap-1 text-sm font-semibold'>
                <span>{experience.dateRange[0].getFullYear()}</span>
                <span>/</span>
                <span>{experience.dateRange[1].getFullYear()}</span>
            </div>
            <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, index) => (
                    <CodeIcon key={index} className='h-4 w-4' />
                ))}
            </div>
        </div>
    );
}
