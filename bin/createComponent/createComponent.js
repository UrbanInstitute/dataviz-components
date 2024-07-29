#!/usr/bin/env node
import { input } from "@inquirer/prompts";
import fs from "fs";
import path from "path";
import process from "process";
import { createStory } from "./createStory.js";
import { createDocs } from "./createDocs.js";

// check if PascalCase https://www.w3resource.com/javascript-exercises/javascript-string-exercise-56.php
function isPascalCase(str) {
  return /^[A-Z][A-Za-z]*$/.test(str);
}

// check if name is valid
function validateName(componentName) {
  if (!componentName) {
    return "Please enter a component name";
  } else if (!isPascalCase(componentName)) {
    return "Component name must be in PascalCase";
  } else {
    return true;
  }
}

function createFiles(componentName) {
  // validate file name
  const validated = validateName(componentName);
  if (validated !== true) {
    return console.error(validated);
  }

  // declare dir
  const dir = path.join(process.cwd(), "src", "lib", componentName);

  // if directory exists show error, else create files
  if (fs.existsSync(dir)) {
    console.error("Directory already exists");
  } else {
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

    // Confirmation text
    console.log(`Boilerplate files created in ${dir}`);
  }
}

async function main() {
  // if there's an argument in the command, use it (but no more)
  if (process.argv[2] && !process.argv[3]) {
    createFiles(process.argv[2]);
  } else {
    // show input
    await input({
      message: "What is the name of your component? (ie: MyComponent)",
      validate: validateName
    }).then(createFiles);
  }
}

main().catch(console.error);
