/* ==========================================================================
   Policastro Soluções em Design — troca de idioma, menu e formulário
   Os textos ficam no objeto COPY abaixo: "pt" (português) e "en" (inglês).
   Ao editar um texto, altere os dois idiomas e também o HTML da página
   (o HTML traz a versão em português, que é a que o Google lê).
   ========================================================================== */
(function () {
  "use strict";

  var EMAIL = "isapolicastro.designer@gmail.com";
  var COPY = {
  "pt": {
    "nav": {
      "estudio": "Sobre nós",
      "servicos": "Serviços",
      "processo": "Processo",
      "projetos": "Projetos",
      "trabalhe-conosco": "Trabalhe Conosco",
      "sobre": "Quem sou eu",
      "contato": "Contato"
    },
    "navCta": "Vamos conversar",
    "menu": "Menu",
    "langLabel": "EN",
    "langAria": "Switch to English",
    "titles": {
      "home": "Policastro Soluções em Design — UX & Product Design",
      "estudio": "Sobre nós — Policastro Soluções em Design",
      "servicos": "Serviços — Policastro Soluções em Design",
      "processo": "Processo — Policastro Soluções em Design",
      "projetos": "Projetos — Policastro Soluções em Design",
      "trabalhe-conosco": "Trabalhe Conosco — Policastro Soluções em Design",
      "sobre": "Quem sou eu — Isadora Policastro",
      "contato": "Contato — Policastro Soluções em Design",
      "404": "Página não encontrada — Policastro Soluções em Design"
    },
    "heroEyebrow": "UX & Product Design · Porto Alegre, BR",
    "heroTitle": "Policastro Soluções em Design",
    "heroLead": "Unimos estratégia, pesquisa e design para criar experiências digitais que encantam usuários e impulsionam negócios.",
    "whoBtn": "Quem é Isadora Policastro",
    "hireCta": "Quero contratar",
    "scrollHint": "✦ Explore o site e conheça nosso trabalho ✦",
    "home": {
      "aboutEyebrow": "Sobre",
      "aboutTitle": "Quem é Isadora Policastro",
      "aboutBio": [
        "Sou product designer com mais de 10 anos de experiência criando interfaces digitais — 3 deles em cargos de liderança. Já levei produtos do zero ao lançamento e atuei em todas as etapas, do conceito em baixa fidelidade até interfaces prontas para produção.",
        "Tenho perfil de startup: gosto de ambiguidade, ando rápido e amo construir produtos. Trabalho com mentalidade orientada a dados, analiso comportamento de usuário e busco feedback direto dos clientes para informar cada decisão de design."
      ],
      "eduTitle": "Formação",
      "edu": [
        {
          "year": "2024",
          "title": "Pós-graduação em UX Design",
          "school": "PUCRS"
        },
        {
          "year": "2020",
          "title": "Bacharel em Design de Produto",
          "school": "UFRGS"
        },
        {
          "year": "2019",
          "title": "Apple Developer Academy — iOS Foundations",
          "school": "Apple Developer Academy"
        }
      ],
      "aboutCta": "Conheça minha trajetória completa"
    },
    "aboutEyebrow": "Sobre a Policastro",
    "aboutTitle": "Transformamos necessidades estratégicas em interfaces funcionais e intuitivas.",
    "aboutP1Pre": "A ",
    "aboutP1Brand": "Policastro Soluções em Design",
    "aboutP1Post": " nasceu de 10 anos de experiência em design digital, sendo 3 em liderança. Atuamos em todas as etapas do processo — da análise de contexto e necessidades dos usuários e do negócio à identificação de hipóteses e oportunidades que geram resultado real.",
    "aboutP2": "Nosso trabalho não se limita a um visual bonito. Criamos experiências eficientes e produtos que conectam marcas a pessoas — e que se traduzem em conversão, satisfação e crescimento.",
    "servicesEyebrow": "O que fazemos",
    "servicesTitle": "Consultoria de UX sob medida para o seu produto digital.",
    "processEyebrow": "Como fazemos",
    "processTitle": "Do início ao fim, com método e cuidado.",
    "projectsEyebrow": "Nossos projetos",
    "projectsTitle": "Grandes projetos nascem aqui.",
    "testimonialEyebrow": "Relatos de clientes",
    "testimonial": "“O trabalho da Policastro transformou nosso site! Não é só bonito — é incrivelmente fácil de usar. Tivemos um salto enorme em leads após o lançamento, e nossos clientes amam a navegação.”",
    "skillsEyebrow": "Nossas Habilidades",
    "careersEyebrow": "Carreiras",
    "careersTitle": "Quer fazer parte do time?",
    "careersLead": "Estamos sempre abertos a designers, pesquisadores e mentes curiosas que acreditam em design com propósito. Confira nossas vagas abertas ou envie seu portfólio para nosso time.",
    "applyCta": "Quero me candidatar →",
    "applySubject": "Candidatura",
    "noJobPre": "Não encontrou a vaga certa? Envie seu portfólio para ",
    "noJobPost": " — adoramos descobrir novos talentos.",
    "contactEyebrow": "Vamos conversar?",
    "contactTitle1": "Vamos conversar.",
    "contactTitle2": "Preencha o formulário e nosso time entra em contato.",
    "formTitle": "Agende uma conversa",
    "formLead": "Conte um pouco sobre seu projeto e nosso time entra em contato.",
    "formName": "Seu nome",
    "formEmail": "Email corporativo",
    "formCompany": "Empresa",
    "formSize": "Tamanho do time",
    "formSizeMax": "+ de 1.000",
    "formRole": "Seu cargo",
    "formMsg": "Conte sobre o seu projeto",
    "formRoles": [
      "Diretor / C-level / Sócio",
      "Marketing",
      "Design",
      "Tecnologia",
      "Compras",
      "Outros"
    ],
    "formSubmit": "Quero contratar",
    "formSent": "Abrimos seu cliente de email com a mensagem pronta. Estamos no aguardo! ✦",
    "formLgpd": "Ao enviar, você concorda com o tratamento dos seus dados conforme a LGPD.",
    "formMailSubject": "Quero contratar a Policastro Soluções em Design",
    "formMailLabels": {
      "name": "Nome",
      "email": "Email",
      "company": "Empresa",
      "size": "Tamanho do time",
      "role": "Cargo"
    },
    "footer1": "© {year} Policastro Soluções em Design · UX & Product Design",
    "footer2": "Feito com cuidado em Porto Alegre, BR",
    "notFoundTitle": "Página não encontrada",
    "notFoundLead": "A página que você procura não existe ou mudou de endereço.",
    "notFoundCta": "Voltar para o início",
    "services": [
      {
        "title": "Teste de Usabilidade",
        "desc": "Criamos estratégias únicas e aplicamos testes de usabilidade de alto nível, gerando entendimento profundo e visões estratégicas para a evolução do produto."
      },
      {
        "title": "Otimização de Jornadas",
        "desc": "Mapeamos processos, fluxos e pessoas para desenhar o melhor caminho do usuário dentro do produto — e aumentar o número de conversões na nova jornada."
      },
      {
        "title": "Pesquisa com Usuário",
        "desc": "Pesquisas quantitativas e qualitativas com excelência, extraindo das personas informações valiosas para tomadas de decisão antes ou depois do projeto."
      },
      {
        "title": "Revisão de Usabilidade",
        "desc": "Revisão completa de arquitetura da informação, fluxos e design de interação consolidada em um relatório claro de boas práticas e melhorias sugeridas."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Entendimento",
        "desc": "A Policastro inicia todo projeto com uma análise completa do contexto atual para identificar gargalos e oportunidades necessárias para atingir o objetivo do produto."
      },
      {
        "step": "02",
        "title": "Produção",
        "desc": "Com o mapeamento detalhado, executamos o serviço contratado de ponta a ponta para proporcionar a melhor experiência ao usuário e aumentar os resultados do negócio."
      },
      {
        "step": "03",
        "title": "Resultado",
        "desc": "Após um trabalho conduzido com método e cuidado, o único resultado possível é o sucesso. Entregamos artefatos prontos para escalar dentro do seu time."
      }
    ],
    "projects": [
      {
        "title": "App Telemedicina",
        "subtitle": "Processo de descoberta"
      },
      {
        "title": "Gamificação em Plataforma CRM",
        "subtitle": "Product Design"
      },
      {
        "title": "Aplicativo para e-commerce",
        "subtitle": "Mobile Design"
      },
      {
        "title": "Site para Plataforma CRM",
        "subtitle": "Web Design"
      }
    ],
    "skills": [
      "Design Baseado em Dados",
      "Prototipagem",
      "Pesquisa",
      "Arquitetura da Informação",
      "Design de Interação",
      "Testes de Usabilidade",
      "Design Thinking"
    ],
    "stats": [
      {
        "value": "94%",
        "desc": "dos usuários julgam a credibilidade de uma empresa com base no design do seu produto."
      },
      {
        "value": "75%",
        "desc": "da percepção de confiança em uma marca digital vem da qualidade da experiência entregue."
      },
      {
        "value": "70%",
        "desc": "dos projetos online falham por falta de aceitação ou entendimento do usuário."
      }
    ],
    "jobs": [
      {
        "role": "Estágio em Design",
        "type": "Híbrido · Porto Alegre",
        "desc": "Apoiar o time em rituais de design, testes de usabilidade e produção de entregáveis."
      }
    ],
    "me": {
      "eyebrow": "Sobre · Designer de Produto",
      "title": "Quem sou eu",
      "bio": [
        "Sou Isadora Policastro, designer de produto com mais de 10 anos de experiência criando interfaces digitais — sendo 3 deles em posições de liderança. Já levei produtos do zero ao um e atuei em todas as etapas, do conceito em baixa fidelidade à entrega em produção.",
        "Tenho perfil de startup: gosto de ambiguidade, ando rápido e amo construir do 0 ao 1. Trabalho com mentalidade orientada a dados, analiso comportamento de usuário e busco feedback direto dos clientes para informar cada decisão de design."
      ],
      "eduTitle": "Formação",
      "edu": [
        {
          "year": "2024",
          "title": "Pós-graduação em UX Design",
          "school": "PUCRS"
        },
        {
          "year": "2020",
          "title": "Bacharel em Design de Produto",
          "school": "UFRGS"
        },
        {
          "year": "2019",
          "title": "Apple Developer Academy — iOS Foundations",
          "school": "Apple Developer Academy"
        }
      ],
      "skillsTitle": "Áreas de atuação",
      "blocks": [
        {
          "t": "Design & Prototipação",
          "d": "Figma, Sketch, Adobe XD, Penpot, Framer e Claude Design. Prototipação rápida com IA usando v0, Lovable, Subframe, Bolt, Magic Patterns, tldraw + make-real e Google Stitch. Hi-fi e motion com Rive, Lottie, ProtoPie e Origami Studio."
        },
        {
          "t": "Código & Design Systems",
          "d": "Entrego meus próprios designs em código com React, TypeScript e Tailwind CSS. Construo e mantenho design systems escaláveis com Storybook, shadcn/ui, Radix UI e Tokens Studio."
        },
        {
          "t": "Pesquisa, Analytics & Acessibilidade",
          "d": "Maze, UserTesting, PostHog, FullStory e Hotjar para entender o usuário. Acessibilidade com axe DevTools, WAVE, Lighthouse e testes com leitor de tela (WCAG)."
        },
        {
          "t": "Produtos de IA & Visualização de Dados",
          "d": "Tenho experiência projetando para produtos de IA — streaming de respostas, incerteza de modelo, fluxos human-in-the-loop e interações com agentes. Trabalho com fundações como Anthropic Claude, OpenAI GPT e roteamento multi-modelo via LiteLLM. Para dados densos e knowledge graphs, uso Recharts, Plotly e D3."
        }
      ],
      "close": "Tenho interesse forte por segurança, privacidade e ferramentas para desenvolvedores — domínios onde confiança e governança são parte essencial da experiência.",
      "cta": "Vamos conversar"
    }
  },
  "en": {
    "nav": {
      "estudio": "About us",
      "servicos": "Services",
      "processo": "Process",
      "projetos": "Projects",
      "trabalhe-conosco": "Careers",
      "sobre": "About me",
      "contato": "Contact"
    },
    "navCta": "Let's talk",
    "menu": "Menu",
    "langLabel": "PT",
    "langAria": "Mudar para português",
    "titles": {
      "home": "Policastro Soluções em Design — UX & Product Design",
      "estudio": "About us — Policastro Soluções em Design",
      "servicos": "Services — Policastro Soluções em Design",
      "processo": "Process — Policastro Soluções em Design",
      "projetos": "Projects — Policastro Soluções em Design",
      "trabalhe-conosco": "Careers — Policastro Soluções em Design",
      "sobre": "About me — Isadora Policastro",
      "contato": "Contact — Policastro Soluções em Design",
      "404": "Page not found — Policastro Soluções em Design"
    },
    "heroEyebrow": "UX & Product Design · Porto Alegre, BR",
    "heroTitle": "Policastro Soluções em Design",
    "heroLead": "We combine strategy, research and design to craft digital experiences that delight users and drive business.",
    "whoBtn": "Who is Isadora Policastro",
    "hireCta": "Hire us",
    "scrollHint": "✦ Explore the site and see our work ✦",
    "home": {
      "aboutEyebrow": "About",
      "aboutTitle": "Who is Isadora Policastro",
      "aboutBio": [
        "A product designer with 10+ years of experience crafting digital interfaces — 3 of them in leadership roles. I've taken products from zero to one and worked across every stage, from low-fidelity concept to production-ready interfaces.",
        "I have startup DNA: I thrive in ambiguity, move fast, and love building from 0 to 1. I work with a data-informed mindset, analyze user behavior and gather feedback directly from customers to inform every design decision."
      ],
      "eduTitle": "Education",
      "edu": [
        {
          "year": "2024",
          "title": "Postgraduate in UX Design",
          "school": "PUCRS"
        },
        {
          "year": "2020",
          "title": "BA in Product Design",
          "school": "UFRGS"
        },
        {
          "year": "2019",
          "title": "Apple Developer Academy — iOS Foundations",
          "school": "Apple Developer Academy"
        }
      ],
      "aboutCta": "See my full journey"
    },
    "aboutEyebrow": "About Policastro",
    "aboutTitle": "We turn strategic needs into functional, intuitive interfaces.",
    "aboutP1Pre": "",
    "aboutP1Brand": "Policastro Soluções em Design",
    "aboutP1Post": " was born from 10 years of experience in digital design, 3 of them in leadership. We work across every stage of the process — from analyzing context and user/business needs to identifying hypotheses and opportunities that drive real outcomes.",
    "aboutP2": "Our work goes beyond a pretty visual. We craft efficient experiences and products that connect brands with people — translating into conversion, satisfaction and growth.",
    "servicesEyebrow": "What we do",
    "servicesTitle": "UX consulting tailored to your digital product.",
    "processEyebrow": "How we work",
    "processTitle": "From start to finish, with method and care.",
    "projectsEyebrow": "Our projects",
    "projectsTitle": "Great projects are born here.",
    "testimonialEyebrow": "Client stories",
    "testimonial": "“Policastro's work transformed our site! It's not just beautiful — it's incredibly easy to use. We saw a huge jump in leads after launch, and our clients love the navigation.”",
    "skillsEyebrow": "Our Skills",
    "careersEyebrow": "Careers",
    "careersTitle": "Want to join the team?",
    "careersLead": "We're always open to designers, researchers and curious minds who believe in purposeful design. Check our open roles or send your portfolio to our team.",
    "applyCta": "Apply now →",
    "applySubject": "Application",
    "noJobPre": "Didn't find the right role? Send your portfolio to ",
    "noJobPost": " — we love discovering new talent.",
    "contactEyebrow": "Let's talk?",
    "contactTitle1": "Let's talk.",
    "contactTitle2": "Fill out the form and our team will get in touch.",
    "formTitle": "Book a call",
    "formLead": "Tell us a bit about your project and our team will get in touch.",
    "formName": "Your name",
    "formEmail": "Work email",
    "formCompany": "Company",
    "formSize": "Team size",
    "formSizeMax": "1,000+",
    "formRole": "Your role",
    "formMsg": "Tell us about your project",
    "formRoles": [
      "Director / C-level / Partner",
      "Marketing",
      "Design",
      "Technology",
      "Procurement",
      "Other"
    ],
    "formSubmit": "Hire us",
    "formSent": "We opened your email client with the message ready. Looking forward! ✦",
    "formLgpd": "By submitting, you agree to your data being handled per our privacy policy.",
    "formMailSubject": "I want to hire Policastro Soluções em Design",
    "formMailLabels": {
      "name": "Name",
      "email": "Email",
      "company": "Company",
      "size": "Team size",
      "role": "Role"
    },
    "footer1": "© {year} Policastro Soluções em Design · UX & Product Design",
    "footer2": "Crafted with care in Porto Alegre, BR",
    "notFoundTitle": "Page not found",
    "notFoundLead": "The page you're looking for doesn't exist or has moved.",
    "notFoundCta": "Back to home",
    "services": [
      {
        "title": "Usability Testing",
        "desc": "We design unique strategies and run high-level usability tests, generating deep understanding and strategic insights to evolve the product."
      },
      {
        "title": "Journey Optimization",
        "desc": "We map processes, flows and people to design the best user path inside the product — increasing conversions along the new journey."
      },
      {
        "title": "User Research",
        "desc": "Quantitative and qualitative research with excellence, extracting valuable insights from personas to inform decisions before or after the project."
      },
      {
        "title": "Usability Review",
        "desc": "A complete review of information architecture, flows and interaction design, consolidated into a clear report of best practices and suggested improvements."
      }
    ],
    "process": [
      {
        "step": "01",
        "title": "Understanding",
        "desc": "Every project starts with a complete analysis of the current context to identify bottlenecks and opportunities needed to reach the product's goal."
      },
      {
        "step": "02",
        "title": "Production",
        "desc": "With detailed mapping in hand, we execute the contracted service end-to-end to deliver the best user experience and grow business results."
      },
      {
        "step": "03",
        "title": "Outcome",
        "desc": "After work conducted with method and care, success is the only possible outcome. We hand over artifacts ready to scale inside your team."
      }
    ],
    "projects": [
      {
        "title": "Telemedicine App",
        "subtitle": "Discovery process"
      },
      {
        "title": "CRM Platform Gamification",
        "subtitle": "Product Design"
      },
      {
        "title": "E-commerce Mobile App",
        "subtitle": "Mobile Design"
      },
      {
        "title": "CRM Platform Website",
        "subtitle": "Web Design"
      }
    ],
    "skills": [
      "Data-Driven Design",
      "Prototyping",
      "Research",
      "Information Architecture",
      "Interaction Design",
      "Usability Testing",
      "Design Thinking"
    ],
    "stats": [
      {
        "value": "94%",
        "desc": "of users judge a company's credibility based on the design of its product."
      },
      {
        "value": "75%",
        "desc": "of trust perception in a digital brand comes from the quality of the experience delivered."
      },
      {
        "value": "70%",
        "desc": "of online projects fail due to lack of user adoption or understanding."
      }
    ],
    "jobs": [
      {
        "role": "Design Internship",
        "type": "Hybrid · Porto Alegre",
        "desc": "Support the team across design rituals, usability testing and producing deliverables."
      }
    ],
    "me": {
      "eyebrow": "About · Product Designer",
      "title": "About me",
      "bio": [
        "I'm Isadora Policastro, a product designer with 10+ years of experience crafting digital interfaces — 3 of them in leadership roles. I've taken products from zero to one and worked across every stage, from low-fidelity concept to production-ready interfaces.",
        "I have startup DNA: I thrive in ambiguity, move fast, and love building from 0 to 1. I work with a data-informed mindset, analyze user behavior and gather feedback directly from customers to inform every design decision."
      ],
      "eduTitle": "Education",
      "edu": [
        {
          "year": "2024",
          "title": "Postgraduate in UX Design",
          "school": "PUCRS"
        },
        {
          "year": "2020",
          "title": "BA in Product Design",
          "school": "UFRGS"
        },
        {
          "year": "2019",
          "title": "Apple Developer Academy — iOS Foundations",
          "school": "Apple Developer Academy"
        }
      ],
      "skillsTitle": "Areas of expertise",
      "blocks": [
        {
          "t": "Design & Prototyping",
          "d": "Figma, Sketch, Adobe XD, Penpot, Framer and Claude Design. AI-assisted rapid prototyping with v0, Lovable, Subframe, Bolt, Magic Patterns, tldraw + make-real and Google Stitch. Hi-fi & motion with Rive, Lottie, ProtoPie and Origami Studio."
        },
        {
          "t": "Code & Design Systems",
          "d": "I ship my own designs in code with React, TypeScript and Tailwind CSS. I build and maintain scalable design systems with Storybook, shadcn/ui, Radix UI and Tokens Studio."
        },
        {
          "t": "Research, Analytics & Accessibility",
          "d": "Maze, UserTesting, PostHog, FullStory and Hotjar to understand the user. Accessibility with axe DevTools, WAVE, Lighthouse and screen-reader testing (WCAG)."
        },
        {
          "t": "AI Products & Data Visualization",
          "d": "I've designed for AI products — streaming responses, model uncertainty, human-in-the-loop flows and agentic interactions. I work with foundations like Anthropic Claude, OpenAI GPT and multi-model routing via LiteLLM. For dense data and knowledge graphs, I use Recharts, Plotly and D3."
        }
      ],
      "close": "I'm deeply interested in security, privacy and developer tools — domains where trust and governance are core to the experience.",
      "cta": "Let's talk"
    }
  }
};

  function get(obj, path) {
    return path.split(".").reduce(function (acc, k) {
      return acc == null ? undefined : acc[k];
    }, obj);
  }

  function readLang() {
    try { return localStorage.getItem("lang") === "en" ? "en" : "pt"; }
    catch (e) { return "pt"; }
  }
  function saveLang(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var lang = readLang();
  var page = document.body.getAttribute("data-page") || "home";

  function apply() {
    var c = COPY[lang];
    var year = String(new Date().getFullYear());
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    if (c.titles[page]) document.title = c.titles[page];

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = get(c, el.getAttribute("data-i18n"));
      if (typeof v === "string") el.textContent = v.replace("{year}", year);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var v = get(c, el.getAttribute("data-i18n-placeholder"));
      if (typeof v === "string") el.setAttribute("placeholder", v);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var v = get(c, el.getAttribute("data-i18n-alt"));
      if (typeof v === "string") el.setAttribute("alt", v);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var v = get(c, el.getAttribute("data-i18n-aria"));
      if (typeof v === "string") el.setAttribute("aria-label", v);
    });

    // Links de candidatura com o assunto no idioma certo
    document.querySelectorAll("[data-job]").forEach(function (el) {
      var job = c.jobs[Number(el.getAttribute("data-job"))];
      if (!job) return;
      el.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(c.applySubject + " — " + job.role);
    });

    // Botão de idioma
    var btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = c.langLabel;
      btn.setAttribute("aria-label", c.langAria);
      btn.setAttribute("title", c.langAria);
    }
  }

  apply();

  var langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      lang = lang === "pt" ? "en" : "pt";
      saveLang(lang);
      apply();
    });
  }

  // Menu no celular
  var nav = document.querySelector(".nav");
  var toggle = document.getElementById("menuToggle");
  if (nav && toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") !== "true";
      nav.setAttribute("data-open", String(open));
      toggle.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Formulário de contato: abre o e-mail com a mensagem pronta
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var c = COPY[lang];
      var L = c.formMailLabels;
      var f = form.elements;
      var body =
        L.name + ": " + f.name.value + "\n" +
        L.email + ": " + f.email.value + "\n" +
        L.company + ": " + f.company.value + "\n" +
        L.size + ": " + f.size.value + "\n" +
        L.role + ": " + f.role.value + "\n\n" +
        f.message.value;
      window.location.href =
        "mailto:" + EMAIL +
        "?subject=" + encodeURIComponent(c.formMailSubject) +
        "&body=" + encodeURIComponent(body);
      var sent = document.getElementById("formSent");
      if (sent) sent.hidden = false;
    });
  }
})();
