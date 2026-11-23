// Six Words, One Story — the program writes one six-word story to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const story = "Home again; the house forgot him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
console.log(story);
