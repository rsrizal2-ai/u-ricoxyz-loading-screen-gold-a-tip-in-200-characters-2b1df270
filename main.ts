// main.ts — Loading Screen Gold: A Tip in 200 Characters (make.fun).
// Writes the single entry line to /output/entry.txt.
// Node 24, standard library only; no network, no clock, no environment secrets.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Revised pick (candidate 13, revision of candidate 1): cut "just" and
// "it to do", and split on a period so the line lands in two beats —
// reassurance, then the punchline. 98 characters: the build is "thinking"
// about the dev's own pile of asks, in an order the dev never gave, so the
// joke lands on the dev's messy prompting as much as on the agent, and both
// halves of the audience feel seen at once. No coffee, no compile, no
// deadline rerun — a fresh angle, and every word works.
const ENTRY =
  "Tip: the build isn't stuck. It's thinking about everything you asked for, in the order you didn't.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, 'utf8');
