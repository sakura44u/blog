# 冯的运维博客 · 个人博客

> 一个纯静态的个人技术博客 + 项目展示站，深色主题，零构建依赖，一键部署到 GitHub Pages。

**访问**：https://sakura44u.github.io/（部署后生效）

## ✨ 页面结构

| 页面 | 说明 |
|------|------|
| `index.html` | 首页（Hero + 精选项目 + 最新文章） |
| `projects.html` | 项目展示（含岗位对应关系） |
| `blog.html` | 文章列表 |
| `post-*.html` | 4 篇运维技术文章 |
| `about.html` | 关于我 |

## 🔧 如何修改内容

- **个人信息 / 项目列表**：编辑 `js/config.js`（名字、GitHub、项目描述都在这里）
- **文章**：直接编辑对应的 `post-*.html`
- **配色 / 样式**：编辑 `css/style.css`（CSS 变量在 `:root` 中，改一处即可换主题色）

## 🚀 部署到 GitHub Pages

### 方式一：GitHub Actions（推荐，已内置）

1. 在 GitHub 新建仓库（如 `sakura44u.github.io`，或任意名字如 `blog`）
2. 把本目录推送到该仓库的 `main` 分支：

```bash
git init
git add .
git commit -m "init: blog"
git branch -M main
git remote add origin https://github.com/sakura44u/blog.git
git push -u origin main
```

3. 打开仓库 **Settings → Pages → Build and deployment → Source 选 "GitHub Actions"**
4. 推送后会自动触发 `.github/workflows/pages.yml` 完成部署

### 方式二：部署到 Vercel / Netlify

直接把本目录导入即可，零配置（纯静态站点）。

## 📁 目录结构

```
blog/
├── index.html          # 首页
├── projects.html       # 项目
├── blog.html           # 博客列表
├── about.html          # 关于
├── post-*.html         # 4 篇技术文章
├── 404.html
├── css/style.css
├── js/
│   ├── config.js       # 站点配置（改这里）
│   └── main.js         # 导航高亮 / 项目渲染
└── .github/workflows/pages.yml
```

## License

MIT
