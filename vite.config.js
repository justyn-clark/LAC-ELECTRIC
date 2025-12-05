import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { staticRoutes } from "./vite-plugin-static-routes.js";

// https://vite.dev/config/
export default defineConfig({
	server: {
		port: 3020,
	},
	plugins: [
		react(),
		tailwindcss(),
		staticRoutes(), // Automatically generates static routes after build
	],
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
			},
		},
		assetsInlineLimit: 0,
	},
});
