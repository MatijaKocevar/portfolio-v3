'use client';

import { useExperienceStore } from '../_stores/use-experience-store';
import TimelineItem from './timeline-item';
import { BriefcaseIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

type TimelineProps = {
    direction?: 'horizontal' | 'vertical';
    selectedId?: string;
};

export default function Timeline({ direction = 'vertical', selectedId }: TimelineProps) {
    const { experiences } = useExperienceStore();
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleExperienceClick = (experienceId: number) => {
        const params = new URLSearchParams(searchParams);

        params.set('id', experienceId.toString());
        router.push(`/experience?${params.toString()}`);
    };

    const getContainerClasses = () =>
        ` relative flex ${direction === 'horizontal' ? 'flex-col' : ' flex-row items-center'} h-full min-h-0 w-full`;

    const getItemsContainerClasses = () =>
        `relative flex ${direction === 'horizontal' ? 'flex-row min-w-fit' : 'h-full justify-between flex-col gap-5'} flex-1`;

    const getItemWrapperClasses = (isActive: boolean, isCurrent?: boolean) =>
        `relative flex group cursor-pointer transition-colors hover:bg-muted/50 rounded-md ${
            direction === 'horizontal' ? 'flex-1 flex-col min-w-[200px]' : 'flex-row w-full'
        } ${isActive || isCurrent ? 'bg-muted/50' : ''}`;

    const getConnectorContainerClasses = () =>
        `relative flex ${direction === 'horizontal' ? 'h-20 lg:h-24 flex-col' : 'w-20 lg:w-24 flex-row'} items-center sticky`;

    const getConnectorLineClasses = () =>
        `absolute bg-muted-foreground ${
            direction === 'horizontal'
                ? 'bottom-12 lg:bottom-16 h-8 w-[2px] left-[calc(50%-1px)]'
                : 'right-12 lg:right-16 h-[2px] w-[calc(100%-48px)] lg:w-[calc(100%-64px)]'
        }`;

    const getConnectorCircleClasses = () =>
        `absolute bg-muted-foreground rounded-full h-4 w-4 ${
            direction === 'horizontal' ? '-top-[8px] left-[calc(50%-8px)]' : 'top-[calc(50%-8px)] -left-[8px]'
        }`;

    const getCircleClasses = () =>
        `absolute z-10 flex h-12 w-12 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-full border-2 bg-primary
        ${direction === 'horizontal' ? 'bottom-0 left-1/2 -translate-x-1/2' : 'right-0 top-1/2 -translate-y-1/2'}`;

    return (
        <div className={getContainerClasses()}>
            <div className={getItemsContainerClasses()}>
                {experiences.map((experience, index) => {
                    const isActive = selectedId === experience.id.toString();

                    return (
                        <div
                            key={index}
                            className={getItemWrapperClasses(isActive, experience.current)}
                            onClick={() => handleExperienceClick(experience.id)}
                        >
                            <div className={getConnectorContainerClasses()}>
                                <div className={getConnectorLineClasses()} />
                                <div className={getConnectorCircleClasses()} />
                                <div className={getCircleClasses()}>
                                    <BriefcaseIcon className='h-6 w-6 text-foreground lg:h-8 lg:w-8' />
                                </div>
                            </div>
                            <div className={`flex-1 ${direction === 'horizontal' ? 'pt-5' : 'pl-5'}`}>
                                <TimelineItem experience={experience} direction={direction} isActive={isActive} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
