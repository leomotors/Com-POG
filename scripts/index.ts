import type { Endpoints } from "@octokit/types";

import fs from "node:fs/promises";
import { fetch } from "undici";

const headers = {
  Authorization: `token ${process.env.GH_PAT}`,
};

async function main() {
  if (!process.env.GH_PAT) {
    console.log("No GitHub Token Found, generating mock files for DEV only");

    await fs.writeFile(
      "src/.vitepress/theme/contributor.g.json",
      '[{"name":"Nutthapat Pongtanyavichai","login":"Leomotors","avatarUrl":"https://avatars.githubusercontent.com/u/59821765?v=4"},{"name":"Poonpipob \\"Leon\\" Kunlayanathee","login":"shalluv","avatarUrl":"https://avatars.githubusercontent.com/u/42491719?v=4"}]'
    );

    process.exit(0);
  }

  const contributors = (await fetch(
    "https://api.github.com/repos/Leomotors/Com-POG/contributors",
    { headers }
  ).then((r) =>
    r.json()
  )) as Endpoints["GET /repos/{owner}/{repo}/contributors"]["response"]["data"];

  await Promise.all(
    contributors.map(async (contributor) => {
      const full_user = (await fetch(
        `https://api.github.com/users/${contributor.login}`,
        { headers }
      ).then((r) => r.json())) as Endpoints["GET /user"]["response"]["data"];

      contributor.name = full_user.name ?? undefined;
    })
  );

  await fs.writeFile(
    "src/.vitepress/theme/contributor.g.json",
    JSON.stringify(
      contributors.map((contributor) => ({
        name: contributor.name,
        login: contributor.login,
        avatarUrl: contributor.avatar_url,
      }))
    )
  );
}

main();
