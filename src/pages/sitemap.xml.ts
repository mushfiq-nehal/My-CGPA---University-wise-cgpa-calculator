import type { APIRoute } from 'astro';
import { UNIVERSITIES } from '../data/universities';

export const GET: APIRoute = ({ site }) => {
  // Use config's site URL, default to fallback if not found
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://mycgpa.com';

  // Define static pages — trailing slashes match the actual served URLs (e.g. /about/ serves about/index.html)
  const staticPages = [
    '/',
    '/about/',
    '/contact/',
    '/cookies/',
    '/privacy/',
    '/terms/',
    '/universities/',
  ];

  // Map dynamic university paths
  const universityPages = UNIVERSITIES.map((u) => `/universities/${u.slug}/`);
  const allPages = [...staticPages, ...universityPages];

  // No <lastmod>: it would be the build timestamp on every URL, telling Google
  // all 36 pages changed on every deploy. Google discounts lastmod when it
  // behaves like that, so omitting it is more useful than faking it.

  // Generate XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>${page === '/' ? 'daily' : 'monthly'}</changefreq>
    <priority>${page === '/' ? '1.0' : page.startsWith('/universities/') ? '0.8' : '0.5'}</priority>
  </url>`
    )
    .join('')
    .trim()}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
