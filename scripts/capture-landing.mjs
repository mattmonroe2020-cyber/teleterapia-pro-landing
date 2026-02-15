import { spawn } from 'node:child_process';
import { mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const PORT = 4173;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const OUTPUT_DIR = path.resolve('artifacts/screenshots');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // ignore connection errors while booting server
    }
    await sleep(500);
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function startDevServer() {
  const child = spawn('pnpm', ['exec', 'vite', '--host', '--port', String(PORT)], {
    stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, FORCE_COLOR: '0' },
  });

  child.stdout.on('data', (chunk) => {
    process.stdout.write(`[dev] ${chunk}`);
  });

  child.stderr.on('data', (chunk) => {
    process.stderr.write(`[dev] ${chunk}`);
  });

  return child;
}

async function ensurePlaywrightInstalled() {
  try {
    await access(path.resolve('node_modules/playwright'));
  } catch {
    throw new Error('playwright is not installed. Run: pnpm add -D playwright');
  }
}

async function captureScreenshots() {
  await ensurePlaywrightInstalled();
  const { chromium } = await import('playwright');

  await mkdir(OUTPUT_DIR, { recursive: true });

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1536, height: 1024 } });

  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'landing-full-page.png'),
    fullPage: true,
  });

  await page.screenshot({
    path: path.join(OUTPUT_DIR, '01-hero.png'),
  });

  await page.evaluate(() => window.scrollTo({ top: 1150, behavior: 'instant' }));
  await page.waitForTimeout(350);
  await page.screenshot({
    path: path.join(OUTPUT_DIR, '02-value-sections.png'),
  });

  await page.evaluate(() => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
  await page.waitForTimeout(350);
  await page.screenshot({
    path: path.join(OUTPUT_DIR, '03-pricing.png'),
  });

  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' }));
  await page.waitForTimeout(350);
  await page.screenshot({
    path: path.join(OUTPUT_DIR, '04-faq-footer.png'),
  });

  await browser.close();
}

async function main() {
  const devServer = startDevServer();

  try {
    await waitForServer(BASE_URL);
    await captureScreenshots();
    console.log(`\n✅ Screenshots exported to: ${OUTPUT_DIR}`);
  } finally {
    devServer.kill('SIGINT');
    await sleep(500);
    if (!devServer.killed) {
      devServer.kill('SIGKILL');
    }
  }
}

main().catch((error) => {
  console.error(`\n❌ Screenshot export failed: ${error.message}`);
  process.exit(1);
});
