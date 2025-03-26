'use client';

import { ExperienceItem } from '../_stores/useExperienceStore';

type TimelineItemProps = {
    experience: ExperienceItem;
};

export default function TimelineItem({ experience }: TimelineItemProps) {
    return (
        <div className='flex flex-1 flex-col text-center'>
            <h2 className='text-xl font-bold'>{experience.name}</h2>
            <p className='text-sm'>{experience.description}</p>
            <div className='flex flex-col justify-center'>
                <div className='flex flex-row items-center justify-center gap-2'>
                    <p className='text-sm'>{experience.dateRange[0].getFullYear()}</p>-
                    <p className='text-sm'>{experience.dateRange[1].getFullYear()}</p>
                </div>
                <div className='flex flex-col'>
                    {experience.technologies.map((tech, index) => (
                        <p key={index} className='text-sm'>
                            {tech.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
}
