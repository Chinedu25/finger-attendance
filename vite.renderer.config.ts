import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig } from 'vite';
import { pluginExposeRenderer } from './vite.base.config';
import path from 'path';

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'renderer'>;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? '';

  return {
    root,
    mode,
    base: './',
    build: {
      outDir: `.vite/renderer/${name}`,
      rollupOptions: {
        external: ['WebSdk'],
      },
    },
    plugins: [pluginExposeRenderer(name)],
    resolve: {
      preserveSymlinks: true,
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "WebSdK": path.resolve(__dirname, "./modules/websdk/index.js"),
      },
    },
    clearScreen: false,
  } as UserConfig;
});
