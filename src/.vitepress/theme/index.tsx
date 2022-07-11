import DefaultTheme from "vitepress/theme";

import "./styles.css";
import "katex/dist/katex.min.css";

import Enhancer from "./enhancer.g";

export default {
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
