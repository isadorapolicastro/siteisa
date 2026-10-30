/* ==========================================================================
   Carrossel de projetos — página Projetos
   Lê os projetos de assets/projetos-dados.js. Sem bibliotecas externas.
   Navegação: botões, indicadores, setas do teclado, arraste e toque.
   ========================================================================== */
(function () {
  "use strict";

  var root = document.getElementById("carrossel");
  var projetos = window.PROJETOS || [];
  if (!root || !projetos.length) return;

  var TEXTOS = {
    pt: {
      regiao: "Projetos em destaque",
      slide: "Projeto {n} de {t}",
      anterior: "Projeto anterior",
      proximo: "Próximo projeto",
      irPara: "Ir para o projeto {n}: {titulo}",
      abrir: "Ver projeto",
      novaAba: "(abre em nova aba)",
      anuncio: "Projeto {n} de {t}: {titulo}"
    },
    en: {
      regiao: "Featured projects",
      slide: "Project {n} of {t}",
      anterior: "Previous project",
      proximo: "Next project",
      irPara: "Go to project {n}: {titulo}",
      abrir: "View project",
      novaAba: "(opens in a new tab)",
      anuncio: "Project {n} of {t}: {titulo}"
    }
  };

  var base = root.getAttribute("data-base") || "../";
  var reduzir = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var total = projetos.length;
  var atual = 0;
  var lang = document.documentElement.lang === "en" ? "en" : "pt";

  function dois(n) { return (n < 10 ? "0" : "") + n; }
  function fmt(s, v) { return s.replace(/\{(\w+)\}/g, function (_, k) { return v[k]; }); }
  function txt(o) { return o == null ? "" : (typeof o === "string" ? o : (o[lang] || o.pt || "")); }
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function externo(url) { return /^https?:\/\//.test(url) && url.indexOf(location.host) === -1; }

  /* ---------- Estrutura ---------- */
  root.innerHTML =
    '<div class="carr__bar container container--wide">' +
    '  <p class="carr__count"><span class="carr__now">01</span><span class="carr__sep" aria-hidden="true"></span><span class="carr__total">' + dois(total) + '</span></p>' +
    '  <div class="carr__dots"></div>' +
    '  <div class="carr__arrows">' +
    '    <button class="carr__btn" type="button" data-dir="-1"><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M12 4.5 6.5 10l5.5 5.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
    '    <button class="carr__btn" type="button" data-dir="1"><svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true"><path d="M8 4.5 13.5 10 8 15.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button>' +
    '  </div>' +
    '</div>' +
    '<div class="carr__viewport">' +
    '  <ul class="carr__track"></ul>' +
    '</div>' +
    '<p class="sr-only" aria-live="polite" aria-atomic="true"></p>';

  var viewport = root.querySelector(".carr__viewport");
  var track = root.querySelector(".carr__track");
  var dotsBox = root.querySelector(".carr__dots");
  var nowEl = root.querySelector(".carr__now");
  var live = root.querySelector("[aria-live]");
  var btnPrev = root.querySelector('[data-dir="-1"]');
  var btnNext = root.querySelector('[data-dir="1"]');
  var slides = [];
  var dots = [];

  function montar() {
    var t = TEXTOS[lang];
    root.setAttribute("aria-label", t.regiao);
    btnPrev.setAttribute("aria-label", t.anterior);
    btnNext.setAttribute("aria-label", t.proximo);

    track.innerHTML = projetos.map(function (p, i) {
      var titulo = txt(p.titulo);
      var ext = externo(p.link);
      var alvo = ext ? ' target="_blank" rel="noopener"' : "";
      var meta = [p.empresa, txt(p.formato), p.ano].filter(Boolean).map(esc).join('<span aria-hidden="true"> · </span>');
      var metricas = (p.metricas || []).map(function (m) { return "<li>" + esc(txt(m)) + "</li>"; }).join("");
      var desc = txt(p.descricao);
      return (
        '<li class="carr__slide" role="group" aria-roledescription="slide" aria-label="' + esc(fmt(t.slide, { n: i + 1, t: total })) + '" data-i="' + i + '">' +
        '  <a class="carr__media" href="' + esc(p.link) + '"' + alvo + ' style="background-color:' + esc(p.cor || "var(--secondary)") + '" tabindex="-1" aria-hidden="true" draggable="false">' +
        '    <img src="' + base + 'assets/projetos/' + esc(p.capa) + '" width="' + p.largura + '" height="' + p.altura + '" alt="" draggable="false"' +
        '      style="object-position:' + esc(p.foco || "center") + '"' + (i < 2 ? "" : ' loading="lazy"') + ' decoding="async" />' +
        '  </a>' +
        '  <div class="carr__info">' +
        '    <div class="carr__head">' +
        '      <span class="carr__num" aria-hidden="true">' + dois(i + 1) + '</span>' +
        '      <span class="carr__cat">' + esc(txt(p.categoria)) + '</span>' +
        '    </div>' +
        '    <h2 class="carr__title">' + esc(titulo) + '</h2>' +
        (desc ? '    <p class="carr__desc">' + esc(desc) + '</p>' : "") +
        (metricas ? '    <ul class="carr__metrics">' + metricas + '</ul>' : "") +
        '    <div class="carr__foot">' +
        (meta ? '      <p class="carr__meta">' + meta + '</p>' : '<span></span>') +
        '      <a class="carr__cta" href="' + esc(p.link) + '"' + alvo + ' draggable="false">' +
        '        <span>' + esc(txt(p.botao) || t.abrir) + '</span>' + (ext ? '<span class="sr-only"> ' + t.novaAba + '</span>' : "") +
        '        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true"><path d="M6 14 14 6M7.5 6H14v6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '      </a>' +
        '    </div>' +
        '  </div>' +
        '</li>'
      );
    }).join("");

    dotsBox.innerHTML = projetos.map(function (p, i) {
      return '<button class="carr__dot" type="button" data-i="' + i + '" aria-label="' +
        esc(fmt(t.irPara, { n: i + 1, titulo: txt(p.titulo) })) + '"><span></span></button>';
    }).join("");

    slides = Array.prototype.slice.call(track.children);
    dots = Array.prototype.slice.call(dotsBox.children);
    ir(atual, { semAnimar: true, semAnunciar: true });
  }

  /* ---------- Posicionamento ---------- */
  var deslocamento = 0;

  function alvoX(i) {
    var s = slides[i];
    return (viewport.clientWidth - s.offsetWidth) / 2 - s.offsetLeft;
  }

  function mover(x, animar) {
    track.classList.toggle("is-dragging", !animar);
    track.style.transform = "translate3d(" + x + "px,0,0)";
  }

  function ir(i, opt) {
    opt = opt || {};
    atual = Math.max(0, Math.min(total - 1, i));
    var t = TEXTOS[lang];

    slides.forEach(function (s, k) {
      var ativo = k === atual;
      s.classList.toggle("is-active", ativo);
      s.classList.toggle("is-prev", k === atual - 1);
      s.classList.toggle("is-next", k === atual + 1);
      s.setAttribute("aria-hidden", ativo ? "false" : "true");
      var cta = s.querySelector(".carr__cta");
      if (cta) cta.tabIndex = ativo ? 0 : -1;
    });
    dots.forEach(function (d, k) {
      d.classList.toggle("is-active", k === atual);
      if (k === atual) d.setAttribute("aria-current", "true"); else d.removeAttribute("aria-current");
    });

    btnPrev.disabled = atual === 0;
    btnNext.disabled = atual === total - 1;
    nowEl.textContent = dois(atual + 1);

    deslocamento = alvoX(atual);
    if (opt.semAnimar) {
      track.classList.add("no-anim");
      mover(deslocamento, true);
      void track.offsetWidth;
      track.classList.remove("no-anim");
    } else {
      mover(deslocamento, true);
    }

    if (!opt.semAnunciar) {
      live.textContent = fmt(t.anuncio, { n: atual + 1, t: total, titulo: txt(projetos[atual].titulo) });
    }
  }

  /* ---------- Controles ---------- */
  btnPrev.addEventListener("click", function () { ir(atual - 1); });
  btnNext.addEventListener("click", function () { ir(atual + 1); });
  dotsBox.addEventListener("click", function (e) {
    var b = e.target.closest(".carr__dot");
    if (b) ir(Number(b.getAttribute("data-i")));
  });

  root.addEventListener("keydown", function (e) {
    if (e.target.matches("input, textarea, select")) return;
    var mapa = { ArrowLeft: atual - 1, ArrowRight: atual + 1, Home: 0, End: total - 1 };
    if (e.key in mapa) {
      e.preventDefault();
      ir(mapa[e.key]);
    }
  });

  /* Clique em um projeto vizinho: traz para o centro em vez de abrir */
  track.addEventListener("click", function (e) {
    if (arrastou) { e.preventDefault(); e.stopPropagation(); return; }
    var s = e.target.closest(".carr__slide");
    if (s && !s.classList.contains("is-active")) {
      e.preventDefault();
      ir(Number(s.getAttribute("data-i")));
    }
  }, true);

  /* ---------- Arraste (mouse e toque) ---------- */
  var arrastando = false, arrastou = false, x0 = 0, y0 = 0, t0 = 0, dx = 0, eixo = null, idPonteiro = null;

  viewport.addEventListener("pointerdown", function (e) {
    if (e.button !== 0) return;
    arrastando = true; arrastou = false; eixo = null;
    x0 = e.clientX; y0 = e.clientY; t0 = performance.now(); dx = 0;
    idPonteiro = e.pointerId;
  });

  viewport.addEventListener("pointermove", function (e) {
    if (!arrastando || e.pointerId !== idPonteiro) return;
    var mx = e.clientX - x0, my = e.clientY - y0;
    if (eixo === null && (Math.abs(mx) > 6 || Math.abs(my) > 6)) {
      eixo = Math.abs(mx) > Math.abs(my) ? "x" : "y";
      if (eixo === "x") { try { viewport.setPointerCapture(idPonteiro); } catch (err) {} }
    }
    if (eixo !== "x") return;
    arrastou = true;
    dx = mx;
    // Resistência nas pontas
    if ((atual === 0 && dx > 0) || (atual === total - 1 && dx < 0)) dx = dx * 0.3;
    mover(deslocamento + dx, false);
  });

  function soltar(e) {
    if (!arrastando || (e && e.pointerId !== idPonteiro)) return;
    arrastando = false;
    if (eixo !== "x") { ir(atual, { semAnunciar: true }); return; }
    var dt = Math.max(1, performance.now() - t0);
    var velocidade = dx / dt;
    var limite = Math.min(120, slides[atual].offsetWidth * 0.18);
    if (dx < -limite || velocidade < -0.45) ir(atual + 1);
    else if (dx > limite || velocidade > 0.45) ir(atual - 1);
    else ir(atual, { semAnunciar: true });
    setTimeout(function () { arrastou = false; }, 0);
  }
  viewport.addEventListener("pointerup", soltar);
  viewport.addEventListener("pointercancel", soltar);
  viewport.addEventListener("dragstart", function (e) { e.preventDefault(); });

  /* ---------- Ajustes ---------- */
  var timer;
  window.addEventListener("resize", function () {
    clearTimeout(timer);
    timer = setTimeout(function () { ir(atual, { semAnimar: true, semAnunciar: true }); }, 80);
  });

  // Recalcula quando as fontes terminam de carregar (as larguras podem mudar)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ir(atual, { semAnimar: true, semAnunciar: true }); });
  }

  // Troca de idioma pelo botão PT/EN do site
  document.addEventListener("site:lang", function (e) {
    lang = e.detail && e.detail.lang === "en" ? "en" : "pt";
    montar();
  });

  if (reduzir) root.classList.add("carr--reduce");
  montar();
  root.classList.add("is-ready");
})();
