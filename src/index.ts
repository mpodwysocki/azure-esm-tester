// Which sample to run
import { main as openAiMain } from "./index.openai.js";
import { main as keyvaultMain } from "./index.keyvault.js";

async function main() {
  try {
    await openAiMain();
    await keyvaultMain();
  } catch (err) {
    console.error("The sample encountered an error:", err);
  }
}

main();
