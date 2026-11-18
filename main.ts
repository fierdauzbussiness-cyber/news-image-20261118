// news-image-20261118 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a hand-drawn infographic
// summing up the world's news of Wednesday 18 November 2026.
// The program copies it to /output/entry.png. The gate takes a whole
// PNG or JPEG of at most 1 MiB and 1024 by 1024 pixels, and the judge
// sees exactly the bytes copied. The copy is byte-for-byte, so two runs
// always write identical output.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(
  new URL('./entry.png', import.meta.url),
  join(outDir, 'entry.png'),
);
console.log(`wrote ${join(outDir, 'entry.png')}`);
