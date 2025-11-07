import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { staticRoutes } from "./vite-plugin-static-routes.js";

// https://vite.dev/config/
export default defineConfig({
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
	},
});
