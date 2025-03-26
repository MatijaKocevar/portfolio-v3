'use client';

import { useExperienceStore } from '../_stores/useExperienceStore';
import TimelineItem from './TimelineItem';

type TimelineProps = {
    direction?: 'horizontal' | 'vertical';
};

export default function Timeline({ direction = 'vertical' }: TimelineProps) {
    const { experiences } = useExperienceStore();

    return (
        <div
            className={`flex justify-between p-2 ${direction === 'horizontal' ? 'w-full flex-row' : 'h-full flex-col'}`}
        >
            {experiences.map((experience, index) => (
                <TimelineItem key={index} experience={experience} />
            ))}
        </div>
    );
}
