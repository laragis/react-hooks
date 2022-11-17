import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.tsx'],
  minify: true,
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  external: ['react', 'react-dom'],
  splitting: false,
  clean: true,
  treeshake: true,
});