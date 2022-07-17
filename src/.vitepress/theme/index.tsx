import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "./styles.css";
import "katex/dist/katex.min.css";

import Home from "$components/Home.vue";

import Enhancer from "./enhancer.g";

const config: Theme = {
  ...DefaultTheme,
  ...Enhancer,
  Layout() {
    return (
      <DefaultTheme.Layout>
        {{
          "home-features-after": () => <Home />,
        }}
      </DefaultTheme.Layout>
    );
  },
};

export default config;
