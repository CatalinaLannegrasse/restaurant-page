// src/home.js

export default function loadHome() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "AURA";

    const subline = document.createElement("p");
    subline.textContent = "The Art of the Artisan Burger";
    subline.style.letterSpacing = "4px";
    subline.style.textTransform = "uppercase";
    subline.style.fontSize = "0.85rem";
    subline.style.color = "#d4af37"; // Luxury gold accent
    subline.style.marginBottom = "1.5rem";

    const description = document.createElement("p");
    description.textContent = "Elevating street heritage to fine gastronomy. Hand-ground Miyazaki Wagyu, artisanal brioche baked fresh hourly, and proprietary truffle reductions crafted for the discerning palate.";

    const image = document.createElement("img");
    image.src = "https://images.unsplash.com/photo-1550547660-d9450f859349"; // High-end gourmet burger
    image.alt = "Gourmet artisan burger presentation";
    image.width = 500;

    const hours = document.createElement("div");
    hours.classList.add("info-card");
    hours.innerHTML = `
        <h3>Hours of Service</h3>
        <p>Tuesday – Sunday: 5:00 PM – 11:00 PM</p>
        <p class="sub-text">Reservations Recommended</p>
    `;

    content.appendChild(headline);
    content.appendChild(subline);
    content.appendChild(description);
    content.appendChild(image);
    content.appendChild(hours);
}