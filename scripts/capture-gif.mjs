import puppeteer from "puppeteer";
import GIFEncoder from "gif-encoder-2";
import { createWriteStream } from "fs";
import { createCanvas, loadImage } from "canvas";

const URL = "http://localhost:5173";
const OUTPUT = "screenshots/slider-demo.gif";
const FRAME_DELAY = 1000; // 1s per frame
const NUM_SLIDES = 4;

async function captureFrames() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  await page.goto(URL, { waitUntil: "networkidle0" });

  // Wait a moment for initial animations
  await new Promise((r) => setTimeout(r, 1500));

  const frames = [];

  for (let i = 0; i < NUM_SLIDES; i++) {
    // Wait for the slide transition animation
    await new Promise((r) => setTimeout(r, 1200));
    const screenshot = await page.screenshot({ type: "png" });
    frames.push(screenshot);

    if (i < NUM_SLIDES - 1) {
      // Click next button
      const nextBtn = await page.$("button.next");
      if (nextBtn) await nextBtn.click();
    }
  }

  await browser.close();
  return frames;
}

async function createGif(frames) {
  // Use first frame to determine dimensions
  const firstImg = await loadImage(frames[0]);
  const width = firstImg.width;
  const height = firstImg.height;

  const encoder = new GIFEncoder(width, height);
  encoder.setDelay(FRAME_DELAY);
  encoder.setRepeat(0); // loop forever
  encoder.start();

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  for (const frame of frames) {
    const img = await loadImage(frame);
    ctx.drawImage(img, 0, 0);
    encoder.addFrame(ctx);
  }

  encoder.finish();

  const buffer = encoder.out.getData();
  const writeStream = createWriteStream(OUTPUT);
  writeStream.write(buffer);
  writeStream.close();

  console.log(`✅ GIF saved to ${OUTPUT} (${buffer.length} bytes)`);
}

async function main() {
  console.log("📸 Capturing frames...");
  const frames = await captureFrames();
  console.log(`✅ ${frames.length} frames captured`);

  console.log("🎞️ Creating GIF...");
  await createGif(frames);
}

main().catch(console.error);
