import { useTranslations } from 'next-intl';
import IconRenderer from '@/components/icon-renderer';
import { useSkillsStore } from '../_stores/use-skills-store';
import { Info } from 'lucide-react';

interface SkillItemProps {
    skill: string;
}

export function SkillItem({ skill }: SkillItemProps) {
    const t = useTranslations('skills.tech');
    const { setSelectedSkill } = useSkillsStore();

    return (
        <div
            onClick={() => setSelectedSkill(skill)}
            className='group relative flex cursor-pointer flex-col items-center gap-2 rounded-lg border p-4 transition-colors hover:bg-muted/50'
        >
            <Info className='absolute right-2 top-2 h-4 w-4 transition-opacity' />
            <IconRenderer name={skill} className='h-8 w-8' />
            <span className='text-sm text-muted-foreground'>{t(skill)}</span>
        </div>
    );
}
