import { getTranslations } from 'next-intl/server';
import { MetaLocaleParams } from '../../types';
import { Suspense } from 'react';
import LoadingSpinner from '../../components/Loading';

export async function generateMetadata({ params }: MetaLocaleParams) {
    const { locale } = await params;
    const t = await getTranslations({ locale });

    const title = t('about.meta.title');
    const description = t('about.meta.description');

    return {
        title,
        description,
    };
}

export default async function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <div className='h-full w-full'>{children}</div>
        </Suspense>
    );
}
