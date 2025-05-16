'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { sendEmail } from '../actions/email';
import { Textarea } from '../../components/ui/textarea';

export default function ContactPage() {
    const t = useTranslations();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        try {
            const result = await sendEmail({ name, email, message });

            if (result.success) {
                setStatus({ success: true });
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus({ success: false, error: result.error });
            }
        } catch {
            setStatus({ success: false, error: 'Failed to send message. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='scrollable-element flex min-h-[calc(100vh-4rem)] items-center justify-center p-5 lg:p-10'>
            <div className='grid h-full w-full gap-8 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-2'>
                <div className='order-2 lg:order-1 lg:h-full'>
                    <Card className='h-full'>
                        <CardContent className='flex h-full flex-col gap-5 pt-5'>
                            <form onSubmit={handleSubmit} className='flex h-full flex-col gap-5'>
                                <div className='grid gap-5 sm:grid-cols-2'>
                                    <div className='mt-0 space-y-2'>
                                        <Label htmlFor='name' className='text-base'>
                                            {t('contact.form.name')}
                                        </Label>
                                        <Input
                                            id='name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className='h-12 text-base'
                                            required
                                        />
                                    </div>
                                    <div className='space-y-2'>
                                        <Label htmlFor='email' className='text-base'>
                                            {t('contact.form.email')}
                                        </Label>
                                        <Input
                                            id='email'
                                            type='email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className='h-12 text-base'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-1 flex-col space-y-2'>
                                    <Label htmlFor='message' className='text-base'>
                                        {t('contact.form.message')}
                                    </Label>
                                    <div className='relative flex-1'>
                                        <div className='absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2'>
                                            {status &&
                                                (status.success ? (
                                                    <Alert className='border-green-500/20 bg-green-500/10 text-green-500'>
                                                        <AlertDescription>
                                                            {t('contact.form.alerts.success')}
                                                        </AlertDescription>
                                                    </Alert>
                                                ) : (
                                                    status.error && (
                                                        <Alert className='border-destructive/20 bg-destructive/10 text-destructive'>
                                                            <AlertDescription>{status.error}</AlertDescription>
                                                        </Alert>
                                                    )
                                                ))}
                                        </div>
                                        <Textarea
                                            id='message'
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className='h-full min-h-[200px] w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-base'
                                            required
                                        />
                                    </div>
                                </div>
                                <Button type='submit' disabled={isLoading} className='w-full sm:w-auto'>
                                    {isLoading ? (
                                        <>{t('contact.form.submit.sending')}</>
                                    ) : (
                                        t('contact.form.submit.default')
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <div className='order-1 lg:order-2 lg:flex lg:h-full lg:items-center'>
                    <div className='space-y-5'>
                        <p className='text-xl text-muted-foreground'>{t('contact.description')}</p>

                        <div className='space-y-5'>
                            <div className='flex items-center'>
                                <div className='h-10 w-10 shrink-0'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='h-6 w-6'
                                    >
                                        <rect width='20' height='16' x='2' y='4' rx='2' />
                                        <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
                                    </svg>
                                </div>
                                <div className='ml-5'>
                                    <p className='text-lg font-medium'>Email</p>
                                    <p className='text-muted-foreground'>matija.kocev@gmail.com</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='h-10 w-10 shrink-0'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='h-6 w-6'
                                    >
                                        <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
                                        <path d='M9 18c-4.51 2-5-2-7-2' />
                                    </svg>
                                </div>
                                <div className='ml-5'>
                                    <p className='text-lg font-medium'>GitHub</p>
                                    <a
                                        href='https://github.com/matija-kocevar'
                                        className='text-muted-foreground hover:text-primary'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        github.com/matija-kocevar
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <div className='h-10 w-10 shrink-0'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeWidth='2'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        className='h-6 w-6'
                                    >
                                        <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                                        <rect width='4' height='12' x='2' y='9' />
                                        <circle cx='4' cy='4' r='2' />
                                    </svg>
                                </div>
                                <div className='ml-5'>
                                    <p className='text-lg font-medium'>LinkedIn</p>
                                    <a
                                        href='https://linkedin.com/in/matija-kocevar'
                                        className='text-muted-foreground hover:text-primary'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        linkedin.com/in/matija-kocevar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
