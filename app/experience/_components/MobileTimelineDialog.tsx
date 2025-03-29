'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import TimelineItemContent from './TimelineItemContent';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDeviceType } from '@/hooks/useDeviceType';
import { useExperienceStore } from '../_stores/useExperienceStore';
import IconRenderer from '../../../components/IconRenderer';
import { useTranslations } from 'next-intl';

export default function MobileTimelineDialog({ id }: { id?: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isMobile } = useDeviceType();
    const { experiences } = useExperienceStore();
    const t = useTranslations('experience');
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
            <DialogContent className='h-[80vh] overflow-y-auto'>
                <DialogHeader>
                    <DialogTitle>
                        <span>
                            {t('timeline.position')}: {experienceItem?.name}
                        </span>
                    </DialogTitle>
                    <DialogDescription>
                        <span>{experienceItem?.dateRange[0].getFullYear()}</span>
                        <span>-</span>
                        <span>{experienceItem?.dateRange[1].getFullYear()}</span>
                    </DialogDescription>
                </DialogHeader>
                {id && <TimelineItemContent id={id} />}
                <DialogFooter className='m-0 flex-row items-center justify-center p-0 sm:justify-center'>
                    {experienceItem?.technologies.map((tech, index) => (
                        <div key={index} className='flex flex-col gap-1'>
                            <IconRenderer name={tech.name} className='h-8 w-8' />
                            <span className='text-xs text-muted-foreground'>{tech.title}</span>
                        </div>
                    ))}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
