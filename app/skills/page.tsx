import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import IconRenderer from '@/components/IconRenderer';

const skillCategories = {
    webDevelopment: {
        frontend: ['react', 'nextjs', 'vue', 'angular', 'typescript', 'javascript', 'html5', 'cssSass', 'tailwind'],
        backend: ['cSharp', 'dotnet', 'nodejs', 'php', 'python'],
        database: ['postgres', 'mssql'],
        tools: ['docker', 'git'],
    },
    design: ['photoshop', 'illustrator', 'figma', 'inkscape'],
};

export default function SkillsPage() {
    const t = useTranslations();

    return (
        <div className='flex flex-col gap-8 p-5 lg:p-10'>
            {/* Web Development Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Web Development</CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col gap-8'>
                    {/* Frontend */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold'>Frontend Development</h3>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                            {skillCategories.webDevelopment.frontend.map((skill) => (
                                <div
                                    key={skill}
                                    className='flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors hover:bg-muted/50'
                                >
                                    <IconRenderer name={skill} className='h-8 w-8' />
                                    <span className='text-sm text-muted-foreground'>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold'>Backend Development</h3>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                            {skillCategories.webDevelopment.backend.map((skill) => (
                                <div
                                    key={skill}
                                    className='flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors hover:bg-muted/50'
                                >
                                    <IconRenderer name={skill} className='h-8 w-8' />
                                    <span className='text-sm text-muted-foreground'>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Database & Tools */}
                    <div>
                        <h3 className='mb-4 text-lg font-semibold'>Database & Tools</h3>
                        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                            {[...skillCategories.webDevelopment.database, ...skillCategories.webDevelopment.tools].map(
                                (skill) => (
                                    <div
                                        key={skill}
                                        className='flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors hover:bg-muted/50'
                                    >
                                        <IconRenderer name={skill} className='h-8 w-8' />
                                        <span className='text-sm text-muted-foreground'>{skill}</span>
                                    </div>
                                ),
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Design Section */}
            <Card>
                <CardHeader>
                    <CardTitle>Design</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
                        {skillCategories.design.map((skill) => (
                            <div
                                key={skill}
                                className='flex flex-col items-center gap-2 rounded-lg border p-4 transition-colors hover:bg-muted/50'
                            >
                                <IconRenderer name={skill} className='h-8 w-8' />
                                <span className='text-sm text-muted-foreground'>{skill}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
