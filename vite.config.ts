import { configDefaults } from 'vitest/config';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest-setup.ts'],
    coverage: {
      all: true,
      include: ['src/*.ts', 'src/*.tsx'],
      exclude: [...configDefaults.exclude, 'src/main.tsx', 'src/*.d.ts'],
      provider: 'v8',
      reporter: ['html', 'text'],
      thresholds: {
        '100': true,
      },
    },
  },
});
