export function GET({site}){return new Response(`User-agent: *\nAllow: /\nSitemap: ${site}sitemap.xml\n`)}
