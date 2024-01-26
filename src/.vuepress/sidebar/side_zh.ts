import { sidebar } from "vuepress-theme-hope";

export const zhSidebar =  sidebar({
  "/": [
    "",
    {
      text: "Wiki",
      icon: "book",
      prefix: "wikiPage/",
      link: "wikiPage/",
      children: "structure",
    },
    {
      text: "蓝图",
      icon: "laptop-code",
      prefix: "bluePrint/",
      link: "bluePrint/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
  ],
});
