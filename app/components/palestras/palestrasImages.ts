/**
 * Vitrine de palestras: imagens em public/images/Palestras/
 * Arquivos: palestra (1).jpeg até palestra (38).jpeg
 */
export const PALESTRAS_IMAGES: string[] = Array.from(
  { length: 38 },
  (_, i) => `/images/Palestras/palestra (${i + 1}).jpeg`
);
