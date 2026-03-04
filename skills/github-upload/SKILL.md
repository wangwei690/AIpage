---
name: github-upload
description: 推送本地文件到GitHub仓库并发布GitHub Pages。用于网站更新、内容发布。
metadata:
  {
    "openclaw":
      {
        "emoji": "📤",
        "requires": { "bins": ["git"] },
      },
  }
---

# GitHub Upload Skill

将本地文件推送到 GitHub 仓库并发布。

## 适用场景

- ITFixHub 网站部署/更新
- 网站/博客内容更新
- 发布新页面或修改
- 同步本地文件到 GitHub

## 重要：配合 main 项目

**ITFixHub** 是 main 主持的 AI驱动的IT问题解决方案平台项目。

### 项目信息
- **仓库**: wangwei690/AIpage
- **本地路径**: `C:\Users\Administrator\.openclaw\workspace-webmanager\AIpage`
- **分支**: main
- **访问地址**: https://wangwei690.github.io/AIpage/

### 开发规范
1. 全力配合 main 的开发任务
2. 前端构建产物放在 `AIpage/` 目录
3. 确保 GitHub Pages 路径配置正确（根目录 `/`，不是子目录）
4. 推送后等待 1-2 分钟部署完成

## 使用方法

### 步骤 1：确认仓库

```bash
cd <仓库目录>
git remote -v
```

确保 remote URL 格式为：
```
https://ghp_xxx@github.com/用户名/仓库名.git
```

### 步骤 2：添加文件

```bash
git add -A
```

### 步骤 3：提交

```bash
git commit -m "更新内容描述"
```

### 步骤 4：推送

```bash
git push origin main
```

## 注意事项

- 首次推送后，GitHub Pages 可能需要 1-2 分钟部署
- Vite 构建时注意 base 配置，应为 `/`（根目录）而非 `/itfixhub/`
- 确保 assets 资源路径正确
