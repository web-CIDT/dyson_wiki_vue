import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "教程合集",
      icon: "list",
      prefix: "wikiPage/",
      link: "wikiPage/",
      children: "structure",
    },
    {
      text: "编写指南",
      icon: "laptop-code",
      prefix: "writeGuide/",
      link: "writeGuide/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
