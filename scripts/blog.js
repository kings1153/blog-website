/**
 * KINGS Editorial Journal — Blog Catalog & Reader System (scripts/blog.js)
 */

let currentCategory = "all";
let searchQuery = "";
let currentSort = "newest";
let currentView = "grid";
let readerFontSize = 1.12; // base rem

document.addEventListener("DOMContentLoaded", () => {
  initBlogCatalog();
  initReaderModalEvents();
});

/* --------------------------------------------------------------------------
   1. Initialize Blog Catalog (If present on current page)
   -------------------------------------------------------------------------- */
function initBlogCatalog() {
  const container = document.getElementById("articlesContainer");
  if (!container || typeof KINGS_ARTICLES === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const catParam = urlParams.get("cat");
  if (catParam) {
    currentCategory = catParam.toLowerCase();
  }

  renderCategoryPills();
  renderArticles();
  setupCatalogListeners();
}

function setupCatalogListeners() {
  // Search Input
  const searchInput = document.getElementById("blogSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderArticles();
    });
  }

  // Sort Dropdown
  const sortSelect = document.getElementById("blogSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderArticles();
    });
  }

  // Grid / List View Toggle
  const gridBtn = document.getElementById("viewGridBtn");
  const listBtn = document.getElementById("viewListBtn");

  if (gridBtn && listBtn) {
    gridBtn.addEventListener("click", () => {
      currentView = "grid";
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
      renderArticles();
    });

    listBtn.addEventListener("click", () => {
      currentView = "list";
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
      renderArticles();
    });
  }
}

/* --------------------------------------------------------------------------
   2. Render Category Filter Pills
   -------------------------------------------------------------------------- */
function renderCategoryPills() {
  const pillsContainer = document.getElementById("categoryPillsContainer");
  if (!pillsContainer || typeof KINGS_CATEGORIES === "undefined") return;

  pillsContainer.innerHTML = KINGS_CATEGORIES.map(cat => `
    <button class="filter-pill ${currentCategory === cat.slug ? "active" : ""}" data-category="${cat.slug}">
      ${cat.name} <span class="filter-pill-count">(${cat.count})</span>
    </button>
  `).join("");

  pillsContainer.querySelectorAll(".filter-pill").forEach(btn => {
    btn.addEventListener("click", () => {
      currentCategory = btn.getAttribute("data-category");
      pillsContainer.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderArticles();
    });
  });
}

/* --------------------------------------------------------------------------
   3. Filter, Sort and Render Articles
   -------------------------------------------------------------------------- */
function getFilteredArticles() {
  if (typeof KINGS_ARTICLES === "undefined") return [];

  return KINGS_ARTICLES.filter(article => {
    const matchesCategory = currentCategory === "all" || article.category.toLowerCase() === currentCategory.toLowerCase();
    const matchesSearch = !searchQuery ||
      article.title.toLowerCase().includes(searchQuery) ||
      article.excerpt.toLowerCase().includes(searchQuery) ||
      article.author.name.toLowerCase().includes(searchQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery));

    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (currentSort === "shortest") {
      return parseInt(a.readTime) - parseInt(b.readTime);
    } else if (currentSort === "longest") {
      return parseInt(b.readTime) - parseInt(a.readTime);
    }
    // Default: newest by array order
    return 0;
  });
}

