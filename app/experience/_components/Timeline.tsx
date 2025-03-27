'use client';

import { useExperienceStore } from '../_stores/useExperienceStore';
import TimelineItem from './TimelineItem';
import { BriefcaseIcon } from 'lucide-react';

type TimelineProps = {
    direction?: 'horizontal' | 'vertical';
};

export default function Timeline({ direction = 'vertical' }: TimelineProps) {
    const { experiences } = useExperienceStore();

    return (
        <div className={`relative flex ${direction === 'horizontal' ? 'flex-col' : 'flex-row'} h-full`}>
            <div
                className={`${direction === 'horizontal' ? 'top-8 h-[2px] w-full' : 'left-8 h-full w-[2px]'} absolute bg-muted-foreground`}
            />

            <div className={`flex ${direction === 'horizontal' ? 'mt-8 flex-row' : 'ml-8 flex-col'} flex-1`}>
                {experiences.map((experience, index) => (
                    <div
                        key={index}
                        className={`relative flex ${direction === 'horizontal' ? 'flex-1 flex-col' : 'h-full flex-row'}`}
                    >
                        <div
                            className={`relative flex ${direction === 'horizontal' ? 'h-24 flex-col items-center' : 'w-24 flex-row items-center'}`}
                        >
                            <div
                                className={`absolute bg-muted-foreground ${direction === 'horizontal' ? 'bottom-16 h-8 w-[2px]' : 'right-16 h-[2px] w-[calc(100%-64px)]'}`}
                            />
                            <div
                                className={`absolute ${
                                    direction === 'horizontal'
                                        ? 'bottom-0 left-1/2 -translate-x-1/2'
                                        : 'right-0 top-1/2 -translate-y-1/2'
                                } z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 bg-primary`}
                            >
                                <BriefcaseIcon className='h-8 w-8 text-foreground' />
                            </div>
                        </div>
                        <div className={`flex-1 ${direction === 'horizontal' ? 'pt-4' : 'pl-4'}`}>
                            <TimelineItem experience={experience} direction={direction} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
