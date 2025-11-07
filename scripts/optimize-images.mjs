import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

// Source of new, full-res images from the legacy project
const SOURCE_BASE = path.resolve(process.cwd(), "../src/images/NEW");
// Destination inside the new Vite app
const DEST_BASE = path.resolve(process.cwd(), "src/images");

const TARGET_WIDTH = 3200;
const TARGET_HEIGHT = 2133; // keep aspect when possible; height used as cap
const JPEG_QUALITY = 70; // approx ~294KB for 3200px wide, tweak if needed

async function ensureDir(dir) {
	await fs.mkdir(dir, { recursive: true });
}

async function isDirectory(p) {
	try {
		const s = await fs.stat(p);
		return s.isDirectory();
	} catch {
		return false;
	}
}

async function* walk(dir) {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const res = path.resolve(dir, entry.name);
		if (entry.isDirectory()) {
			yield* walk(res);
		} else {
			yield res;
		}
	}
}

function shouldProcess(file) {
	const ext = path.extname(file).toLowerCase();
	return [".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"].includes(ext);
}

async function processImage(srcFile, destFile) {
	const img = sharp(srcFile);
	const meta = await img.metadata();
	const width = meta.width ?? TARGET_WIDTH;
	const height = meta.height ?? TARGET_HEIGHT;

	const resizeOptions = { width: TARGET_WIDTH };
	// If the image is portrait or very tall, cap by height instead
	if (height && width && height > width) {
		resizeOptions.width = undefined;
		resizeOptions.height = TARGET_HEIGHT;
	}

	const pipeline = img
		.resize(resizeOptions)
		.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

	await pipeline.toFile(destFile);
}

async function main() {
	if (!(await isDirectory(SOURCE_BASE))) {
		console.log("No new images found to optimize at", SOURCE_BASE);
		return;
	}

	await ensureDir(DEST_BASE);

	for await (const file of await walk(SOURCE_BASE)) {
		if (!shouldProcess(file)) continue;

		const rel = path.relative(SOURCE_BASE, file);
		const destPath = path.join(DEST_BASE, rel).replace(/\.(png|PNG)$/g, ".jpg");

		const destDir = path.dirname(destPath);
		await ensureDir(destDir);

		await processImage(file, destPath);
		console.log("Optimized:", rel);
	}

	console.log("Image optimization complete. Output:", DEST_BASE);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
