import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Soon Mock",
  description: "Soon Mock Docs",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
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
    }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
