import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Zeetem/',  // exact repo name with trailing slash
  plugins: [react()],
});
