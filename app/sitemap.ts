import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://tapiceriamajadahonda.es';

    // Static routes
    const routes = [
        '',
        '/showroom',
        '/servicios/restauracion-sofas',
        '/servicios/tapizado-sillas',
        '/servicios/cabeceros-medida',
        '/servicios/muebles-exterior',
        '/tapicero-majadahonda',
        '/tapicero-las-rozas',
        '/tapicero-boadilla',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    return routes;
}
