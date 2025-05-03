'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { useSkillsStore } from './_stores/use-skills-store';
import { SkillGroup } from './_components/skill-group';
import { SkillDialog } from './_components/skill-dialog';
import { SkillItem } from './_components/skill-item';

export default function SkillsPage() {
    const t = useTranslations('skills.sections');
    const { skillCategories } = useSkillsStore();

    return (
        <div className='scrollable-element'>
            <div className='flex flex-col gap-8 p-5 lg:p-10'>
                <Card>
                    <CardHeader>
                        <CardTitle>{t('webDevelopment.title')}</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-8'>
                        <SkillGroup title='webDevelopment.frontend' skills={skillCategories.webDevelopment.frontend} />
                        <SkillGroup title='webDevelopment.backend' skills={skillCategories.webDevelopment.backend} />
                        <SkillGroup
                            title='webDevelopment.database'
                            skills={[
                                ...skillCategories.webDevelopment.database,
                                ...skillCategories.webDevelopment.tools,
                            ]}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>{t('design.title')}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                            {skillCategories.design.map((skill) => (
                                <SkillItem key={skill} skill={skill} />
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
            <SkillDialog />
        </div>
    );
}
