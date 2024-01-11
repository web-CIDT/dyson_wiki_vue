import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "Wiki",
      icon: "book",
      prefix: "wikiPage/",
      link: "wikiPage/",
      children: "structure",
    },
    {
      text: "BluePrint",
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
