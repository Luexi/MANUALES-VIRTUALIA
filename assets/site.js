(function () {
  if (window.location.protocol !== "file:") return;

  var localRoutes = {
    "pms/": "pms/index.html",
    "hub/": "hub/index.html",
    "condo/": "condo/index.html",
    "../": "../index.html",
    "./": "index.html"
  };

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest("a[href]") : null;
    if (!link || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target && link.target !== "_self") return;

    var href = link.getAttribute("href");
    if (!href) return;

    var hashIndex = href.indexOf("#");
    var queryIndex = href.indexOf("?");
    var cutIndex = href.length;
    if (hashIndex >= 0) cutIndex = Math.min(cutIndex, hashIndex);
    if (queryIndex >= 0) cutIndex = Math.min(cutIndex, queryIndex);

    var route = href.slice(0, cutIndex);
    var suffix = href.slice(cutIndex);
    if (!localRoutes[route]) return;

    event.preventDefault();
    window.location.href = localRoutes[route] + suffix;
  });
})();
