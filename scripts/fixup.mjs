import { fileURLToPath } from "node:url";
import { join } from "node:path";
import { existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";

const __dirname = fileURLToPath(new URL('.', import.meta.url));

async function main() {
  const cjsPath = join(__dirname, "../dist/cjs/src");
  const esmPath = join(__dirname, "../dist/esm/src");

  if (!existsSync(cjsPath) || !existsSync(esmPath)) {
    console.error("Please run `npm run build` before running this script.");
  }

  const cjsPackage = {
    type: "commonjs"
  };

  const cjsPackageJsonFile = join(cjsPath, "package.json");
  await writeFile(cjsPackageJsonFile, JSON.stringify(cjsPackage, null, 2));

  const esmPackage = {
    type: "module"
  };

  const esmPackageJsonFile = join(esmPath, "package.json");
  await writeFile(esmPackageJsonFile, JSON.stringify(esmPackage, null, 2));
}

main().catch((err) => {
  console.error(`An error occurred: ${err}`);
});
