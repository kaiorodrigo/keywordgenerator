import rodando from "../src/copy.js";
import generatedarray from "../src/generate-array.js";
import openMultiAbas from "../src/open_aba.js";

try {
  if (rodando && generatedarray && openMultiAbas) {
    console.log("Sucesso!");
  }
} catch (error) {
  console.log("Error", error);
}
