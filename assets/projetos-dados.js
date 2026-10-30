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
   - formato       { pt, en }  "Cliente", "Projeto autoral", "Conceito"... (opcional)
   - ano           ex.: "2026" (opcional)
   - metricas      lista de resultados reais, ex.: [{ pt: "+30% conversão", en: "+30% conversion" }] (opcional)
   - capa          imagem principal, dentro de assets/projetos/
   - largura/altura  tamanho real da imagem de capa, em pixels
   - foco          que parte da imagem priorizar no recorte: "center", "top", "left top"...
   - imagens       imagens adicionais (opcional, reservado para a página do case)
   - link          endereço do case completo (opcional; sem link o card não tem botão)
   - botao         { pt, en }  texto do botão (opcional; padrão: "Ver projeto")
   - cor           cor de fundo atrás da imagem enquanto carrega

   Importante: não invente métricas — use só resultados que você pode comprovar.
   ========================================================================== */
window.PROJETOS = [
  {
    titulo: { pt: "Lojas Renner · Novo menu", en: "Lojas Renner · New menu" },
    categoria: { pt: "E-commerce · Arquitetura da informação", en: "E-commerce · Information architecture" },
    descricao: { pt: "Um novo menu para o site e o app, para encontrar a compra desejada em até 3 cliques, validado com testes de usabilidade em loja.", en: "A new menu for the website and app to find what you want in up to 3 clicks, validated with in-store usability tests." },
    empresa: "Lojas Renner",
    formato: { pt: "Projeto real", en: "Real project" },
    ano: null,
    metricas: null,
    capa: "renner-capa.webp", largura: 1600, altura: 824, foco: "center",
    imagens: null,
    link: "renner/",
    botao: { pt: "Ver case", en: "View case" },
    cor: "#E2001A"
  },
  {
    titulo: { pt: "Santander +fácil", en: "Santander +fácil" },
    categoria: { pt: "Mercado financeiro · Gamificação", en: "Financial services · Gamification" },
    descricao: { pt: "Plataforma de incentivo para colaboradores, focada na venda de seguros, com metas, treinamentos e quiz.", en: "An employee incentive platform focused on selling insurance, with goals, trainings and quizzes." },
    empresa: "Santander",
    formato: { pt: "Cliente via Digi", en: "Client via Digi" },
    ano: null,
    metricas: null,
    capa: "santander-capa.webp", largura: 1600, altura: 901, foco: "center",
    imagens: null,
    link: "santander/",
    botao: { pt: "Ver case", en: "View case" },
    cor: "#CC0000"
  },
  {
    titulo: { pt: "Casas Bahia · Black Friday e Blog", en: "Casas Bahia · Black Friday and Blog" },
    categoria: { pt: "E-commerce · UX", en: "E-commerce · UX" },
    descricao: { pt: "Página de Black Friday e blog no site e no app, para aumentar tráfego, conversão e venda de produtos core.", en: "Black Friday page and blog on website and app, to increase traffic, conversion and core product sales." },
    empresa: "Casas Bahia",
    formato: { pt: "Projeto real", en: "Real project" },
    ano: null,
    metricas: null,
    capa: "casas-bahia-capa.webp", largura: 1600, altura: 824, foco: "center",
    imagens: null,
    link: "casas-bahia/",
    botao: { pt: "Ver case", en: "View case" },
    cor: "#0B2A6B"
  },
  {
    titulo: { pt: "Instor · Design system e App Jaci", en: "Instor · Design system and Jaci app" },
    categoria: { pt: "Design system · Aplicativo", en: "Design system · App" },
    descricao: { pt: "Design system para plataformas de inspeção industrial e o app que opera o robô Jaci.", en: "A design system for industrial inspection platforms and the app that operates the Jaci robot." },
    empresa: "Instor",
    formato: { pt: "Projeto real", en: "Real project" },
    ano: null,
    metricas: null,
    capa: "instor-capa.webp", largura: 1600, altura: 901, foco: "center",
    imagens: null,
    link: "instor/",
    botao: { pt: "Ver case", en: "View case" },
    cor: "#7FD800"
  },
  {
    titulo: { pt: "Plataforma e Website para Gestão Comercial", en: "Platform and Website for Sales Management" },
    categoria: { pt: "CRM · Product Design · Web Design", en: "CRM · Product Design · Web Design" },
    descricao: { pt: "Com uma abordagem que privilegia a simplicidade sem abrir mão da elegância, desenvolvi um layout limpo, onde as informações são estrategicamente organizadas e a hierarquia visual é clara. Essa composição resultou em uma página que incentiva ações e esclarece dúvidas, proporcionando ao usuário uma experiência imersiva para convertê-lo em cliente.", en: "With an approach that favors simplicity without giving up elegance, I designed a clean layout where information is strategically organized and the visual hierarchy is clear. The result is a page that encourages action and answers questions, giving users an immersive experience that turns them into customers." },
    empresa: "Hafidme",
    formato: { pt: "Cliente", en: "Client" },
    ano: null,
    metricas: null,
    capa: "hafidme-capa.webp", largura: 1200, altura: 675, foco: "center",
    imagens: null,
    link: "hafidme/",
    botao: { pt: "Ver case", en: "View case" },
    cor: "#F1EEE9"
  },
  {
    titulo: { pt: "Omie.AI · Assistente contábil", en: "Omie.AI · Accounting assistant" },
    categoria: { pt: "Produto · Inteligência artificial", en: "Product · Artificial intelligence" },
    descricao: { pt: "Proposta de melhoria com IA para o ERP Omie: preenchimento sugerido, leitura de PDFs, assistente conversacional e alertas.", en: "An AI improvement proposal for the Omie ERP: suggested fields, PDF reading, a conversational assistant and alerts." },
    empresa: "Omie",
    formato: { pt: "Conceito", en: "Concept" },
    ano: null,
    metricas: null,
    capa: "omie-ai-capa.webp", largura: 1600, altura: 901, foco: "center",
    imagens: null,
    link: "omie-ai/",
    botao: { pt: "Ver case", en: "View case" },
    cor: "#DFFF00"
  },
  {
    titulo: { pt: "Redesign do site Fourbank", en: "Fourbank website redesign" },
    categoria: { pt: "Web Design · Conceito", en: "Web Design · Concept" },
    descricao: { pt: "Proposta de um novo site institucional para a Fourbank, que mostra a plataforma bancária em camadas, do aplicativo ao Banco Central.", en: "A proposed new corporate website for Fourbank, showing its banking platform layer by layer, from the app to the Central Bank." },
    empresa: "Fourbank",
    formato: { pt: "Conceito", en: "Concept" },
    ano: "2026",
    metricas: null,
    capa: "fourbank-conceito.webp", largura: 1200, altura: 675, foco: "left top",
    imagens: null,
    link: "https://fourbank.isapolicastro-designer.workers.dev/",
    botao: { pt: "Ver site", en: "View website" },
    cor: "#0E3556"
  }
];
