document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 CLEAN Pro Service lancé avec succès");

    // =========================
    // 🍔 MENU HAMBURGER (FLUIDE UNIQUE)
    // =========================
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav ul");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }

    // =========================
    // ✨ ANIMATION CARTES (ULTRA FLUIDE)
    // =========================
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    cards.forEach(card => observer.observe(card));

    // =========================
    // ⬆ BOUTON RETOUR EN HAUT
    // =========================
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "⬆";
    scrollBtn.id = "scrollTopBtn";

    document.body.appendChild(scrollBtn);

    Object.assign(scrollBtn.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "20px",
        background: "#D4AF37",
        color: "#000",
        display: "none",
        zIndex: "999"
    });

    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // =========================
    // 🔥 POPUP (2 MINUTES)
    // =========================
    const popup = document.getElementById("popup");

    if (popup) {
        setTimeout(() => {
            popup.style.display = "flex";
        }, 120000); // 2 minutes
    }

    // =========================
    // 💬 MESSAGE CONSOLE (OPTION DEBUG)
    // =========================
    setTimeout(() => {
        console.log("👋 Bienvenue sur CLEAN Pro Service");
    }, 1500);

});
function sendBooking(){

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const address = document.getElementById("address").value;
const service = document.getElementById("service").value;
const date = document.getElementById("date").value;

const message =
`Bonjour CLEAN Pro Service

Nom : ${name}
Téléphone : ${phone}
Email : ${email}
Adresse : ${address}
Service : ${service}
Date : ${date}`;

const whatsappUrl =
`https://wa.me/22898207231?text=${encodeURIComponent(message)}`;

window.open(whatsappUrl, "_blank");
}
