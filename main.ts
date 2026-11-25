// Invent a Word We Need — entry program.
// Coins one new English word and writes it, with its one-line definition,
// to /output/entry.txt for the judge to read.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "corridance — the mirrored shuffle two strangers do in a hallway, each stepping the same way to let the other pass.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);
