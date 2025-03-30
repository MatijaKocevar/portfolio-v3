import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'M.K. Portfolio',
        short_name: 'M.K. Portfolio',
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
