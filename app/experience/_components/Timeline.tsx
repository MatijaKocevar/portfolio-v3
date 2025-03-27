'use client';

import { useExperienceStore } from '../_stores/useExperienceStore';
import TimelineItem from './TimelineItem';
import { BriefcaseIcon } from 'lucide-react';

type TimelineProps = {
    direction?: 'horizontal' | 'vertical';
};

export default function Timeline({ direction = 'vertical' }: TimelineProps) {
    const { experiences } = useExperienceStore();

    const getContainerClasses = () =>
        `relative flex ${direction === 'horizontal' ? 'flex-col' : 'flex-row'} h-full min-h-0 w-full`;

    const getItemsContainerClasses = () =>
        `relative flex ${direction === 'horizontal' ? 'flex-row min-w-fit' : 'flex-col gap-4'} flex-1`;

    const getItemWrapperClasses = () =>
        `relative flex group cursor-pointer transition-colors hover:bg-muted/50 rounded-md ${
            direction === 'horizontal' ? 'flex-1 flex-col min-w-[200px]' : 'flex-row w-full'
        }`;

    const getConnectorContainerClasses = () =>
        `relative flex ${direction === 'horizontal' ? 'h-24 flex-col' : 'w-24 flex-row'} items-center sticky`;

    const getConnectorLineClasses = () =>
        `absolute bg-muted-foreground ${
            direction === 'horizontal'
                ? 'bottom-16 h-8 w-[2px] left-[calc(50%-1px)]'
                : 'right-16 h-[2px] w-[calc(100%-64px)]'
        }`;

    const getConnectorCircleClasses = () =>
        `absolute bg-muted-foreground rounded-full h-4 w-4 ${
            direction === 'horizontal' ? '-top-[8px] left-[calc(50%-8px)]' : 'top-[calc(50%-8px)] -left-[8px]'
        }`;

    const getCircleClasses = () =>
        `absolute z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 bg-primary
        ${direction === 'horizontal' ? 'bottom-0 left-1/2 -translate-x-1/2' : 'right-0 top-1/2 -translate-y-1/2'}`;

    return (
        <div className={getContainerClasses()}>
            <div className={getItemsContainerClasses()}>
                {experiences.map((experience, index) => (
                    <div key={index} className={getItemWrapperClasses()}>
                        <div className={getConnectorContainerClasses()}>
                            <div className={getConnectorLineClasses()} />
                            <div className={getConnectorCircleClasses()} />
                            <div className={getCircleClasses()}>
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
