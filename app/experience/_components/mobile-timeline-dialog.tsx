'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import TimelineItemContent from './timeline-item-content';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDeviceType } from '@/hooks/use-device-type';
import { useExperienceStore } from '../_stores/use-experience-store';
import IconRenderer from '../../../components/icon-renderer';

export default function MobileTimelineDialog({ id }: { id?: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isMobile } = useDeviceType();
    const { experiences } = useExperienceStore();
    const experienceItem = experiences.find((exp) => exp.id === Number(id));

    if (!isMobile || !id) return null;

    const handleOpenChange = (open: boolean) => {
        const params = new URLSearchParams(searchParams);

        if (!open) {
            params.delete('id');
            router.push(`/experience?${params.toString()}`);
        }
    };

    return (
        <Dialog aria-modal open={!!id} onOpenChange={handleOpenChange}>
            <DialogContent className='flex h-[80vh] flex-col overflow-hidden rounded-lg'>
                <DialogHeader className='shrink-0'>
                    <DialogTitle>
                        <span>{experienceItem?.name}</span>
                    </DialogTitle>
                    <DialogDescription>
                        <span>{experienceItem?.dateRange[0].getFullYear()}</span>
                        <span>-</span>
                        <span>{experienceItem?.dateRange[1].getFullYear()}</span>
                    </DialogDescription>
                </DialogHeader>
                <div className='min-h-0 flex-1 overflow-auto'>{id && <TimelineItemContent id={id} />}</div>
                <DialogFooter className='m-0 w-full shrink-0 p-0 sm:flex-auto sm:justify-center lg:flex-auto lg:justify-center'>
                    <div className='flex flex-wrap items-center justify-evenly gap-5 p-5 lg:gap-10 lg:p-10'>
                        {experienceItem?.technologies.map((tech, index) => (
                            <div key={index} className='flex basis-[calc(25%-1rem)] flex-col items-center gap-2'>
                                <IconRenderer name={tech.name} className='h-8 w-8' />
                                <span className='text-center text-xs text-muted-foreground'>{tech.title}</span>
                            </div>
                        ))}
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
