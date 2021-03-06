---
title: 使用 VuePress 搭建个人网站
---

# 使用 VuePress 搭建个人网站

使用 VuePress 搭建个人网站很简单，你要会一点 vue 和 Markdown 语法。

## 起步

```bash
# 在桌面创建目录 demo 并且进入
cd desktop && mkdir demo && cd demo

# 安装为本地依赖项
yarn add -D vuepress # 或 npm install -D vuepress

# 创建一个 docs 目录
mkdir docs

# 创建一个 markdown 文件
echo '# Hello VuePress' > docs/README.md
```

然后，给 package.json 添加一些 scripts 脚本：

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs", 
    "docs:build": "vuepress build docs"
  }
}
```

启动项目

```bash
yarn docs:dev # 或 npm run docs:dev
```

## 构建目录

```bash
cd docs && mkdir .vuepress
cd .vuepress && touch config.js && mkdir public
...
```

目录结构

```js
├── docs
│   ├── .vuepress // vuepress 相关
│   │   ├── components // 自定义的组件
│   │   ├── dist // 打包生成的文件
│   │   ├── public // 静态资源
│   │   └── config.js // 配置文件
│   ├── blog // 自定义目录
│   │   ├── page1.md // blog目录中的文章
│   │   └── README.md // blog主页配置
│   └── README.md // 主页配置
├── node_modules
├── .gitattributes
├── package.json
├── README.md
└── yarn.lock
```

## 配置 config.js

config.js 用于配置网站及主题

```js
module.exports = {
  title: "Maldives", // 网站标题
  description: 'Maldves is very beautiful.', // 网站描述
  repo: 'https://github.com/yourname/demo.git', // github 仓库链接
  themeConfig: { // 主题配置
    nav: [ // 导航栏
      { text: '主页', link: '/' },
      { text: '博客', link: '/blog/' },
      ...
    ],
    sidebar: { // 侧边栏
      '/blog/': [ 'page1' ]
    },
    lastUpdated: 'lastUpdated', // 最后更新
    ...
  },
  head: [ // 网站 head 配置
    ['link', {
      rel: 'icon',
      href: '/logo.png' // 图片位于 public 目录
    }]
  ]
}
```

## 部署

关于部署，[VuePress 官网](https://vuepress.docschina.org/guide/deploy.html#github-%E9%A1%B5%E9%9D%A2) 介绍的很详细，我主要介绍一下 [Netlify](https://www.netlify.com/) ，Netlify 是国外一家提供静态网络托管服务的综合平台，使用起来非常简单：

1. 打开 [Netlify](https://www.netlify.com/)，点击 “Get started for free” 按钮，选择 GitHub 登录，点击 “New site from Git” 创建新站点，在 “Create a new site” 页面，选择 “Continuous Deployment” 为 GitHub，然后选择 GitHub 中的仓库
2. 设置构建选项：
    * 构建命令：`npm run docs:build` or `yarn docs:build`
    * 发布目录：`docs/.vuepress/dist`
3. 点击 “Deploy site” 部署

以后我们修改网站或写文章后，直接推送到 GitHub 即可，剩下的工作 Netlify 会帮我们完成，如打包生成静态文件、部署等。