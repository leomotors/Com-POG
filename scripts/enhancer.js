// @ts-check

/// <reference lib="es2021" />

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
    imports += `// @ts-ignore\nimport ${c.name} from "$components/${c.full}";\n`;
    enhance += `app.component("${c.name}", ${c.name});\n`;
  });

  const spoilers = (await fs.readdir("./src/.vitepress/spoilers")).map((f) => ({
    full: f,
    name: f.replace(/\.([a-zA-Z]+)$/, ""),
  }));

  spoilers.forEach((s) => {
    const sname = "S" + s.name.replaceAll("_", "");
    imports += `// @ts-ignore\nimport ${sname} from "$spoilers/${s.full}";\n`;
    enhance += `app.component("${sname}", ${sname});\n`;
  });

  await fs.writeFile(
    "./src/.vitepress/theme/enhancer.g.ts",
    `${imports}\n// @ts-ignore\nexport default { enhanceApp: ({app}) => {${enhance}} }`
  );
}

main();
