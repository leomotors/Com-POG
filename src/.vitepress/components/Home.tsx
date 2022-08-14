import { FunctionalComponent as FC } from "vue";

interface HomeProps {
  contributors: Array<{ name?: string; login: string; avatarUrl: string }>;
}

const Home: FC<HomeProps> = ({ contributors }) => {
  return (
    <div>
      <p class="mt-12 text-center text-4xl font-bold">🙏Contributors🙇</p>

      <div class="mx-auto my-6 flex w-fit flex-col items-start gap-4">
        {contributors.map((contributor) => (
          <div class="flex flex-row gap-2">
            <img
              src={contributor.avatarUrl}
              class="rounded-full"
              width="50"
              height="50"
            />

            <div>
              <a
                class="text-lg font-bold transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                href={"https://github.com/" + contributor.login}
                target="_blank"
                rel="noreferrer"
              >
                {contributor.name ?? contributor.login}
              </a>
              <p class="text-gray-700 dark:text-gray-200">
                {contributor.login}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
