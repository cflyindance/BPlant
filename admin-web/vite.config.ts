import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  /** 构建产物使用相对路径，便于子目录部署或本地直接打开 dist/index.html（仍建议用静态服务器） */
  base: "./",
  plugins: [tailwindcss()],
  server: { port: 5173 },
});
