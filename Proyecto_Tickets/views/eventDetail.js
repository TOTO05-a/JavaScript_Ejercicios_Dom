import { getData } from "../storage/storage.js";
import { addToCart } from "../storage/carts.js";

export const EventDetail = (id) => {
    const events = getData("events");
    const event = events.find(e => e.id == id);

    if (!event) {
        return `<h1>No encontrado</h1>`;
    }

    setTimeout(() => {
        document.getElementById("add")
            .addEventListener("click", () => {
                addToCart(event);
                alert("Agregado al carrito");
            });
    }, 0);

    return `
        <button onclick="navigate('/')">⬅ Volver</button>

        <h1>${event.name}</h1>
        <img src="${event.image}" width="300">

        <p>${event.description}</p>
        <p>${event.city}</p>
        <p>${event.date}</p>
        <p>$${event.price}</p>

        <button id="add">Agregar al carrito</button>
    `;
};