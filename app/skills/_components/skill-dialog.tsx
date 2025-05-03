import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import IconRenderer from '@/components/icon-renderer';
import { useSkillsStore } from '../_stores/use-skills-store';

export function SkillDialog() {
    const t = useTranslations('skills');
    const { selectedSkill, skillDetails, setSelectedSkill } = useSkillsStore();

    return (
        <Dialog open={!!selectedSkill} onOpenChange={(open) => !open && setSelectedSkill(null)}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-4 flex items-center gap-2'>
                        {selectedSkill && (
                            <>
                                <IconRenderer name={selectedSkill} className='h-6 w-6' />
                                <span>{t(`tech.${selectedSkill}`)}</span>
                            </>
                        )}
                    </DialogTitle>
                    {selectedSkill && (
                        <DialogDescription className='mt-2 whitespace-pre-line text-muted-foreground'>
                            {t(`descriptions.${selectedSkill}`)}
                        </DialogDescription>
                    )}
                </DialogHeader>
                <div className='mt-4'>
                    {selectedSkill && skillDetails[selectedSkill] && (
                        <ul className='grid grid-cols-2 gap-2'>
                            {skillDetails[selectedSkill].map((detail, index) => (
                                <li key={index} className='flex items-center gap-2 rounded-md border p-2'>
                                    <span className='text-sm'>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}
