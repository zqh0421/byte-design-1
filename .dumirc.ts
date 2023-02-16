import { defineConfig } from 'dumi';
import path from 'path'

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: '',
    carrier: 'dumi',
    hd: true,
    rtl: true,
    nav: {
      'zh-CN': [{
        title: '引导',
        link: '/zh-CN/guide',
      }, {
        title: '组件',
        link: '/zh-CN/components/overview',
      }],
      'en-US': [{
        title: 'Guide',
        link: '/guide',
      }, {
        title: 'Components',
        link: '/components/overview',
      }]
    },
  },
  locales: [
    { id: 'en-US', name: 'English'},
    { id: 'zh-CN', name: '中文' },
  ],
  alias: {
  },
});
