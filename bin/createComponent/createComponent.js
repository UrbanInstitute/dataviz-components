#!/usr/bin/env node
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { createStory } from "./createStory.js";
import { createDocs } from "./createDocs.js";

async function main() {
  await inquirer
    .prompt([
      {
        type: "input",
        name: "componentName",
        message: "What is the name of your component? (ie: MyComponent)",
        validate: (componentName) => {
          if (componentName) {
            return true;
          } else {
            console.log("Please enter a component name");
            return false;
          }
        }
      }
      // TODO: subdir of src/lib
      // TODO: ask about .docs.mdx
      // TODO: check PascalCase
    ])
    .then((answers) => {
      const { componentName } = answers;
      const dir = path.join(process.cwd(), "src", "lib", componentName);
      // if directory doesn't exist, create it
      if (!fs.existsSync(dir)) {
        // create directory
        fs.mkdirSync(dir, { recursive: true });

        // create Component.svelte (blank)
        const svelteFilePath = path.join(dir, `${componentName}.svelte`);
        fs.writeFileSync(svelteFilePath, "", "utf8");

        // create Component.docs.md
        const docsFilePath = path.join(dir, `${componentName}.docs.md`);
        fs.writeFileSync(docsFilePath, createDocs(componentName), "utf8");

        // create Component.stories.svelte
        const storyFilePath = path.join(dir, `${componentName}.stories.svelte`);
        fs.writeFileSync(storyFilePath, createStory(componentName), "utf8");
      } else {
        console.error("Directory already exists");
      }
    });
}

main().catch(() => {
  console.error();
  // process.exit();
});
