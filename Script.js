document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Merci pour votre inscription ! Vous recevrez les prochains TD par email.");
});

function copyLink() {
  const url = "https://Cdric288.github.io";
  navigator.clipboard.writeText(url).then(() => {
    alert("Lien copié dans le presse-papiers !");
  });
}
