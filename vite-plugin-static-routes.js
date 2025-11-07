import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Vite plugin to automatically generate static routes for React Router
 * Reads routes from your properties data source
 */
export function staticRoutes() {
	return {
		name: "static-routes",
		async writeBundle(options, _bundle) {
			const distDir = options.dir || path.resolve(process.cwd(), "dist");
			const indexHtml = path.join(distDir, "index.html");

			if (!(await fileExists(indexHtml))) {
				console.warn(
					"[static-routes] index.html not found, skipping route generation",
				);
				return;
			}

			const template = await fs.readFile(indexHtml, "utf8");

			// Static routes from your app
			const staticRoutes = [
				"/",
				"/projects",
				"/services",
				"/about",
				"/contact",
			];

			// Dynamic routes - read from properties.ts
			let propertyRoutes = [];
			try {
				// Try to read and parse properties file
				const propertiesPath = path.resolve(
					process.cwd(),
					"src/data/properties.ts",
				);
				const content = await fs.readFile(propertiesPath, "utf8");
				const slugMatches = content.matchAll(/slug:\s*['"]([^'"]+)['"]/g);
				propertyRoutes = Array.from(
					slugMatches,
					(match) => `/projects/${match[1]}`,
				);
			} catch (_err) {
				console.warn(
					"[static-routes] Could not read properties.ts, skipping dynamic routes",
				);
			}

			const allRoutes = [...staticRoutes, ...propertyRoutes];

			// Generate static HTML files
			for (const route of allRoutes) {
				const routeDir = path.join(distDir, route === "/" ? "" : route);
				await fs.mkdir(routeDir, { recursive: true });
				await fs.writeFile(path.join(routeDir, "index.html"), template);
			}

			console.log(`✅ Generated ${allRoutes.length} static routes`);
		},
	};
}

async function fileExists(filePath) {
	try {
		await fs.access(filePath);
		return true;
	} catch {
		return false;
	}
}
