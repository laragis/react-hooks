import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  minify: true,
  format: ['esm', 'cjs'],
  dts: {
    resolve: true
  },
  sourcemap: true,
  external: ['react', 'react-dom'],
  splitting: false,
  clean: true,
  treeshake: true,
});