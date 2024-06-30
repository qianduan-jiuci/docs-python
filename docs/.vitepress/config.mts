import { defineConfig } from 'vitepress'
import nav from '../nav/nav'
import sidebar from '../sidebar'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "九辞",
  description: "",
  themeConfig: {
    search: {
      provider: 'local'
    },
    logo: "/static/logo.jpeg",
    // 隐藏logo右边的标题
    // siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: sidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qianduan-jiuci/docs-python' }
    ]
  }
})
