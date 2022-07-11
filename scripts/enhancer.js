// @ts-check

/** @type {import("node:fs/promises")} */
const fs = require("node:fs").promises;

// muck commonjs
async function main() {
  const components = (await fs.readdir("./src/.vitepress/components")).map(
    (f) => ({ full: f, name: f.replace(/\.([a-zA-Z]+)$/, "") })
  );

  let imports = "";
  let enhance = "";

  components.forEach((c) => {
    imports += `import ${c.name} from "$components/${c.full}";`;
    enhance += `app.component("${c.name}", ${c.name});`;
  });

  const spoilers = (await fs.readdir("./src/.vitepress/spoilers")).map((f) => ({
    full: f,
    name: f.replace(/\.([a-zA-Z]+)$/, ""),
  }));

  spoilers.forEach((s) => {
    imports += `import S${s.name} from "$spoilers/${s.full}";`;
    enhance += `app.component("S${s.name}", S${s.name});`;
  });

  await fs.writeFile(
    "./src/.vitepress/theme/enhancer.g.ts",
    `${imports} export default { enhanceApp: ({app}) => {${enhance}} }`
  );
}

main();
