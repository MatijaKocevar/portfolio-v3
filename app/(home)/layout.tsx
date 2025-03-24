import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations({ locale });

    const title = t('home.meta.title');
    const description = t('home.meta.description');

    return {
        title,
        description,
    };
}

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className='container mx-auto px-4'>{children}</div>;
}
