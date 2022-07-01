import DefaultTheme from "vitepress/theme";

import Home from "$components/Home.vue";
import Spoiler from "$components/Spoiler.vue";

import S0001 from "$spoilers/0001.md";

import "./styles.css";
import "katex/dist/katex.min.css";

export default {
  ...DefaultTheme,
  Layout() {
    return (
      <DefaultTheme.Layout>
        {{
          "home-features-after": () => <Home />,
        }}
      </DefaultTheme.Layout>
    );
  },
  enhanceApp: ({ app }) => {
    app.component("Spoiler", Spoiler);
    app.component("S0001", S0001);
  },
};
