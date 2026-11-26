import { mkdirSync, writeFileSync } from "node:fs";

// Museum of the Year 3000: the label a museum in the year 3000 puts next
// to a smoke alarm from today. One line, inside the 200-character gate.
const entry = `Smoke alarm, 2024. It shrieked whenever the humans cooked, so the humans thanked it by taking out its batteries.`;

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
