import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    const isDev = process.env.NODE_ENV === 'development';
    const name = isDev ? 'DEV - M.K. Portfolio' : 'M.K. Portfolio';
    const shortName = isDev ? 'DEV' : 'M.K. Portfolio';

    return {
        name,
        short_name: shortName,
        description: 'A portfolio website for Matija Kočevar',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/manifest/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/manifest/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}
