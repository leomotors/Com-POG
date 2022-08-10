import { defineConfig } from "vitepress";
import katexConfig from "./katex";

import { solutions } from "./solutions";

export default defineConfig({
  ...katexConfig,

  title: "COM POG (RFC Preview)",
  titleTemplate: "COM POG",
  description: "เว็บไซต์รวมเฉลยโจทย์ในเกรดเดอร์วิชา COM PROG วิศวะจุฬา",
  lastUpdated: true,
  outDir: "../dist",

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
      pattern: "https://github.com/Leomotors/Com-POG/edit/main/src/:path",
      text: "Suggest or contribute changes to this page",
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
            link: "/learn/",
          },
        ],
      },
      {
        collapsible: true,
        text: "Solutions",
        items: solutions,
      },
    ],
  },
});
