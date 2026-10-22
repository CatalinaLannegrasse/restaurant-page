// src/about.js

export default function loadAbout() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "The Philosophy";

    const story = document.createElement("p");
    story.textContent = "Founded by Michelin-trained chefs who dared to ask: What if the humble burger was treated with the reverence of high French gastronomy? At AURA, every element is curated, sourced sustainably, and executed with absolute precision.";

    const location = document.createElement("div");
    location.classList.add("info-card");
    location.innerHTML = `
        <h3>Location & Concierge</h3>
        <p>742 Velvet Boulevard, Suite 400</p>
        <p>Concierge Direct: (555) 384-9200</p>
        <p class="sub-text">Complimentary Valet Parking at Main Entrance</p>
    `;

    content.appendChild(headline);
    content.appendChild(story);
    content.appendChild(location);
}