import { useTranslations } from 'next-intl';
import { SkillItem } from './skill-item';

interface SkillGroupProps {
    title: string;
    skills: string[];
}

export function SkillGroup({ title, skills }: SkillGroupProps) {
    const t = useTranslations('skills.sections');

    return (
        <div>
            <h3 className='mb-4 text-lg font-semibold'>{title ? t(title) : ''}</h3>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                {skills.map((skill) => (
                    <SkillItem key={skill} skill={skill} />
                ))}
            </div>
        </div>
    );
}
