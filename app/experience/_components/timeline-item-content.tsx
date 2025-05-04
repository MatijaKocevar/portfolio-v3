'use client';

import { useExperienceStore } from '../_stores/use-experience-store';
import IconRenderer from '@/components/icon-renderer';
import { useTranslations } from 'next-intl';

interface TimelineItemContentProps {
    id?: string;
}

export default function TimelineItemContent({ id }: TimelineItemContentProps) {
    const t = useTranslations();
    const { experiences } = useExperienceStore();
    let experience = experiences.find((exp) => exp.id === Number(id));

    if (!experience) {
        experience = experiences[0];
    }

    return (
        <div className='flex h-full w-full flex-col gap-5 p-5 lg:p-10'>
            <div className='flex shrink-0 flex-col items-center justify-center gap-2'>
                <h1 className='hidden text-2xl font-bold lg:block'>{experience.name}</h1>
                <div className='hidden items-center gap-2 text-sm lg:flex'>
                    <span>{experience.dateRange[0].getFullYear()}</span>
                    <span>-</span>
                    <span>{experience.dateRange[1].getFullYear()}</span>
                </div>
            </div>
            <div className='relative min-h-0 flex-1'>
                <div className='absolute inset-0 overflow-y-auto'>
                    <p className='whitespace-pre-line px-5 text-center text-muted-foreground lg:px-10'>
                        {t(experience.description)}
                    </p>
                </div>
            </div>
            <div className='hidden shrink-0 flex-wrap justify-center gap-5 lg:flex lg:gap-10'>
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
