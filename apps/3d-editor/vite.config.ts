import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public',  // public 디렉토리를 루트로 설정
  build: {
    outDir: '../dist', // 빌드 결과 저장 경로
    emptyOutDir: true,
  },
  server: {
    open: true,
  },
});
