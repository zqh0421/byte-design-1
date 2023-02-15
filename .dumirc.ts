import { defineConfig } from 'dumi';
import path from 'path'

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'byte-design',
    carrier: 'dumi',
    hd: true,
    rtl: true,
  },
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
  alias: {
  },
});
