import { DefaultTheme } from "vitepress";

export default () => ({
    "/syntax/": [
        {
            link: "/syntax/index"
        },
        {
            text: "输入输出",
            link: "/syntax/input-output"
        },
        {
            text: "数据类型",
            link: "/syntax/data-type"
        }, {
            text: "注释",
            link: "/syntax/notes"
        },
        {
            text: "运算符",
            link: "/syntax/operators"
        },
        {
            text: "程序控制流程",
            link: "/syntax/control"
        },
        {
            text: "迭代器和生成器",
            link: "/syntax/iter&gener"
        }
    ]
} as DefaultTheme.Sidebar)