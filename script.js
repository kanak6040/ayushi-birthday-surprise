document.addEventListener("DOMContentLoaded", () => {
  const cake = document.getElementById("cakeButton");
  const finalMessage = document.getElementById("finalMessage");
  const hint = document.getElementById("cakeHint");
  const confettiButton = document.getElementById("confettiButton");
  const confettiLayer = document.getElementById("confettiLayer");

  function celebrate() {
    if (!confettiLayer) return;
    const symbols = ["♡", "✦", "✿", "♥", "✧", "🌸"];
    for (let i = 0; i < 34; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      piece.style.left = Math.random() * 100 + "%";
      piece.style.animationDelay = Math.random() * 0.9 + "s";
      piece.style.fontSize = (12 + Math.random() * 16) + "px";
      confettiLayer.appendChild(piece);
      window.setTimeout(() => piece.remove(), 3800);
    }
  }

  if (cake && finalMessage) {
    cake.addEventListener("click", () => {
      cake.querySelector(".flame")?.classList.add("hidden");
      finalMessage.classList.remove("hidden");
      if (hint) hint.textContent = "Wish made? ✨ Here's to a beautiful year ahead.";
      celebrate();
      finalMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
  if (confettiButton) confettiButton.addEventListener("click", celebrate);
});