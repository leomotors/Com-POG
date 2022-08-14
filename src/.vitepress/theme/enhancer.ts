import type { Theme } from "vitepress";

import Home from "$components/Home";
import Modal from "$components/Modal";
import Spoiler from "$components/Spoiler";

export const enhancer: Theme["enhanceApp"] = ({ app }) => {
  app.component("Home", Home);
  app.component("Modal", Modal);
  app.component("Spoiler", Spoiler);
};
