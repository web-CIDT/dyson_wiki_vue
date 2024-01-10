import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "戴森球计划 MOD WIKI",
      description: "戴森球计划MOD WIKI",
    },
    "/en/": {
      lang: "en-US",
      title: "Dyson Sphere Program MOD WIKI",
      description: "Dyson Sphere Program MOD WIKI",
    },
  },

  head: [],

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
