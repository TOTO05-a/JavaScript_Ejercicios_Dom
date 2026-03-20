import "../components/eventCards.js";
import { getData } from "../storage/storage.js";

export const Home = () => {
    return `
        <header>
            <h2>🎟️ Conciertos</h2>
            <input id="search" placeholder="Buscar eventos...">
            <button onclick="navigate('/cart')">🛒</button>
        </header>

        <div id="events"></div>
    `;
};

export const loadEvents = () => {
    const container = document.getElementById("events");
    const events = getData("events");

    container.innerHTML = "";

    events.forEach(event => {
        const card = document.createElement("event-card");
        card.data = event;
        container.appendChild(card);
    });

    // 🔍 BUSCADOR
    document.getElementById("search")
        .addEventListener("input", (e) => {
            const value = e.target.value.toLowerCase();

            const filtered = events.filter(ev =>
                ev.name.toLowerCase().includes(value)
            );

            container.innerHTML = "";

            filtered.forEach(event => {
                const card = document.createElement("event-card");
                card.data = event;
                container.appendChild(card);
            });
        });
};