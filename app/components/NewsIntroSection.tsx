"use client";

export default function NewsIntroSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#0A1628] mb-6">
            O que você encontra nesta página
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            Esta é a central de notícias do Marcio Hubert News, onde você encontra
            cobertura atualizada dos principais acontecimentos que impactam o Brasil
            e suas relações estratégicas. Diferente de portais convencionais, cada
            publicação aqui vai além do fato isolado.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Nosso compromisso é oferecer <strong>análise aprofundada</strong>,{" "}
            <strong>contexto histórico</strong> e <strong>perspectivas fundamentadas</strong>{" "}
            que ajudam profissionais, empresários e tomadores de decisão a
            compreenderem não apenas o que aconteceu, mas <strong>por que aconteceu</strong>{" "}
            e <strong>o que isso significa para o futuro</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
