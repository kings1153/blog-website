/**
 * KINGS Editorial Journal — Global Logic & Interactions (scripts/main.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMastheadDate();
  initReadingProgressBar();
  initMobileDrawer();
  initBookmarksSystem();
  initNewsletterForm();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Obsidian Dark vs Alabaster Light)
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem("kings-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeToggleButtons(savedTheme);

  const themeButtons = document.querySelectorAll(".theme-toggle-btn");
  themeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("kings-theme", newTheme);
      updateThemeToggleButtons(newTheme);
      showKingsToast(`Switched to ${newTheme === "dark" ? "Obsidian Dark" : "Alabaster Light"} edition`);
    });
  });
}

function updateThemeToggleButtons(theme) {
  const themeLabels = document.querySelectorAll(".theme-toggle-label");
  themeLabels.forEach(el => {
    el.textContent = theme === "dark" ? "Dark Mode" : "Light Mode";
  });
}

/* --------------------------------------------------------------------------
   2. Live Editorial Masthead Date
   -------------------------------------------------------------------------- */
function initMastheadDate() {
  const dateElements = document.querySelectorAll(".masthead-live-date");
  if (!dateElements.length) return;

  const now = new Date();
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  const formattedDate = now.toLocaleDateString("en-US", options);

  dateElements.forEach(el => {
    el.textContent = formattedDate;
  });
}

/* --------------------------------------------------------------------------
   3. Global Reading Progress Bar
   -------------------------------------------------------------------------- */
function initReadingProgressBar() {
  const bar = document.getElementById("readingProgressBar");
  if (!bar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight <= 0) {
      bar.style.width = "0%";
      return;
    }
    const progress = (window.scrollY / totalHeight) * 100;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   4. Mobile Navigation Drawer
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const openBtn = document.querySelector(".mobile-menu-toggle");
  const closeBtn = document.querySelector(".mobile-drawer-close");
  const overlay = document.querySelector(".mobile-drawer-overlay");
  const drawer = document.querySelector(".mobile-drawer");

  if (!openBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeDrawer = () => {
    drawer.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
}

/* --------------------------------------------------------------------------
   5. Bookmarks Management & Drawer
   -------------------------------------------------------------------------- */
function getSavedBookmarks() {
  try {
    return JSON.parse(localStorage.getItem("kings-bookmarks") || "[]");
  } catch (e) {
    return [];
  }
}

function saveBookmarks(bookmarks) {
  localStorage.setItem("kings-bookmarks", JSON.stringify(bookmarks));
  updateBookmarkBadges();
}

function updateBookmarkBadges() {
  const bookmarks = getSavedBookmarks();
  const badges = document.querySelectorAll(".bookmark-count-badge");
  badges.forEach(badge => {
    badge.textContent = bookmarks.length;
    badge.style.display = bookmarks.length > 0 ? "flex" : "none";
  });
}

function toggleBookmark(articleId) {
  let bookmarks = getSavedBookmarks();
  const index = bookmarks.indexOf(articleId);
  const article = typeof KINGS_ARTICLES !== "undefined" ? KINGS_ARTICLES.find(a => a.id === articleId) : null;
  const title = article ? article.title : "Essay";

  if (index >= 0) {
    bookmarks.splice(index, 1);
    saveBookmarks(bookmarks);
    showKingsToast(`Removed from reading list`);
  } else {
    bookmarks.push(articleId);
    saveBookmarks(bookmarks);
    showKingsToast(`Saved to reading list`);
  }

  // Update UI bookmark buttons on page
  document.querySelectorAll(`[data-bookmark-id="${articleId}"]`).forEach(btn => {
    btn.classList.toggle("saved", bookmarks.includes(articleId));
  });

  renderBookmarksDrawer();
}

function initBookmarksSystem() {
  updateBookmarkBadges();

  const drawerTrigger = document.querySelector(".bookmarks-drawer-trigger");
  const drawerClose = document.querySelector(".bookmarks-drawer-close");
  const drawer = document.querySelector(".bookmarks-drawer");
  const overlay = document.querySelector(".bookmarks-drawer-overlay");

  if (drawerTrigger && drawer) {
    drawerTrigger.addEventListener("click", () => {
      renderBookmarksDrawer();
      drawer.classList.add("active");
      if (overlay) overlay.classList.add("active");
    });
  }

  if (drawerClose && drawer) {
    drawerClose.addEventListener("click", () => {
      drawer.classList.remove("active");
      if (overlay) overlay.classList.remove("active");
    });
  }

  if (overlay && drawer) {
    overlay.addEventListener("click", () => {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
    });
  }
}

function renderBookmarksDrawer() {
  const listEl = document.querySelector(".bookmarks-list");
  if (!listEl) return;

  const savedIds = getSavedBookmarks();

  if (savedIds.length === 0 || typeof KINGS_ARTICLES === "undefined") {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <p style="font-family: var(--font-display); font-size: 1.25rem; color: var(--text-primary); margin-bottom: 0.5rem;">Your Reading Sanctuary is Empty</p>
        <p style="font-size: 0.85rem;">Save essays by clicking the bookmark ribbon on any card to read them later at your leisure.</p>
      </div>
    `;
    return;
  }

  const savedArticles = KINGS_ARTICLES.filter(a => savedIds.includes(a.id));

  listEl.innerHTML = savedArticles.map(article => `
    <div class="bookmark-item">
      <img src="${article.image}" alt="${article.title}" class="bookmark-thumb">
      <div style="flex: 1;">
        <span class="badge-gold" style="font-size: 0.65rem; padding: 0.15rem 0.5rem; margin-bottom: 0.35rem;">${article.category}</span>
        <h4 class="bookmark-item-title" onclick="openReaderModal('${article.id}')">${article.title}</h4>
        <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">${article.readTime} • ${article.author.name}</div>
      </div>
      <button class="bookmark-remove-btn" title="Remove" onclick="toggleBookmark('${article.id}')">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `).join("");
}

/* --------------------------------------------------------------------------
   6. Global Toast Notification System
   -------------------------------------------------------------------------- */
function showKingsToast(message) {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <div class="toast-gold-dot"></div>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(15px)";
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

/* --------------------------------------------------------------------------
   7. The Kings Dispatch Newsletter Form Handler
   -------------------------------------------------------------------------- */
function initNewsletterForm() {
  const forms = document.querySelectorAll(".dispatch-form");
  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector(".dispatch-input");
      const email = input ? input.value.trim() : "";

      if (!email || !email.includes("@")) {
        showKingsToast("Please enter a valid electronic mail address.");
        return;
      }

      showKingsToast("Welcome to The Kings Dispatch. Your confirmation issue is on its way.");
      form.reset();
    });
  });
}
