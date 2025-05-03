'use client';

import { useTranslations } from 'next-intl';
import { ExperienceItem } from '../_stores/use-experience-store';
import IconRenderer from '@/components/icon-renderer';
import { Info } from 'lucide-react';

type TimelineItemProps = {
    experience: ExperienceItem;
    direction?: 'horizontal' | 'vertical';
    isActive?: boolean;
    isCurrent?: boolean;
};

export default function TimelineItem({ experience, direction = 'vertical', isActive = false }: TimelineItemProps) {
    const t = useTranslations('common');

    return (
        <div
            className={`group relative flex h-full flex-col gap-2 p-2 ${
                direction === 'horizontal' ? 'items-center text-center' : 'items-start justify-center'
            } ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}
        >
            <Info
                className={`absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 lg:hidden ${isActive ? 'text-foreground' : ''}`}
            />
            <h2 className={`text-xl font-bold ${isActive ? 'text-foreground' : ''}`}>{experience.name}</h2>
            {experience.current && (
                <div className='flex items-center gap-1 text-sm font-semibold'>
                    <span>
                        {`${experience.dateRange[0].getFullYear()} ${experience.dateRange[0].toLocaleString('en-US', { month: 'short' })}`}
                    </span>
                    <span>/</span>
                    <span className={`${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{t('present')}</span>
                </div>
            )}
            {!experience.current && (
                <div className='flex items-center gap-1 text-sm font-semibold'>
                    <span>
                        {`${experience.dateRange[0].getFullYear()} ${experience.dateRange[0].toLocaleString('en-US', { month: 'short' })}`}
                    </span>
                    <span>/</span>
                    <span>
                        {`${experience.dateRange[1].getFullYear()} ${experience.dateRange[1].toLocaleString('en-US', { month: 'short' })}`}
                    </span>
                </div>
            )}
            <div className='flex flex-wrap gap-2'>
                {experience.technologies.map((tech, index) => (
                    <IconRenderer key={index} name={tech.name} className={`h-4 w-4 text-foreground`} />
                ))}
            </div>
        </div>
    );
}
