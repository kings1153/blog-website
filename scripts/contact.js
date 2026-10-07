/**
 * KINGS Editorial Journal — Contact & Editorial Submissions (scripts/contact.js)
 */

document.addEventListener("DOMContentLoaded", () => {
  initContactForm();
});

function initContactForm() {
  const form = document.getElementById("pitchForm");
  if (!form) return;

  const messageInput = document.getElementById("pitchMessage");
  const charCounter = document.getElementById("pitchCharCount");

  // Character Counter for pitch/manuscript
  if (messageInput && charCounter) {
    messageInput.addEventListener("input", () => {
      const length = messageInput.value.length;
      charCounter.textContent = `${length} / 1200 characters`;
      if (length > 1200) {
        charCounter.style.color = "#EF4444";
      } else {
        charCounter.style.color = "var(--text-muted)";
      }
    });
  }

  // Form Submission Handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("pitchName");
    const emailInput = document.getElementById("pitchEmail");
    const typeSelect = document.getElementById("pitchType");
    const submitBtn = form.querySelector("button[type='submit']");

    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || name.length < 2) {
      showKingsToast("Please provide your full legal name or pseudonym.");
      if (nameInput) nameInput.focus();
      return;
    }

    if (!email || !email.includes("@")) {
      showKingsToast("Please enter a valid electronic mail address.");
      if (emailInput) emailInput.focus();
      return;
    }

    if (!message || message.length < 20) {
      showKingsToast("Please provide a more detailed synopsis (at least 20 characters).");
      if (messageInput) messageInput.focus();
      return;
    }

    // Submit Simulation
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="spin-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 1s linear infinite;">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10"></path>
      </svg>
      Transmitting to Editorial Desk...
    `;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      if (charCounter) charCounter.textContent = "0 / 1200 characters";

      showKingsToast("Inquiry received. The Kings Editorial Board reviews submissions weekly.");
    }, 1200);
  });
}
