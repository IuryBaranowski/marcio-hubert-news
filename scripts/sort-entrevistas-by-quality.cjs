/**
 * Ordena imagens em public/images/Entrevistas por qualidade (resolução: largura x altura).
 * Melhor qualidade primeiro. Renomeia para entrevista (1).jpeg, entrevista (2).jpeg, ...
 * Execute: node scripts/sort-entrevistas-by-quality.cjs
 */

const path = require("path");
const fs = require("fs");

const DIR = path.join(__dirname, "..", "public", "images", "Entrevistas");

// Usar image-size se disponível; senão ordenar por tamanho de arquivo como fallback
function getDimensions(filePath) {
  try {
    const size = require("image-size")(filePath);
    return { width: size.width || 0, height: size.height || 0 };
  } catch (_) {
    return { width: 0, height: 0 };
  }
}

function main() {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith(".jpeg") || f.endsWith(".jpg"));
  if (files.length === 0) {
    console.log("Nenhum arquivo .jpeg/.jpg encontrado em", DIR);
    return;
  }

  const withQuality = files.map((name) => {
    const fullPath = path.join(DIR, name);
    const stat = fs.statSync(fullPath);
    const dim = getDimensions(fullPath);
    const pixels = dim.width * dim.height;
    return {
      name,
      fullPath,
      width: dim.width,
      height: dim.height,
      pixels: pixels || stat.size,
      size: stat.size,
    };
  });

  withQuality.sort((a, b) => b.pixels - a.pixels);

  console.log("Ordenação por qualidade (melhor primeiro):");
  withQuality.slice(0, 5).forEach((f, i) => console.log(`  ${i + 1}. ${f.name} ${f.width}x${f.height} = ${f.pixels} px`));
  console.log("  ...");
  console.log(`Total: ${withQuality.length} imagens\n`);

  // Passo 1: renomear para nomes temporários
  const tempNames = [];
  withQuality.forEach((f, i) => {
    const tempName = `__temp_${String(i + 1).padStart(4, "0")}.jpeg`;
    const tempPath = path.join(DIR, tempName);
    fs.renameSync(f.fullPath, tempPath);
    tempNames.push(tempName);
  });

  // Passo 2: renomear de temp para nome final
  tempNames.forEach((tempName, i) => {
    const finalName = `entrevista (${i + 1}).jpeg`;
    const tempPath = path.join(DIR, tempName);
    const finalPath = path.join(DIR, finalName);
    fs.renameSync(tempPath, finalPath);
  });

  console.log("Pronto. Arquivos renomeados para entrevista (1).jpeg até entrevista (" + withQuality.length + ").jpeg");
}

main();
