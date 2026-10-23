// Generates the resume PDF from src/resume/FullResume.tsx (rendered by resume-full.html).
// Writes the site download (public/assets/Prawal_Sharma_Resume.pdf) and a copy at the project root.
// The prawal-personal-brand site serves the same file — copy it to that project's public/ folder after regenerating.
// If Chromium is missing, run: npx playwright-core install chromium
import { copyFileSync } from 'node:fs';
import { createServer } from 'vite';
import { chromium } from 'playwright-core';

const OUT = 'public/assets/Prawal_Sharma_Resume.pdf';
const COPY = 'Prawal_Sharma_Resume_Full.pdf';

const server = await createServer({ server: { port: 5199, strictPort: false }, logLevel: 'error' });
await server.listen();
const url = `${server.resolvedUrls.local[0]}resume-full.html`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: OUT, format: 'A4', preferCSSPageSize: true, printBackground: true });
  copyFileSync(OUT, COPY);
  console.log(`resume written: ${OUT} (copy: ${COPY})`);
} finally {
  await browser.close();
  await server.close();
}
