// Generates Prawal_Sharma_Resume_Full.pdf (job-application resume) from src/resume/FullResume.tsx.
// Serves resume.html with Vite, then prints it to A4 PDF with headless Chromium (playwright-core).
// If Chromium is missing, run: npx playwright-core install chromium
import { createServer } from 'vite';
import { chromium } from 'playwright-core';

const OUT = 'Prawal_Sharma_Resume_Full.pdf';

const server = await createServer({ server: { port: 5199, strictPort: false }, logLevel: 'error' });
await server.listen();
const url = `${server.resolvedUrls.local[0]}resume-full.html`;

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: OUT, format: 'A4', preferCSSPageSize: true, printBackground: true });
  console.log(`resume written: ${OUT}`);
} finally {
  await browser.close();
  await server.close();
}
