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
import { useTranslations } from 'next-intl';

export default function MobileTimelineDialog({ id }: { id?: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isMobile } = useDeviceType();
    const { experiences } = useExperienceStore();
    const experienceItem = experiences.find((exp) => exp.id === Number(id));
    const t = useTranslations();

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
            <DialogContent className='flex max-h-[80vh] flex-col justify-between gap-5 overflow-y-auto rounded-lg'>
                <DialogHeader className='text-left'>
                    <DialogTitle>
                        <span>{experienceItem?.name}</span>
                    </DialogTitle>
                    <DialogDescription className='text-sm text-muted-foreground'>
                        <span>{experienceItem?.dateRange[0].getFullYear()}</span>
                        <span>{`${' - '}`}</span>
                        <span>
                            {experienceItem?.current ? t('common.present') : experienceItem?.dateRange[1].getFullYear()}
                        </span>
                    </DialogDescription>
                </DialogHeader>
                <div className='flex h-full items-center'>
                    <div className='whitespace-pre-line text-left text-muted-foreground'>
                        {t(experienceItem?.description ?? '')}
                    </div>
                </div>
                <DialogFooter className='m-0 flex w-full flex-row items-center justify-center p-0 sm:justify-center'>
                    <div className='flex flex-wrap items-center justify-evenly gap-5'>
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
