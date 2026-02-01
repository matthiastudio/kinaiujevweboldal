const map = {
  openFunfacts: "funfactsModal",
  openDates: "datesModal",
  openTraditional: "traditionalModal",
  openZodiac: "zodiacModal",
};

function openModal(modal) {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// Modal setup
Object.entries(map).forEach(([btnId, modalId]) => {
  const btn = document.getElementById(btnId);
  const modal = document.getElementById(modalId);

  if (!btn || !modal) return;

  btn.addEventListener("click", () => openModal(modal));

  // close by clicking background
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal);
  });

  // close by X
  const closeBtn = modal.querySelector("[data-close]");
  if (closeBtn) closeBtn.addEventListener("click", () => closeModal(modal));
});

// close all open modals with ESC
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  document.querySelectorAll(".modal.open").forEach(closeModal);
});


const countdownEl = document.getElementById("countdown");

if (countdownEl) { 
  const countDownDate = new Date(2026, 1, 27, 0, 0, 0).getTime(); 

  const timer = setInterval(() => {
    const now = Date.now();
    const distance = countDownDate - now;

    if (distance <= 0) {
      clearInterval(timer);
      countdownEl.textContent = "BOLDOG LÓÉVET";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `${days} nap ${hours} óra ${minutes} perc ${seconds} másodperc`;
  }, 1000);
} else {
  console.warn("Nincs #countdown elem a HTML-ben.");
}




