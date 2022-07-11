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
        link: "https://github.com/Leomotors/Com-POG",
      },
    ],
    editLink: {
      pattern: "https://github.com/Leomotors/Com-POG/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    sidebar: [
      {
        collapsible: true,
        text: "Introduction",
        items: [
          {
            text: "Intro",
            link: "/introduction/",
          },
          {
            text: "Contribution Guide",
            link: "/contributing",
          },
        ],
      },
      {
        collapsible: true,
        text: "Learn",
        items: [
          {
            text: "Overview",
            link: "/introduction/",
          },
          {
            text: "Python ๖๙๖๙",
            link: "/introduction/",
          },
        ],
      },
      {
        collapsible: true,
        text: "Solutions",
        items: [
          {
            text: "Overview",
            link: "/introduction/",
          },
          {
            text: "0001",
            link: "/solutions/0001",
          },
          {
            text: "0002",
            link: "/solutions/0002",
          },
        ],
      },
    ],
  },

  outDir: "../dist",
});
