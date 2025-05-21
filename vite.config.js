import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Zeetem/', // Use the exact repo name here
  plugins: [react()],
});
