// src/index.js
import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Load the home page by default on initial load
    loadHome();

    // 2. Grab the buttons from your template.html
    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const aboutBtn = document.querySelector("#about-btn");

    // 3. Attach click event listeners to switch views
    homeBtn.addEventListener("click", () => {
        loadHome();
    });

    menuBtn.addEventListener("click", () => {
        loadMenu();
    });

    aboutBtn.addEventListener("click", () => {
        loadAbout();
    });
});

console.log("Webpack is working!");