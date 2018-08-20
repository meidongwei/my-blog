module.exports = {
  title: "Arif 的个人博客",
  description: 'The story about Arif.',
  repo: 'https://github.com/meidongwei/my-blog.git', // github 仓库链接
  themeConfig: {
    // 添加导航栏
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '博客',
        link: '/blog/page5'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/meidongwei'
      }
    ],
    // 添加侧边栏
    sidebar: {
      '/blog/': [ 'page5', 'page4', 'page3', 'page2', 'page1' ]
    },
    lastUpdated: '上次更新',
    activeHeaderLinks: false, // 激活标题链接，默认为true
  },
  head: [
    ['link', { // 标签栏图标
      rel: 'icon',
      href: '/logo.png'
    }],
    ['link', { // 桌面图标
      rel: 'apple-touch-icon',
      href: '/logo.png'
    }]
  ]
}
