import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

export default defineConfig({
  lang: 'en-US',
  title: '屹爱科技',
  description: 'Vite & Vue powered static site generator.',

  lastUpdated: true,
  cleanUrls: true,

  sitemap: {
    hostname: 'https://vitepress.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    }
  },

  head: [
    ['meta', { name: 'theme-color', content: '#3c8772' }],
    [
      'script',
      {
        src: 'https://cdn.usefathom.com/script.js',
        'data-site': 'AZBRSFGG',
        'data-spa': 'auto',
        defer: ''
      }
    ]
  ],

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/reference/': sidebarReference()
    },

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },

    search: {
      provider: 'algolia',
      options: {
        appId: '8J64VVRP8K',
        apiKey: 'a18e2f4cc5665f6602c5631fd868adfd',
        indexName: 'vitepress'
      }
    },

    carbonAds: {
      code: 'CEBDT27Y',
      placement: 'vuejsorg'
    }
  }
})

function nav() {
  return [
    { text: '首页', link: '/', activeMatch: '/' },
    {
      text: '开发指南',
      link: 'http://thinkeditor.com:8181/docs/thinkeditor-manual-v2/enter'
    },
    {
      text: '开发手册',
      link: 'http://thinkeditor.com:8181/docs/thinkeditor-manual-v2/enter'
    },
    //{ text: '设计手册', link: '/reference/site-config', activeMatch: '/reference/' },
    //{ text: '集成手册', link: '/guide/what-is-vitepress', activeMatch: '/guide/' },
    { text: '关于我们', link: '/about', activeMatch: '/' },
    {
      text: '更新日志',
      link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsed: false,
      items: [
        { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
        { text: 'Getting Started', link: '/guide/getting-started' },
        { text: 'Routing', link: '/guide/routing' },
        { text: 'Deploy', link: '/guide/deploy' }
      ]
    },
    {
      text: 'Writing',
      collapsed: false,
      items: [
        { text: 'Markdown Extensions', link: '/guide/markdown' },
        { text: 'Asset Handling', link: '/guide/asset-handling' },
        { text: 'Frontmatter', link: '/guide/frontmatter' },
        { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
        { text: 'Internationalization', link: '/guide/i18n' }
      ]
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Using a Custom Theme', link: '/guide/custom-theme' },
        {
          text: 'Extending the Default Theme',
          link: '/guide/extending-default-theme'
        },
        { text: 'Build-Time Data Loading', link: '/guide/data-loading' },
        { text: 'SSR Compatibility', link: '/guide/ssr-compat' },
        { text: 'Connecting to a CMS', link: '/guide/cms' }
      ]
    },
    {
      text: 'Experimental',
      collapsed: false,
      items: [
        {
          text: 'MPA Mode',
          link: '/guide/mpa-mode'
        },
        {
          text: 'Sitemap Generation',
          link: '/guide/sitemap-generation'
        }
      ]
    },
    // {
    //   text: 'Migrations',
    //   collapsed: false,
    //   items: [
    //     {
    //       text: 'Migration from VuePress',
    //       link: '/guide/migration-from-vuepress'
    //     },
    //     {
    //       text: 'Migration from VitePress 0.x',
    //       link: '/guide/migration-from-vitepress-0'
    //     }
    //   ]
    // },
    {
      text: 'Config & API Reference',
      link: '/reference/site-config'
    }
  ]
}

function sidebarReference() {
  return [
    {
      text: 'Reference',
      items: [
        { text: 'Site Config', link: '/reference/site-config' },
        { text: 'Frontmatter Config', link: '/reference/frontmatter-config' },
        { text: 'Runtime API', link: '/reference/runtime-api' },
        { text: 'CLI', link: '/reference/cli' },
        {
          text: 'Default Theme',
          items: [
            {
              text: 'Overview',
              link: '/reference/default-theme-config'
            },
            {
              text: 'Nav',
              link: '/reference/default-theme-nav'
            },
            {
              text: 'Sidebar',
              link: '/reference/default-theme-sidebar'
            },
            {
              text: 'Home Page',
              link: '/reference/default-theme-home-page'
            },
            {
              text: 'Footer',
              link: '/reference/default-theme-footer'
            },
            {
              text: 'Layout',
              link: '/reference/default-theme-layout'
            },
            {
              text: 'Badge',
              link: '/reference/default-theme-badge'
            },
            {
              text: 'Team Page',
              link: '/reference/default-theme-team-page'
            },
            {
              text: 'Prev / Next Links',
              link: '/reference/default-theme-prev-next-links'
            },
            {
              text: 'Edit Link',
              link: '/reference/default-theme-edit-link'
            },
            {
              text: 'Last Updated Timestamp',
              link: '/reference/default-theme-last-updated'
            },
            {
              text: 'Search',
              link: '/reference/default-theme-search'
            },
            {
              text: 'Carbon Ads',
              link: '/reference/default-theme-carbon-ads'
            }
          ]
        }
      ]
    }
  ]
}
