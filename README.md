# 创业知识库

记录创业路上的思考、经验和教训

## 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/你的用户名/your-repo-name.git
   cd your-repo-name
   ```

2. **本地预览**
   ```bash
   # 安装 Jekyll (仅首次)
   gem install jekyll bundler
   bundle install
   
   # 启动本地服务器
   bundle exec jekyll serve
   ```

3. **发布到 GitHub**
   - 将代码推送到 GitHub 仓库
   - 进入 Settings → Pages
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "gh-pages" / "main"，目录选择 "/(root)"
   - 访问 `https://你的用户名.github.io/your-repo-name`

## 添加新文章

在 `_posts` 文件夹下创建新文件，命名格式：`YYYY-MM-DD-文章标题.md`

```markdown
---
layout: post
title: "你的文章标题"
categories: [分类1, 分类2]
tags: [标签1, 标签2]
author: 你的名字
---

在这里写你的文章内容...
```

## 配置修改

修改 `_config.yml` 文件来定制网站：
- 网站名称、描述
- 社交链接
- 评论设置
