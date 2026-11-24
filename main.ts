// thinking_revised (final)
// hello, diary: one letter carries the whole day's truth.
// Q = questionable life choices, less obvious than A, F or Z.
// batch: a single-character batch is all the output needs.
// orders: the sender wrote it free of borrowed orders.
// slot: exactly one byte, exactly one slot, no trailing newline.

import { mkdir, stat, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ownDir = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const letter = 'Q';
const outPath = resolve(ownDir, outputDir);

await mkdir(outPath, { recursive: true });
const target = join(outPath, 'entry.txt');
await writeFile(target, letter, { encoding: 'utf8' });

const { size } = await stat(target);
console.log(`entry.txt: ${size} byte`);
