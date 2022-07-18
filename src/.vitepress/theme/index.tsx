import { Theme, useRouter } from "vitepress";
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
  NotFound() {
    const router = useRouter();
    router.go("/404");

    return (
      <div class="flex flex-col items-center text-center">
        <p class="text-3xl sm:text-5xl font-bold">404 NOT FOUND</p>
        <p class="text-2xl sm:text-3xl font-bold">ไม่พบหน้านี้</p>

        <p>ไม่พบโจทย์ที่ต้องการใช่มั้ย ไม่ลองมาเขียนเฉลยเองดูบ้างล่ะ</p>
        <a href="/contributing">
          <button>View Contributing Guide</button>
        </a>
      </div>
    );
  },
};

export default config;
