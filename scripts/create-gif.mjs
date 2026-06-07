import GIFEncoder from "gif-encoder-2";
import { createWriteStream, readFileSync } from "fs";
import PNG from "pngjs";

const FRAMES = [
  "screenshots/slider-dashboard.png",
  "screenshots/slider-review.png",
];
const OUTPUT = "screenshots/slider-demo.gif";
const FRAME_DELAY = 1500; // 1.5s per frame
const LOOP_COUNT = 3; // show each slide 3 times for longer animation

async function getPixels(filepath) {
  const data = readFileSync(filepath);
  const png = PNG.PNG.sync.read(data);
  return { pixels: new Uint8ClampedArray(png.data), width: png.width, height: png.height };
}

async function main() {
  console.log("📸 Reading screenshots...");
  const frames = await Promise.all(FRAMES.map(getPixels));
  const { width, height } = frames[0];

  console.log(`🎞️ Creating GIF (${width}x${height})...`);
  const encoder = new GIFEncoder(width, height);
  encoder.setDelay(FRAME_DELAY);
  encoder.setRepeat(0);
  encoder.start();

  for (let loop = 0; loop < LOOP_COUNT; loop++) {
    for (const frame of frames) {
      encoder.addFrame(frame.pixels);
    }
  }

  encoder.finish();
  const buffer = encoder.out.getData();
  createWriteStream(OUTPUT).write(buffer);

  console.log(`✅ GIF saved: ${OUTPUT} (${(buffer.length / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
