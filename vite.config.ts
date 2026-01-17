import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/omu-karate-page",
  server: {
    open: true, // 自動でブラウザを開く
    port: 3000, // ここでポート番号を指定します
  },
  build: {
    outDir: 'build', // ビルドの出力先ディレクトリ
    commonjsOptions: {
      transformMixedEsModules: true, // CommonJSとES Modulesの混在を許可
    },
  },
  
  plugins: [react()],
});