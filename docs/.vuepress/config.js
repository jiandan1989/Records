module.exports = {

  base: '/Records/', // 部署 Github
  // theme: 'vue',
  // dest: 'dist',
  themeConfig: {
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
    //  editLinks: true,
    // 自定义编辑链接的文本。默认是 "Edit this page"
    // editLinkText: '帮助我们改进页面内容！',
    search: false, // 搜索框
    searchMaxSuggestions: 10, // 搜索框的提示数量
    lastUpdated: 'Last Updated', // 最近更新 string boolean
    // navbar: false, // 禁用特定的导航
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: '学习记录',
        items: [{
          text: '基础',
          items: [{
            text: 'JS',
            link: '/note/JS/'
          }, {
            text: 'HTML5 API',
            link: '/note/HTML5/'
          }]
        }, {
          text: '框架',
          items: [{
              text: 'React',
              link: '/note/React/'
            },
            {
              text: 'Angular',
              link: '/note/Angular/'
            },
            {
              text: 'Vue',
              link: '/note/Vue/'
            }
          ]
        }]
      },
      {
        text: '面试题',
        items: [{
          text: 'CSS',
          link: '/Interview/CSS/'
        }, ]
      },
      {
        text: '工具',
        items: [{
            text: 'Git',
            link: '/tools/git/'
          },
          {
            text: 'ZSH',
            link: '/tools/zsh/'
          },
        ]
      },
      {
        text: 'Github',
        link: 'https://github.com/'
      },
    ],
    // sidebar: [
    //   '/',
    //   '/zh/React/', ['/zh/Vue/', 'Explicit link text']
    // ]
  },
  activeHeaderLinks: true, // 激活的标题链接
  displayAllHeaders: false, // 显示所有页面的标题链接
  // title: 'Learn Records',
  description: 'learn Records',
  head: ['link', {
    rel: 'icon',
    href: `/public/Dollar.png`
  }]
}