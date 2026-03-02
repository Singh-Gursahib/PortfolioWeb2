import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { research } from '@/lib/research';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gursahib-singh.me';

    // Base Routes
    const staticRoutes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/research`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    // Dynamic Project Routes
    const projectRoutes = projects
        .filter((p) => p.hasDetail)
        .map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }));

    // Dynamic Research Routes
    const researchRoutes = research
        .filter((r) => r.hasDetail)
        .map((res) => ({
            url: `${baseUrl}/research/${res.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        }));

    return [...staticRoutes, ...projectRoutes, ...researchRoutes];
}
