// Next 16 static export writes segment prefetch payloads as `<route>/__next.<seg>/__PAGE__.txt`,
// but the client requests `<route>/__next.<seg>.__PAGE__.txt`. Copy each payload to the requested
// name so static hosts (Apache on Hostinger) serve it instead of a 404.
import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve("out");
if (!fs.existsSync(outDir)) process.exit(0);

let copied = 0;
const walk = (dir) => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (!entry.isDirectory()) continue;
    const page = path.join(full, "__PAGE__.txt");
    if (entry.name.startsWith("__next.") && fs.existsSync(page)) {
      fs.copyFileSync(page, path.join(dir, `${entry.name}.__PAGE__.txt`));
      copied++;
    }
    walk(full);
  }
};
walk(outDir);
console.log(`fix-export-prefetch: ${copied} prefetch payload(s) aliased`);
