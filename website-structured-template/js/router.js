const headerEl = document.getElementById("site-header");
const footerEl = document.getElementById("site-footer");
const contentEl = document.getElementById("site-content");

function loadPartial(path, element) {
  fetch(path)
    .then(res => res.text())
    .then(html => element.innerHTML = html);
}

function loadPage(page) {
  fetch(`/pages/${page}.html`)
    .then(res => {
      if (!res.ok) throw new Error("Page not found");
      return res.text();
    })
    .then(html => {
      contentEl.innerHTML = html;
      updateSEO(page);
    })
    .catch(() => {
      contentEl.innerHTML = "<h2>Page not found</h2>";
    });
}

function getPageFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("page") || "main";
}

// Initial Load
loadPartial("/partials/header.html", headerEl);
loadPartial("/partials/footer.html", footerEl);
loadPage(getPageFromURL());

// Navigation handling
document.addEventListener("click", e => {
  if (e.target.tagName === "A" && e.target.href.includes("?page=")) {
    e.preventDefault();
    const page = new URL(e.target.href).searchParams.get("page");
    history.pushState({}, "", `?page=${page}`);
    loadPage(page);
  }
});

window.onpopstate = () => loadPage(getPageFromURL());
