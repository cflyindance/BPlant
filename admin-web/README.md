# 餐饮商家后台（导航壳）

基于《餐饮商家后台-导航与目录结构建议》中的**整合导航树**生成的 **Vite + TypeScript + Tailwind CSS v4** 管理端壳工程。

## 设计说明

- **Tailwind Design System（v4）**：`src/styles/app.css` 使用 `@import "tailwindcss"`、`@theme` OKLCH 语义色、`@custom-variant dark`。
- **UI/UX**：跳过主内容链接、可见焦点环、`min-h-11` 触摸目标、`prefers-reduced-motion`、标题层级、侧栏 `aria-current` / `aria-expanded`。

## 命令

```bash
cd admin-web
npm install
npm run dev
```

浏览器打开提示的本地地址（默认 `http://localhost:5173`），使用 Hash 切换子页面（如 `#/orders/all`）。

## 构建

```bash
npm run build
npm run preview
```

## 配置导航

编辑 `src/config/navigation.ts` 中的 `NAV_MODULES` 即可调整模块与子路由；`chainOnly: true` 表示连锁向入口，侧栏与 Tab 均会显示，Tab 上带「连锁」角标。
