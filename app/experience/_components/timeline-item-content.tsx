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
        <div className='flex h-full w-full flex-col items-start justify-between gap-5 lg:p-10'>
            <div className='flex w-full items-start justify-between gap-5 lg:gap-10'>
                <div className='flex flex-col items-start justify-start gap-2'>
                    <h1 className='hidden text-2xl font-bold lg:block'>{experience.name}</h1>
                    <div className='hidden items-start gap-2 text-sm lg:flex'>
                        <span>{experience.dateRange[0].getFullYear()}</span>
                        <span>-</span>
                        <span>{experience.dateRange[1].getFullYear()}</span>
                    </div>
                </div>
                <div className='hidden flex-wrap gap-5 lg:flex lg:gap-10'>
                    {experience.technologies.map((tech, index) => (
                        <div key={index} className='flex flex-col items-center gap-1'>
                            <IconRenderer name={tech.name} className='h-8 w-8' />
                            <span className='text-xs text-muted-foreground'>{tech.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex h-full w-full items-center justify-start'>
                <div className='whitespace-pre-line text-left text-muted-foreground'>{t(experience.description)}</div>
            </div>
        </div>
    );
}
