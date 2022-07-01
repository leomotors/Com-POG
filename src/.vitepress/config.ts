import { defineConfig } from "vitepress";
import katexConfig from "./katex";

export default defineConfig({
  ...katexConfig,
  title: "COM POG",
  description: "เฉลยให้พวกชาติหมา",
  lastUpdated: true,

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Thai",
      },
    ],
  ],

  themeConfig: {
    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright © 2022 Nutthapat Pongtanyavichai and Collaborators",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Leomotors/cocoa-discord-utils",
      },
    ],
    editLink: {
      pattern:
        "https://github.com/Leomotors/cocoa-discord-utils/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    sidebar: [
      {
        collapsible: true,
        text: "Introduction",
        items: [{ text: "Intro", link: "/introduction/" }],
      },
      {
        collapsible: true,
        text: "Learn",
        items: [
          {
            text: "Overview",
            link: "/introduction/overview",
          },
          {
            text: "Python ๖๙๖๙",
            link: "/introduction/overview",
          },
        ],
      },
      {
        collapsible: true,
        text: "Solutions",
        items: [
          {
            text: "Overview",
            link: "/introduction/overview",
          },
          {
            text: "0001",
            link: "/solutions/0001",
          },
        ],
      },
    ],
  },

  outDir: "../docs-dist",
});
