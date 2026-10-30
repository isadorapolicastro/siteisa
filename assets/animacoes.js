/* Animações das ilustrações: entrada ao aparecer na tela e pausa quando saem dela. */
(function () {
  var entradas = document.querySelectorAll("[data-anim]");
  var artes = document.querySelectorAll(".art");
  if (!("IntersectionObserver" in window)) {
    entradas.forEach(function (e) { e.classList.add("is-in"); });
    artes.forEach(function (a) { a.classList.add("on"); });
    return;
  }
  var obsEntrada = new IntersectionObserver(function (itens) {
    itens.forEach(function (i) {
      if (i.isIntersecting) { i.target.classList.add("is-in"); obsEntrada.unobserve(i.target); }
    });
  }, { threshold: 0.15 });
  entradas.forEach(function (e) { obsEntrada.observe(e); });
  var obsLoop = new IntersectionObserver(function (itens) {
    itens.forEach(function (i) { i.target.classList.toggle("on", i.isIntersecting); });
  });
  artes.forEach(function (a) { obsLoop.observe(a); });
})();
