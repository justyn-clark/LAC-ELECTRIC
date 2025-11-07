import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "..", "dist");

const siteUrl = "https://www.lacelectric.com";
const routes = [
	{ url: "/", priority: "1.0", changefreq: "daily" },
	{ url: "/projects", priority: "0.7", changefreq: "daily" },
	{ url: "/services", priority: "0.7", changefreq: "daily" },
	{ url: "/about", priority: "0.7", changefreq: "daily" },
	{ url: "/contact", priority: "0.7", changefreq: "daily" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
	.map(
		(route) => `  <url>
    <loc>${siteUrl}${route.url === "/" ? "" : route.url}/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
	)
	.join("\n")}
</urlset>`;

async function main() {
	await fs.writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
	console.log("Sitemap generated successfully");
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
