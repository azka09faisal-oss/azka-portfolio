// Downloads the Figma assets into public/assets. Run: node scripts/fetch-assets.mjs
// The Figma asset URLs expire ~7 days after they were generated. If a download fails,
// export the asset from Figma manually (SVG for icons/doodles, PNG for the photo).
import { mkdir, writeFile } from "node:fs/promises";

const landing = "https://www.figma.com/api/mcp/asset/a99d5ffa-47b0-4ef1-aabd-dd0fb406da5b";
const projects = "https://www.figma.com/api/mcp/asset/c3a3e489-408a-402c-8213-d5ca8c7fbffc";
const about = "https://www.figma.com/api/mcp/asset/f133cb44-2f2e-40f0-b990-393fcb03f606";

const assets = {
  "star.svg": `${landing}/90f8a.svg`,
  "name.svg": `${landing}/7d002.svg`,
  "moon.svg": `${landing}/7e4b0.svg`,
  "cloud-right.svg": `${landing}/308bb.svg`,
  "heart-blue.svg": `${projects}/b02af.svg`,
  "heart-green.svg": `${projects}/78ef4.svg`,
  "heart-red.svg": `${projects}/03183.svg`,
  "photo.png": `${about}/2c78b.png`,
  "flower.svg": `${about}/2f039.svg`,
};

await mkdir("public/assets", { recursive: true });
for (const [file, url] of Object.entries(assets)) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAILED ${file} (${res.status})`);
    continue;
  }
  await writeFile(`public/assets/${file}`, Buffer.from(await res.arrayBuffer()));
  console.log(`saved public/assets/${file}`);
}
