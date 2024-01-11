import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "Wiki",
    icon: "lightbulb",
    prefix: "/wikiPage/",
    children: [
      {
        text: "背景",
        icon: "lightbulb",
        prefix: "01/",
        children: ["blueprint", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "产物",
        icon: "lightbulb",
        prefix: "02/",
        children: ["blueprint", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
  "/bluePrint/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
      },
    ],
  },
]);
