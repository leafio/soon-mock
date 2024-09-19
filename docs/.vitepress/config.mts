import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/soon-mock/',
  title: "Soon Mock",
  description: "Soon Mock Docs",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
       themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          // { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [{
          text: 'Start',
          link: '/start'
        },
        {
          text: 'Features',
          items: [
            { text: 'Quick', link: '/quick' },
            { text: 'Schema', link: '/schema' },
            { text: 'Data', link: '/data' },
            { text: 'API', link: '/api' },
            { text: 'Settings', link: '/settings' },
          ]
        }, {
          text: 'Example',
          link: '/example'
        }
        ],


        // socialLinks: [
        //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ]
      },
    },
    zh: {
      label: '中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/' ,// 默认 / -- 显示在导航栏翻译菜单上，可以是外部的,
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '主页', link: '/zh/' },
          // { text: 'Examples', link: '/markdown-examples' }
        ],
    
        sidebar: [{
          text: '开始',
          link: '/zh/start'
        },
        {
          text: '功能',
          items: [
            { text: '快捷操作 Quick', link: '/zh/quick' },
            { text: '模型 Schema', link: '/zh/schema' },
            { text: '数据 Data', link: '/zh/data' },
            { text: '接口 API', link: '/zh/api' },
            { text: '设置 Settings', link: '/zh/settings' },
          ]
        },{
          text:'示例',
          link:'/zh/example'
        }
        ],
    
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
        outline: {
          label: '页面导航'
        },
    
        // socialLinks: [
        //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ]
      },

      // 其余 locale 特定属性...
    }
  }
})
