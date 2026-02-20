/**
 * Vitrine de entrevistas: imagens em public/images/Entrevistas/
 * Arquivos: entrevista (1).jpeg até entrevista (15).jpeg
 */
export const ENTREVISTAS_IMAGES: string[] = Array.from(
  { length: 19 },
  (_, i) => `/images/Entrevistas/entrevista (${i + 1}).jpeg`
);
