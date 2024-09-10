import { vitePlugin as remix } from "@remix-run/dev";
import { vercelPreset } from "@vercel/remix/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/server-runtime" {
	interface Future {
		unstable_singleFetch: true; // 👈 enable _types_ for single-fetch
	}
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        unstable_optimizeDeps: true, // https://remix.run/docs/en/main/guides/dependency-optimization#dependency-optimization
				unstable_singleFetch: true, // 👈 enable single-fetch
      },
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
});