function renderArticles() {
  const container = document.getElementById("articlesContainer");
  const countEl = document.getElementById("articlesCountDisplay");
  if (!container) return;

  const articles = getFilteredArticles();
  const savedBookmarks = getSavedBookmarks();

  if (countEl) {
    countEl.textContent = `Showing ${articles.length} of ${KINGS_ARTICLES.length} curated essays`;
  }

  if (articles.length === 0) {
    container.className = "empty-state";
    container.innerHTML = `
      <h3>No Manuscripts Found</h3>
      <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 1.5rem;">
        No essays matched your search criteria for "<strong>${searchQuery}</strong>". Try clearing your search filters.
      </p>
      <button class="btn-outline" onclick="resetCatalogFilters()">Reset All Filters</button>
    `;
    return;
  }

  container.className = currentView === "grid" ? "magazine-grid" : "magazine-list-view";

  container.innerHTML = articles.map(article => {
    const isSaved = savedBookmarks.includes(article.id);
    return `
      <article class="card-article" data-article-id="${article.id}">
        <div class="card-image-wrap">
          <img src="${article.image}" alt="${article.title}" class="card-image" loading="lazy">
          <div class="card-image-overlay"></div>
          <div class="card-top-badges">
            <span class="badge-gold">${article.category}</span>
            <button class="card-bookmark-btn ${isSaved ? "saved" : ""}" 
                    data-bookmark-id="${article.id}" 
                    title="Bookmark essay" 
                    onclick="toggleBookmark('${article.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="card-meta-line">
            <span>${article.date}</span>
            <span>•</span>
            <span>${article.readTime}</span>
          </div>
          <h3 class="card-title" onclick="openReaderModal('${article.id}')">${article.title}</h3>
          <p class="card-excerpt">${article.excerpt}</p>
          <div class="card-footer">
            <div class="author-chip">
              <img src="${article.author.avatar}" alt="${article.author.name}" class="author-avatar">
              <span class="author-name">${article.author.name}</span>
            </div>
            <span class="read-link" onclick="openReaderModal('${article.id}')">
              Read Essay
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function resetCatalogFilters() {
  searchQuery = "";
  currentCategory = "all";
  currentSort = "newest";

  const searchInput = document.getElementById("blogSearchInput");
  if (searchInput) searchInput.value = "";

  const sortSelect = document.getElementById("blogSortSelect");
  if (sortSelect) sortSelect.value = "newest";

  renderCategoryPills();
  renderArticles();
}

/* --------------------------------------------------------------------------
   4. Interactive Article Reader Modal
   -------------------------------------------------------------------------- */
function initReaderModalEvents() {
  const overlay = document.getElementById("readerModalOverlay");
  const closeBtn = document.getElementById("readerCloseBtn");

  if (!overlay) return;

  if (closeBtn) {
    closeBtn.addEventListener("click", closeReaderModal);
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeReaderModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeReaderModal();
    }
  });

  // Font sizing buttons
  const fontDecBtn = document.getElementById("readerFontDec");
  const fontIncBtn = document.getElementById("readerFontInc");

  if (fontDecBtn) {
    fontDecBtn.addEventListener("click", () => {
      if (readerFontSize > 0.95) {
        readerFontSize -= 0.08;
        applyReaderFontSize();
      }
    });
  }

  if (fontIncBtn) {
    fontIncBtn.addEventListener("click", () => {
      if (readerFontSize < 1.45) {
        readerFontSize += 0.08;
        applyReaderFontSize();
      }
    });
  }
}

function applyReaderFontSize() {
  const body = document.getElementById("readerArticleBody");
  if (body) {
    body.style.fontSize = `${readerFontSize}rem`;
  }
}

function openReaderModal(articleId) {
  if (typeof KINGS_ARTICLES === "undefined") return;

  const article = KINGS_ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  const overlay = document.getElementById("readerModalOverlay");
  const titleEl = document.getElementById("readerArticleTitle");
  const catEl = document.getElementById("readerArticleCategory");
  const dateEl = document.getElementById("readerArticleDate");
  const readTimeEl = document.getElementById("readerArticleReadTime");
  const imgEl = document.getElementById("readerArticleImage");
  const bodyEl = document.getElementById("readerArticleBody");
  const authorAvatarEl = document.getElementById("readerAuthorAvatar");
  const authorNameEl = document.getElementById("readerAuthorName");
  const authorRoleEl = document.getElementById("readerAuthorRole");
  const bookmarkBtn = document.getElementById("readerBookmarkBtn");

  if (titleEl) titleEl.textContent = article.title;
  if (catEl) catEl.textContent = article.category;
  if (dateEl) dateEl.textContent = article.date;
  if (readTimeEl) readTimeEl.textContent = article.readTime;
  if (imgEl) {
    imgEl.src = article.image;
    imgEl.alt = article.title;
  }
  if (bodyEl) {
    bodyEl.innerHTML = article.content;
    applyReaderFontSize();
  }
  if (authorAvatarEl) authorAvatarEl.src = article.author.avatar;
  if (authorNameEl) authorNameEl.textContent = article.author.name;
  if (authorRoleEl) authorRoleEl.textContent = article.author.role;

  if (bookmarkBtn) {
    const isSaved = getSavedBookmarks().includes(article.id);
    bookmarkBtn.classList.toggle("saved", isSaved);
    bookmarkBtn.onclick = () => {
      toggleBookmark(article.id);
      bookmarkBtn.classList.toggle("saved", getSavedBookmarks().includes(article.id));
    };
  }

  // Setup share button
  const shareBtn = document.getElementById("readerShareBtn");
  if (shareBtn) {
    shareBtn.onclick = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        showKingsToast("Essay citation URL copied to clipboard");
      } else {
        showKingsToast("Essay citation ready");
      }
    };
  }

  if (overlay) {
    overlay.classList.add("active");
    overlay.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }
}

function closeReaderModal() {
  const overlay = document.getElementById("readerModalOverlay");
  if (overlay) {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}
