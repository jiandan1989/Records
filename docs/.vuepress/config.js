module.exports = {
  // theme: 'vue',
  // dest: 'dist',
  activeHeaderLinks: true, // 激活的标题链接
  displayAllHeaders: true, // 显示所有页面的标题链接
  // title: 'Learn Records',
  description: 'learn Records',
  head: ['link', {
    rel: 'icon',
    href: 'docs/.vuepress/public/logo.png',
  }],
  port: '3000', // 端口
  host: '0.0.0.0',
  base: '/Records/', // 部署 Github
  next: true,
  themeConfig: {
    serviceWorker: {
      updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
    },
    //  覆盖内置搜索
    // algolia: {
    //   apiKey: '<API_KEY>',
    //   indexName: '<INDEX_NAME>'
    // },

    // 侧边栏 collapsable: true 可折叠
    // sidebar: [
    //   {
    //     title: '1',
    //     collapsable: true,
    //     children: [
    //       '/'
    //     ]
    //   },
    // ],
    // 假定 GitHub。也可以是一个完整的 GitLab URL。
    //  repo: 'vuejs/vuepress',
    // 自定义项目仓库链接文字
    // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
    //  repoLabel: '贡献代码！',
    // 以下为可选的 "Edit this page" 链接选项
    // 如果你的文档和项目位于不同仓库：
    //  docsRepo: 'vuejs/vuepress',
    // 如果你的文档不在仓库的根目录下：
    //  docsDir: 'docs',
    // 如果你的文档在某个特定的分支（默认是 'master' 分支）：
    //  docsBranch: 'master',
    // 默认为 false，设置为 true 来启用
    editLinks: false, // 编辑按钮
    // 自定义编辑链接的文本。默认是 "Edit this page"
    // editLinkText: '帮助我们改进页面内容！',
    search: true, // 搜索框
    searchMaxSuggestions: 10, // 搜索框的提示数量
    lastUpdated: '最近更新', // 最近更新 string boolean
    // navbar: false, // 禁用特定的导航
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: '学习记录',
      link: '/note/'
    }, {
      text: '面试题',
      link: '/Interview/',
    }, {
      text: '工具',
      link: '/tools/',
    }, {
      text: 'Github',
      link: 'https://github.com/'
    }]
  },
  markdown: {
    // anchor: 'NHF',
    lineNumbers: true, // 显示行号
  }
  // sidebar: [
  //   '/',
  //   '/zh/React/', ['/zh/Vue/', 'Explicit link text']
  // ]
}
