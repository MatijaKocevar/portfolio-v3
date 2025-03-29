'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import TimelineItemContent from './TimelineItemContent';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDeviceType } from '@/hooks/useDeviceType';

export default function MobileTimelineDialog({ id }: { id?: string }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isMobile } = useDeviceType();

    if (!isMobile || !id) return null;

    const handleOpenChange = (open: boolean) => {
        const params = new URLSearchParams(searchParams);

        if (!open) {
            params.delete('id');
            router.push(`/experience?${params.toString()}`);
        }
    };

    return (
        <Dialog modal open={!!id} onOpenChange={handleOpenChange}>
            <DialogContent className='h-[80vh] overflow-y-auto'>
                <DialogHeader>
                    <DialogTitle>Experience Details</DialogTitle>
                    <DialogDescription>View detailed information about this position</DialogDescription>
                </DialogHeader>
                {id && <TimelineItemContent id={id} />}
            </DialogContent>
        </Dialog>
    );
}
