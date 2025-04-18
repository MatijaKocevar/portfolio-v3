import { useTranslations } from 'next-intl';
import Image from 'next/image';
import IconRenderer from '@/components/IconRenderer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
    const t = useTranslations();

    const techStack = [
        { name: 'react', title: 'React' },
        { name: 'vue', title: 'Vue' },
        { name: 'nextjs', title: 'Next.js' },
        { name: 'typescript', title: 'TypeScript' },
        { name: 'cSharp', title: 'C#' },
        { name: 'php', title: 'PHP' },
        { name: 'postgres', title: 'PostgreSQL' },
        { name: 'sql', title: 'SQL Server' },
    ];

    const frontendItems = t.raw('about.capabilities.frontend.items') as string[];
    const fullstackItems = t.raw('about.capabilities.fullstack.items') as string[];

    return (
        <div className='container items-center justify-center space-y-8 p-6'>
            <Card className='border-none shadow-none'>
                <CardHeader className='px-0'>
                    <div className='flex flex-col items-start gap-8 md:flex-row'>
                        <div className='flex-shrink-0'>
                            <div className='relative h-48 w-48 overflow-hidden rounded-full border border-primary/10 shadow-xl'>
                                <Image
                                    src='/images/me/384.webp'
                                    alt='Profile'
                                    width={384}
                                    height={384}
                                    className='object-cover transition-all hover:scale-105'
                                    priority
                                    sizes='192px'
                                    quality={80}
                                />
                            </div>
                        </div>
                        <div className='flex-grow space-y-4'>
                            <CardTitle className='text-3xl font-bold'>{t('about.title')}</CardTitle>
                            <p className='text-lg leading-relaxed text-muted-foreground'>{t('home.bio.tagline')}</p>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <Separator className='my-8' />

            <section className='space-y-6'>
                <h2 className='text-2xl font-semibold'>{t('about.sections.journey')}</h2>
                <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
                    <p className='text-muted-foreground'>{t('about.content.journey')}</p>
                </div>
            </section>

            <Card className='border-primary/10'>
                <CardHeader>
                    <CardTitle>{t('about.sections.capabilities')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className='grid gap-8 md:grid-cols-2'>
                        <div className='space-y-4'>
                            <h3 className='text-xl font-medium'>{t('about.capabilities.frontend.title')}</h3>
                            <ul className='space-y-2'>
                                {frontendItems.map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 text-muted-foreground'>
                                        <span className='h-1.5 w-1.5 rounded-full bg-primary' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='space-y-4'>
                            <h3 className='text-xl font-medium'>{t('about.capabilities.fullstack.title')}</h3>
                            <ul className='space-y-2'>
                                {fullstackItems.map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 text-muted-foreground'>
                                        <span className='h-1.5 w-1.5 rounded-full bg-primary' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className='border-primary/10 bg-card'>
                <CardHeader>
                    <CardTitle>Tech Stack</CardTitle>
                </CardHeader>
                <CardContent>
                    <div
                        className='flex flex-wrap gap-4 sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'
                        style={{ width: '100%', justifyContent: 'space-evenly' }}
                    >
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className='group flex w-[calc(33.33%-1rem)] flex-col items-center gap-3 rounded-lg p-4 transition-colors hover:bg-accent sm:w-auto'
                            >
                                <IconRenderer
                                    name={tech.name}
                                    className='h-12 w-12 text-foreground transition-all duration-200 group-hover:scale-110'
                                />
                                <span className='text-sm text-muted-foreground group-hover:text-foreground'>
                                    {tech.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <section className='space-y-6'>
                <h2 className='text-2xl font-semibold'>{t('about.sections.currentFocus')}</h2>
                <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
                    <p className='text-muted-foreground'>{t('about.content.currentFocus')}</p>
                </div>
            </section>
        </div>
    );
}
