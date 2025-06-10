import { compile } from "svelte/compiler";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const themePath = path.resolve(__dirname, "../src/lib/Theme/Theme.svelte");
const outputPath = path.resolve(__dirname, "..", "dist/style", "theme.css");

async function main() {
  const themeSource = await readFile(themePath, "utf-8");
  const { css } = compile(themeSource, {
    cssHash: () => "tmpglobal"
  });
  const globalCss = css.code.replaceAll(".tmpglobal", "");
  return writeFile(outputPath, globalCss);
}

main();
