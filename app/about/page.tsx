import { useTranslations } from 'next-intl';
import Image from 'next/image';
import IconRenderer from '@/components/icon-renderer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
    const t = useTranslations();

    const techStack = [
        { name: 'react', title: t('skills.tech.react') },
        { name: 'vue', title: t('skills.tech.vue') },
        { name: 'nextjs', title: t('skills.tech.nextjs') },
        { name: 'typescript', title: t('skills.tech.typescript') },
        { name: 'cSharp', title: t('skills.tech.cSharp') },
        { name: 'php', title: t('skills.tech.php') },
        { name: 'postgres', title: t('skills.tech.postgres') },
        { name: 'mssql', title: t('skills.tech.mssql') },
    ];

    const frontendItems = t.raw('about.capabilities.frontend.items') as string[];
    const fullstackItems = t.raw('about.capabilities.fullstack.items') as string[];

    return (
        <div className='flex flex-col gap-5 p-5 lg:gap-10 lg:p-10'>
            <Card className='border-none shadow-none'>
                <CardHeader className='p-0'>
                    <div className='flex flex-col items-start gap-5 md:flex-row lg:gap-10'>
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
                        <div className='flex-grow space-y-5'>
                            <CardTitle className='text-3xl font-bold'>{t('about.title')}</CardTitle>
                            <p className='text-lg leading-relaxed text-muted-foreground'>{t('home.bio.tagline')}</p>
                        </div>
                    </div>
                </CardHeader>
            </Card>

            <Separator />

            <section className='space-y-5'>
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
                    <div className='grid gap-5 md:grid-cols-2 lg:gap-10'>
                        <div className='space-y-5'>
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
                        <div className='space-y-5'>
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
                    <CardTitle>{t('skills.sections.webDevelopment.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div
                        className='flex flex-wrap gap-5 sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8'
                        style={{ width: '100%', justifyContent: 'space-evenly' }}
                    >
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className='group flex w-[calc(33.33%-1rem)] flex-col items-center gap-3 rounded-lg p-5 transition-colors hover:bg-accent sm:w-auto lg:p-10'
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

            <section className='space-y-5'>
                <h2 className='text-2xl font-semibold'>{t('about.sections.currentFocus')}</h2>
                <div className='prose dark:prose-invert max-w-none whitespace-pre-line'>
                    <p className='text-muted-foreground'>{t('about.content.currentFocus')}</p>
                </div>
            </section>
        </div>
    );
}
