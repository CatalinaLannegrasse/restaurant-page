// src/menu.js

export default function loadMenu() {
    const content = document.querySelector("#content");
    content.innerHTML = "";

    const headline = document.createElement("h1");
    headline.textContent = "Gastronomic Menu";

    const subline = document.createElement("p");
    subline.textContent = "Crafted with precision, paired with elegance.";
    subline.style.color = "#d4af37";
    subline.style.letterSpacing = "2px";
    subline.style.fontSize = "0.85rem";
    subline.style.textTransform = "uppercase";
    subline.style.marginBottom = "2rem";

    const menuList = document.createElement("ul");

    const items = [
        { name: "The Wagyu Truffle Royale", price: "$32", desc: "A5 Miyazaki Wagyu beef, aged Gruyère, shaved black truffle, and wild mushroom ragout on a gold-dusted brioche." },
        { name: "Foie Gras & Fig Burger", price: "$38", desc: "Prime Black Angus chuck, seared Hudson Valley foie gras, mission fig compote, and rare port wine reduction." },
        { name: "Truffle & Parmesan Frites", price: "$14", desc: "Hand-cut Kennebec potatoes, 24-month Parmigiano-Reggiano, organic white truffle oil, and roasted garlic aioli." },
        { name: "Bourbon Vanilla Bean Soufflé Shake", price: "$16", desc: "Madagascar vanilla bean gelato, single-barrel bourbon, house-made salted caramel, and smoked sea salt crystals." }
    ];

    items.forEach(dish => {
        const item = document.createElement("li");
        
        const headerDiv = document.createElement("div");
        headerDiv.classList.add("menu-item-header");
        
        const title = document.createElement("h3");
        title.textContent = dish.name;
        
        const price = document.createElement("span");
        price.textContent = dish.price;
        price.classList.add("price");

        headerDiv.appendChild(title);
        headerDiv.appendChild(price);
        
        const description = document.createElement("p");
        description.textContent = dish.desc;

        item.appendChild(headerDiv);
        item.appendChild(description);
        menuList.appendChild(item);
    });

    content.appendChild(headline);
    content.appendChild(subline);
    content.appendChild(menuList);
}