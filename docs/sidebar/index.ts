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
            text: "控制流程",
            link: "/syntax/control"
        },
        {
            text: "循环",
            link: "/syntax/loop",
        },
        {
            text: "函数",
            link: "/syntax/function",
        },
        {
            text: "字典",
            link: "/syntax/dict",
        },
        {
            text: "集合",
            link: "/syntax/map"
        }
    ]
} as DefaultTheme.Sidebar)