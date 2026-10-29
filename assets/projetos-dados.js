/* ==========================================================================
   Projetos do carrossel — página Projetos
   --------------------------------------------------------------------------
   Para ADICIONAR um projeto: copie um bloco { ... } e cole na posição desejada.
   Para REMOVER: apague o bloco inteiro.
   Para REORDENAR: mude os blocos de lugar (o primeiro aparece em destaque).

   Campos (os marcados com "opcional" podem ficar como null ou ser apagados):
   - titulo        { pt, en }  nome do projeto
   - categoria     { pt, en }  área de atuação
   - descricao     { pt, en }  frase curta sobre o projeto (opcional)
   - empresa       nome da empresa ou do produto (opcional)
   - ano           ex.: "2026" (opcional)
   - metricas      lista de resultados reais, ex.: [{ pt: "+30% conversão", en: "+30% conversion" }] (opcional)
   - capa          imagem principal, dentro de assets/projetos/
   - largura/altura  tamanho real da imagem de capa, em pixels
   - foco          que parte da imagem priorizar no recorte: "center", "top", "left top"...
   - imagens       imagens adicionais (opcional, reservado para a página do case)
   - link          endereço do case completo
   - cor           cor de fundo atrás da imagem enquanto carrega

   Importante: não invente métricas — use só resultados que você pode comprovar.
   ========================================================================== */
window.PROJETOS = [
  {
    titulo: { pt: "Redesign do site Fourbank", en: "Fourbank website redesign" },
    categoria: { pt: "Web Design · Conceito", en: "Web Design · Concept" },
    descricao: {
      pt: "Proposta de um novo site institucional para a Fourbank, que mostra a plataforma bancária em camadas, do aplicativo ao Banco Central.",
      en: "A proposed new corporate website for Fourbank, showing its banking platform layer by layer, from the app to the Central Bank."
    },
    empresa: "Fourbank",
    ano: "2026",
    metricas: null,
    capa: "fourbank-conceito.webp", largura: 1200, altura: 675, foco: "left top",
    imagens: null,
    link: "https://fourbank.isapolicastro-designer.workers.dev/",
    cor: "#0E3556"
  },
  {
    titulo: { pt: "App Telemedicina", en: "Telemedicine App" },
    categoria: { pt: "Processo de descoberta", en: "Discovery process" },
    descricao: null,
    empresa: null,
    ano: null,
    metricas: null,
    capa: "telemedicina.webp", largura: 900, altura: 1035, foco: "center 40%",
    imagens: null,
    link: "https://www.behance.net/gallery/160826227/TeleMedicine-App",
    cor: "oklch(0.22 0.08 270)"
  },
  {
    titulo: { pt: "Gamificação em Plataforma CRM", en: "CRM Platform Gamification" },
    categoria: { pt: "Product Design", en: "Product Design" },
    descricao: null,
    empresa: null,
    ano: null,
    metricas: null,
    capa: "gamificacao-crm.webp", largura: 900, altura: 1035, foco: "center 35%",
    imagens: null,
    link: "https://www.behance.net/isapolicastro",
    cor: "oklch(0.62 0.22 295)"
  },
  {
    titulo: { pt: "Aplicativo para e-commerce", en: "E-commerce Mobile App" },
    categoria: { pt: "Mobile Design", en: "Mobile Design" },
    descricao: null,
    empresa: null,
    ano: null,
    metricas: null,
    capa: "app-ecommerce.webp", largura: 900, altura: 870, foco: "center 45%",
    imagens: null,
    link: "https://www.behance.net/gallery/161188855/UX-Design-Design-Thinking-Workshop-E-commerce-App",
    cor: "oklch(0.72 0.17 35)"
  },
  {
    titulo: { pt: "Site para Plataforma CRM", en: "CRM Platform Website" },
    categoria: { pt: "Web Design", en: "Web Design" },
    descricao: null,
    empresa: null,
    ano: null,
    metricas: null,
    capa: "site-crm.webp", largura: 900, altura: 870, foco: "center 55%",
    imagens: null,
    link: "https://www.behance.net/isapolicastro",
    cor: "oklch(0.78 0.14 85)"
  }
];
