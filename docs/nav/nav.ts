import { DefaultTheme } from 'vitepress'
export default function () {
  return [
    { text: 'Home', link: '/' },
    { text: '基础语法', link: '/syntax/' },
    { text: "started", link: "/started" },
  ] as DefaultTheme.NavItem[]
}
