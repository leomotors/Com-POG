import { FunctionalComponent as FC } from "vue";

import { VPTeamMembers } from "vitepress/theme";

interface HomeProps {
  contributors: Array<{ name?: string; login: string }>;
}

const Home: FC<HomeProps> = ({ contributors }) => {
  return (
    <div class="px-4">
      <p class="mt-12 mb-8 text-center text-4xl font-bold sm:text-5xl">
        🙏Contributors🙇
      </p>

      <VPTeamMembers
        size="small"
        members={contributors.map((contributor) => ({
          avatar: `https://github.com/${contributor.login}.png`,
          name: contributor.name ?? contributor.login,
          title: contributor.login,
          links: [
            {
              icon: "github",
              url: `https://github.com/${contributor.login}`,
            },
          ],
        }))}
      />
    </div>
  );
};

export default Home;
