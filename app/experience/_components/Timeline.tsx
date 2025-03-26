'use client';

import { useExperienceStore } from '../_stores/useExperienceStore';
import TimelineItem from './TimelineItem';

type TimelineProps = {
    direction?: 'horizontal' | 'vertical';
};

export default function Timeline({ direction = 'vertical' }: TimelineProps) {
    const { experiences } = useExperienceStore();

    return (
        <div className={`flex h-full ${direction === 'horizontal' ? 'flex-row' : 'flex-col justify-between'}`}>
            {experiences.map((experience, index) => (
                <div key={index} className={`flex ${direction === 'horizontal' ? 'flex-1' : 'w-full px-8'}`}>
                    <div
                        className={`flex ${
                            direction === 'horizontal'
                                ? `flex-1 ${index % 2 !== 0 ? 'items-end' : 'items-start'}`
                                : `w-1/2 ${index % 2 !== 0 ? 'ml-auto' : 'mr-auto'}`
                        }`}
                    >
                        <TimelineItem experience={experience} isOdd={index % 2 !== 0} direction={direction} />
                    </div>
                </div>
            ))}
        </div>
    );
}
