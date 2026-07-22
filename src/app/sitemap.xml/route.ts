const siteUrl = "https://maazharoon.dev";

const routes = [
  {
    url: siteUrl,
    changefreq: "daily",
    priority: 1.0,
  },
];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) =>
      `<url><loc>${route.url}</loc><changefreq>${route.changefreq}</changefreq><priority>${route.priority}</priority></url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, stale-while-revalidate=86400",
    },
  });
}
