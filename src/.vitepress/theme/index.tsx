import { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "./styles.css";
import "katex/dist/katex.min.css";

import Home from "$components/Home";

import Enhancer from "./enhancer.g";

const config: Theme = {
  ...DefaultTheme,
  ...Enhancer,
  Layout() {
    return (
      // @ts-expect-error type conflict mumbo jumbo but it works
      <DefaultTheme.Layout>
        {{
          "home-features-after": () => (
            <Home
              contributors={["contributor1", "contributor2", "contributor3"]}
            />
          ),
        }}
      </DefaultTheme.Layout>
    );
  },
  NotFound() {
    return (
      <div class="flex flex-col items-center text-center">
        <p class="text-3xl font-bold sm:text-5xl">404 NOT FOUND</p>
        <p class="text-2xl font-bold sm:text-3xl">ไม่พบหน้านี้</p>

        <p>ไม่พบโจทย์ที่ต้องการใช่มั้ย ไม่ลองมาเขียนเฉลยเองดูบ้างล่ะ</p>
        <a href="/contributing">View Contributing Guide</a>
      </div>
    );
  },
};

export default config;
