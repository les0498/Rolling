import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      // svgr 옵션 : https://react-svgr.com/docs/options/
      //svg import할때 ?react 접미사 생략가능
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        //build 시에 모든 console.log를 제거
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
