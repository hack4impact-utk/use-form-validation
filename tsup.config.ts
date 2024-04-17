import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'use-mui-table-pagination',
  entry: ['src/index.ts'],
  outDir: 'dist',
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ['cjs', 'esm'],
});
