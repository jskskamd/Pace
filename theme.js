// Loaded in <head>: sets the mode before the page paints, so it never flashes the wrong one
(function () {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.dataset.theme = saved === "light" || saved === "dark" ? saved : prefersDark ? "dark" : "light";
})();
