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
   - detalhe       { pt, en } com ficha, desafio, processo e entregas, mostrados no painel abaixo do carrossel

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
    detalhe: {"pt": {"ficha": [["Tipo", "Menu de e-commerce, site e app"], ["Segmento", "Varejo de moda"], ["Meu papel", "Pesquisa, arquitetura e interface"], ["Formato", "Projeto real"]], "desafio": {"titulo": "Dificuldade para localizar produtos.", "textos": ["O menu antigo dificultava encontrar as peças. O objetivo era aumentar os acessos e a conversão.", "A solução foi otimizar o caminho até o produto: encontrar a compra desejada em até 3 cliques."], "rotulo": "O problema"}, "processo": {"titulo": "Do departamento à loja", "etapas": [["Fase 0", "Entrevistas com usuários de cada departamento e workshop para desenhar o menu com as áreas-chave."], ["Fase 1", "Teste de usabilidade não moderado com público interno."], ["Fase 2", "Teste de usabilidade com 10 usuários em loja."], ["Fase 3", "Teste de usabilidade em modo guerrilha com 40 usuários em loja."]], "rotulo": "Processo de descoberta"}, "entregas": ["Entrevistas", "Workshop", "Taxonomia", "Arquitetura da informação", "Testes de usabilidade", "Menu do site", "Menu do app"]}, "en": {"ficha": [["Type", "E-commerce menu, website and app"], ["Industry", "Fashion retail"], ["My role", "Research, architecture and interface"], ["Format", "Real project"]], "desafio": {"titulo": "People struggled to find products.", "textos": ["The old menu made it hard to find items. The goal was to increase visits and conversion.", "The solution was to shorten the path to the product: find what you want in up to 3 clicks."], "rotulo": "The problem"}, "processo": {"titulo": "From each department to the store floor", "etapas": [["Phase 0", "Interviews with users from each department and a workshop to design the menu with key areas."], ["Phase 1", "Unmoderated usability test with internal users."], ["Phase 2", "Usability test with 10 users in store."], ["Phase 3", "Guerrilla usability test with 40 users in store."]], "rotulo": "Discovery process"}, "entregas": ["Interviews", "Workshop", "Taxonomy", "Information architecture", "Usability tests", "Website menu", "App menu"]}},
    link: "renner/",
    botao: { pt: "Ver case", en: "View case" },
    cor: "#E2001A"
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
    detalhe: {"pt": {"ficha": [["Tipo", "Página de campanha e blog"], ["Segmento", "Varejo e e-commerce"], ["Meu papel", "Pesquisa, UX e interface"], ["Formato", "Projeto real"]], "desafio": {"titulo": "Mais tráfego, mais conversão.", "textos": ["Na Black Friday, o desafio era aumentar o tráfego e a conversão e impulsionar a venda de produtos core.", "No blog, o objetivo era gerar mais tráfego orgânico."], "rotulo": "Objetivo"}, "processo": {"titulo": "Da pesquisa à validação técnica", "etapas": [["Discovery", "Pesquisa, benchmark e definição do problema e do objetivo."], ["Design", "O problema foi identificado com base nos achados da pesquisa. Boas práticas, exploração e protótipo final."], ["Develop", "Sessão de design critique com o time de design."], ["Deliver", "Validação final com o time técnico."]], "rotulo": "Processo"}, "entregas": ["Pesquisa", "Benchmark", "Página de Black Friday", "Blog", "Site e app", "Design critique", "Validação técnica"]}, "en": {"ficha": [["Type", "Campaign page and blog"], ["Industry", "Retail and e-commerce"], ["My role", "Research, UX and interface"], ["Format", "Real project"]], "desafio": {"titulo": "More traffic, more conversion.", "textos": ["For Black Friday, the challenge was to increase traffic and conversion and boost sales of core products.", "For the blog, the goal was to generate more organic traffic."], "rotulo": "Goal"}, "processo": {"titulo": "From research to technical validation", "etapas": [["Discovery", "Research, benchmark and defining the problem and goal."], ["Design", "The problem came from the research findings. Best practices, exploration and final prototype."], ["Develop", "Design critique session with the design team."], ["Deliver", "Final validation with the tech team."]], "rotulo": "Process"}, "entregas": ["Research", "Benchmark", "Black Friday page", "Blog", "Website and app", "Design critique", "Technical validation"]}},
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
    detalhe: {"pt": {"ficha": [["Tipo", "Design system e aplicativos"], ["Segmento", "Inspeção industrial e robótica"], ["Meu papel", "Product designer"], ["Formato", "Projeto real"]], "desafio": {"titulo": "Uma abordagem estratégica para um design escalável.", "textos": ["Tratei o design system como um problema de design: descobrir, definir, desenhar e entregar. Com um time pequeno, todos os criadores também eram consumidores do sistema.", "A base veio do design atômico: estilos de texto, variáveis de cor, componentes simples e complexos. As cores são semânticas, com tabela de acessibilidade AA e AAA, e os tokens se dividem em primitivos, semânticos e de componente."], "rotulo": "Abordagem"}, "processo": {"titulo": "Um processo, não um entregável", "etapas": [["Identificar", "Padrões, diretrizes e documentação."], ["Reduzir e definir", "Tokens e componentes, com nomenclatura componente / variante / tamanho / estado / modificador."], ["Compartilhar", "Handoff com grids, breakpoints, comentários numerados e legenda de status para os devs."], ["Manter", "Planejar, construir, entregar, adotar e manter."]], "rotulo": "Processo"}, "entregas": ["Design system", "Tokens", "Componentes", "Documentação", "Handoff", "Plataformas de inspeção", "App Jaci"]}, "en": {"ficha": [["Type", "Design system and apps"], ["Industry", "Industrial inspection and robotics"], ["My role", "Product designer"], ["Format", "Real project"]], "desafio": {"titulo": "A strategic approach to scalable design.", "textos": ["I treated the design system as a design problem: discover, define, design and deliver. With a small team, every creator was also a consumer of the system.", "The foundation came from atomic design: text styles, color variables, simple and complex components. Colors are semantic, with an AA and AAA accessibility table, and tokens are split into primitive, semantic and component tokens."], "rotulo": "Approach"}, "processo": {"titulo": "A process, not a deliverable", "etapas": [["Identify", "Patterns, guidelines and documentation."], ["Reduce and define", "Tokens and components, named component / variant / size / state / modifier."], ["Share", "Handoff with grids, breakpoints, numbered comments and status legend for developers."], ["Maintain", "Plan, build, deliver, adopt and maintain."]], "rotulo": "Process"}, "entregas": ["Design system", "Tokens", "Components", "Documentation", "Handoff", "Inspection platforms", "Jaci app"]}},
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
    detalhe: {"pt": {"ficha": [["Tipo", "Produto digital e site"], ["Segmento", "Representação comercial"], ["Meu papel", "Product design e web design"], ["Formato", "Cliente"]], "desafio": {"titulo": "Aprender a representar, um nível de cada vez.", "textos": ["A jornada começa no cadastro: a pessoa conta se quer começar a trabalhar com representação ou ampliar as representadas da carteira, e confirma a experiência, se já tem empresa e se tem registro no CORE. A partir disso, a plataforma monta uma estratégia.", "Na área de Estratégia, a aba Estatísticas reúne ações, contatos feitos, aplicações e contratações por mês. A aba Aprendizado transforma o conteúdo em progressão: níveis Iniciante, Intermediário e Avançado, pontos por atividade e a próxima aula sugerida."], "rotulo": "Projeto 1 · Gamificação"}, "processo": {"titulo": "Simplicidade sem abrir mão da elegância.", "textos": ["Com uma abordagem que privilegia a simplicidade sem abrir mão da elegância, desenvolvi um layout limpo, onde as informações são estrategicamente organizadas e a hierarquia visual é clara.", "Essa composição resultou em uma página que incentiva ações e esclarece dúvidas, proporcionando ao usuário uma experiência imersiva para convertê-lo em cliente."], "rotulo": "Projeto 2 · Site"}, "entregas": ["Cadastro e objetivo", "Geração de estratégia", "Painel de estatísticas", "Níveis e pontuação", "Trilha de aprendizado", "Versão para celular", "Site institucional"]}, "en": {"ficha": [["Type", "Digital product and website"], ["Industry", "Sales representation"], ["My role", "Product design and web design"], ["Format", "Client"]], "desafio": {"titulo": "Learning sales representation, one level at a time.", "textos": ["The journey starts at sign-up: the user says whether they want to start working in sales representation or grow their portfolio of represented companies, and confirms their experience, whether they have an agency and whether they are registered with CORE. From there, the platform builds a strategy.", "In the Strategy area, the Statistics tab brings together actions, contacts made, applications and monthly hires. The Learning tab turns content into progression: Beginner, Intermediate and Advanced levels, points per activity and the next suggested lesson."], "rotulo": "Project 1 · Gamification"}, "processo": {"titulo": "Simplicity without giving up elegance.", "textos": ["With an approach that favors simplicity without giving up elegance, I designed a clean layout where information is strategically organized and the visual hierarchy is clear.", "The result is a page that encourages action and answers questions, giving users an immersive experience that turns them into customers."], "rotulo": "Project 2 · Website"}, "entregas": ["Sign-up and goal", "Strategy generation", "Statistics dashboard", "Levels and points", "Learning path", "Mobile version", "Corporate website"]}},
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
    detalhe: {"pt": {"ficha": [["Tipo", "Proposta de produto com IA"], ["Segmento", "ERP para pequenas empresas"], ["Meu papel", "Pesquisa, UX e protótipo"], ["Formato", "Conceito"]], "desafio": {"titulo": "Tarefas fiscais exigem conhecimento técnico.", "textos": ["O Omie é um ERP completo para pequenas e médias empresas, com vendas, financeiro, notas fiscais e integração contábil. Mas tarefas fiscais e financeiras exigem conhecimento técnico, o que gera erros e retrabalho para o usuário leigo.", "Os critérios de sucesso: reduzir o tempo de emissão de notas, diminuir erros de preenchimento fiscal e aumentar o uso de funcionalidades automatizadas."], "rotulo": "Contexto"}, "processo": {"titulo": "Do briefing ao protótipo", "etapas": [["Jornada", "Barreiras e atritos na experiência atual, do acesso aos módulos à análise de relatórios."], ["Benchmark", "Conta Azul, QuickBooks, ZeroPaper e Bling como referências de mercado."], ["Persona", "Dona de loja de alimentos naturais que quer emitir notas e controlar o financeiro com autonomia."], ["Solução", "Preenchimento sugerido pelo histórico, leitura de PDFs, assistente conversacional e alertas no dashboard."]], "rotulo": "Processo"}, "entregas": ["Briefing", "Jornada do usuário", "Benchmark", "Persona", "Wireframes", "Protótipo", "IA aplicada"]}, "en": {"ficha": [["Type", "AI product proposal"], ["Industry", "ERP for small businesses"], ["My role", "Research, UX and prototype"], ["Format", "Concept"]], "desafio": {"titulo": "Tax tasks require technical knowledge.", "textos": ["Omie is a complete ERP for small and medium businesses, with sales, finance, invoicing and accounting integration. But tax and finance tasks require technical knowledge, which leads to errors and rework for non-experts.", "Success criteria: reduce invoice issuing time, cut tax form errors and increase the use of automated features."], "rotulo": "Context"}, "processo": {"titulo": "From brief to prototype", "etapas": [["Journey", "Barriers and friction in the current experience, from module access to report analysis."], ["Benchmark", "Conta Azul, QuickBooks, ZeroPaper and Bling as market references."], ["Persona", "Owner of a natural food store who wants to issue invoices and manage finances on her own."], ["Solution", "History-based suggestions, PDF reading, a conversational assistant and dashboard alerts."]], "rotulo": "Process"}, "entregas": ["Brief", "User journey", "Benchmark", "Persona", "Wireframes", "Prototype", "Applied AI"]}},
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
    detalhe: {"pt": {"ficha": [["Tipo", "Site institucional"], ["Segmento", "Tecnologia para o mercado financeiro"], ["Meu papel", "Conceito, UX e interface"], ["Formato", "Conceito"]], "desafio": {"titulo": "Mostrar uma plataforma bancária complexa de um jeito claro.", "textos": ["Proposta de um novo site institucional para a Fourbank, que mostra a plataforma bancária em camadas, do aplicativo ao Banco Central."], "rotulo": "Desafio"}, "processo": {"titulo": "Um conceito publicado e navegável.", "textos": ["O conceito foi construído como um site real, com o logo oficial da Fourbank, e está publicado para navegar."], "rotulo": "Resultado"}, "entregas": ["Site institucional", "Arquitetura em camadas", "Versão para celular", "Publicação"]}, "en": {"ficha": [["Type", "Corporate website"], ["Industry", "Financial technology"], ["My role", "Concept, UX and interface"], ["Format", "Concept"]], "desafio": {"titulo": "Presenting a complex banking platform clearly.", "textos": ["A proposed new corporate website for Fourbank, showing its banking platform layer by layer, from the app to the Central Bank."], "rotulo": "Challenge"}, "processo": {"titulo": "A published, browsable concept.", "textos": ["The concept was built as a real website, with Fourbank’s official logo, and is published so you can browse it."], "rotulo": "Outcome"}, "entregas": ["Corporate website", "Layered architecture", "Mobile version", "Publishing"]}},
    link: "https://fourbank.isapolicastro-designer.workers.dev/",
    botao: { pt: "Ver site", en: "View website" },
    cor: "#0E3556"
  },
  {
    titulo: { pt: "Policastro · Marca própria", en: "Policastro · Own brand" },
    categoria: { pt: "Identidade visual · Uso de marca", en: "Visual identity · Brand guidelines" },
    descricao: { pt: "A marca do meu estúdio: as iniciais I e P desenhadas como peças que florescem, com logo animado e aplicações no site e no Instagram.", en: "My studio’s brand: the initials I and P drawn as pieces that bloom, with an animated logo and applications on the website and Instagram." },
    empresa: "Policastro Soluções em Design",
    formato: { pt: "Marca própria", en: "Own brand" },
    ano: null,
    metricas: null,
    capa: "policastro-capa.webp", largura: 1600, altura: 900, foco: "center",
    imagens: null,
    detalhe: {"pt": {"ficha": [["Tipo", "Identidade visual e uso de marca"], ["Segmento", "UX & Product Design"], ["Meu papel", "Marca, animação e aplicações"], ["Formato", "Marca própria"]], "desafio": {"titulo": "As iniciais I e P, em forma de flor.", "textos": ["O símbolo é feito de cinco peças de cantos arredondados. Juntas, elas desenham as iniciais de Isadora Policastro: o I e o P.", "As mesmas peças também se abrem como as pétalas de uma flor. A flor representa crescimento, que é o que o design faz pelos produtos e negócios de quem trabalha comigo."], "rotulo": "Conceito"}, "processo": {"titulo": "As peças crescem e se encaixam.", "textos": ["Na abertura do site, cada peça chega de uma direção diferente, cresce e se encaixa no lugar, como uma flor se formando.", "Ao passar o mouse sobre o logo, as peças se afastam um pouco, como pétalas abrindo."], "rotulo": "Animação"}, "entregas": ["Símbolo", "Assinatura", "Paleta de cores", "Animação do logo", "Site", "Instagram", "Posts"]}, "en": {"ficha": [["Type", "Visual identity and brand guidelines"], ["Industry", "UX & Product Design"], ["My role", "Brand, animation and applications"], ["Format", "Own brand"]], "desafio": {"titulo": "The initials I and P, shaped like a flower.", "textos": ["The symbol is made of five pieces with rounded corners. Together, they draw the initials of Isadora Policastro: I and P.", "The same pieces also open like the petals of a flower. The flower stands for growth, which is what design does for the products and businesses of the people I work with."], "rotulo": "Concept"}, "processo": {"titulo": "The pieces grow and fall into place.", "textos": ["When the website opens, each piece arrives from a different direction, grows and falls into place, like a flower taking shape.", "When you hover over the logo, the pieces move slightly apart, like petals opening."], "rotulo": "Animation"}, "entregas": ["Symbol", "Logotype", "Color palette", "Logo animation", "Website", "Instagram", "Posts"]}},
    link: "policastro/",
    botao: { pt: "Ver case", en: "View case" },
    cor: "#F9F5EC"
  }
];
